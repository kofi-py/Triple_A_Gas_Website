<#
extract-image-urls.ps1

Purpose:
  Given a text file containing one page URL per line, fetch each page and extract image URLs
  found in <img> tags, srcset attributes, og:image meta tags, and CSS background-image URLs.

Usage examples:
  1) Create a file pages.txt with one page URL per line.
  2) From the project folder run:
       powershell -ExecutionPolicy Bypass -File .\extract-image-urls.ps1 -PagesFile .\pages.txt -OutputFile .\found-image-urls.txt

Parameters:
  -PagesFile : Path to a text file listing page URLs (one per line). Default: .\pages.txt
  -OutputFile: Path to write discovered image URLs (one per line). Default: .\found-image-urls.txt
  -Verbose   : Show progress output (switch)

Notes:
  - The script sets a browser-like User-Agent header to improve compatibility.
  - Some pages (Facebook/Instagram) block automated requests; run this from your machine to avoid remote blocking.
#>

param(
    [string]$PagesFile = ".\pages.txt",
    [string]$OutputFile = ".\found-image-urls.txt",
    [switch]$Verbose
)

if (-not (Test-Path $PagesFile)) {
    Write-Error "Pages file not found: $PagesFile`nCreate a file with one page URL per line and re-run."
    exit 1
}

$pages = Get-Content $PagesFile | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
if ($pages.Count -eq 0) { Write-Error "No URLs found in $PagesFile"; exit 1 }

$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36'

$found = New-Object System.Collections.Generic.HashSet[string]

function Resolve-Url([string]$base, [string]$url) {
    try {
        if ([string]::IsNullOrWhiteSpace($url)) { return $null }
        $url = $url.Trim("'\" ")
        if ($url -match '^(https?:)?//') {
            if ($url -match '^//') { return "https:$url" }
            if ($url -match '^https?:') { return $url }
        }
        # Relative URL
        $baseUri = [System.Uri]$base
        $resolved = New-Object System.Uri($baseUri, $url)
        return $resolved.AbsoluteUri
    } catch {
        return $null
    }
}

foreach ($page in $pages) {
    if ($Verbose) { Write-Host "Fetching: $page" }
    try {
        $resp = Invoke-WebRequest -Uri $page -Headers @{ 'User-Agent' = $ua } -UseBasicParsing -TimeoutSec 30
        $html = $resp.Content
        $base = $resp.BaseResponse.ResponseUri.AbsoluteUri
    } catch {
        Write-Warn "Failed to fetch $page : $_"
        continue
    }

    # 1) og:image meta
    foreach ($m in ([regex]::Matches($html, '<meta[^>]+(?:property|name)\s*=\s*"(?:og:image|twitter:image)"[^>]*content\s*=\s*"([^"]+)"', 'IgnoreCase'))) {
        $u = Resolve-Url $base $m.Groups[1].Value
        if ($u) { $found.Add($u) > $false | Out-Null }
    }

    # 2) <img> tags: src and srcset
    foreach ($m in ([regex]::Matches($html, '<img[^>]+>', 'IgnoreCase'))) {
        $tag = $m.Value
        # src
        $srcMatch = [regex]::Match($tag, 'src\s*=\s*"([^"]+)"', 'IgnoreCase')
        if ($srcMatch.Success) { $u = Resolve-Url $base $srcMatch.Groups[1].Value; if ($u) { $found.Add($u) > $false | Out-Null } }
        # data-src
        $dsrc = [regex]::Match($tag, 'data-src\s*=\s*"([^"]+)"', 'IgnoreCase')
        if ($dsrc.Success) { $u = Resolve-Url $base $dsrc.Groups[1].Value; if ($u) { $found.Add($u) > $false | Out-Null } }
        # srcset (take each URL before any space)
        $ss = [regex]::Match($tag, 'srcset\s*=\s*"([^"]+)"', 'IgnoreCase')
        if ($ss.Success) {
            $parts = $ss.Groups[1].Value -split ',' | ForEach-Object { $_.Trim() }
            foreach ($p in $parts) {
                $uPart = ($p -split '\s+')[0]
                $u = Resolve-Url $base $uPart
                if ($u) { $found.Add($u) > $false | Out-Null }
            }
        }
    }

    # 3) CSS background-image in style attributes or style tags
    foreach ($m in ([regex]::Matches($html, 'background-image\s*:\s*url\(([^\)]+)\)', 'IgnoreCase'))) {
        $uval = $m.Groups[1].Value.Trim()
        $uval = $uval.Trim("'\"")
        $u = Resolve-Url $base $uval
        if ($u) { $found.Add($u) > $false | Out-Null }
    }

    # 4) inline style attributes with url(...)
    foreach ($m in ([regex]::Matches($html, 'style\s*=\s*"[^"]*url\(([^\)]+)\)[^"]*"', 'IgnoreCase'))) {
        $uval = $m.Groups[1].Value.Trim()
        $uval = $uval.Trim("'\"")
        $u = Resolve-Url $base $uval
        if ($u) { $found.Add($u) > $false | Out-Null }
    }

    # 5) Common JSON-LD or scripts containing image URLs (quick regex for https://...jpg|png|webp)
    foreach ($m in ([regex]::Matches($html, '(https?://[^\"\'\s>]+\.(?:jpg|jpeg|png|webp|gif))', 'IgnoreCase'))) {
        $u = $m.Groups[1].Value
        $u = Resolve-Url $base $u
        if ($u) { $found.Add($u) > $false | Out-Null }
    }

}

# Write unique URLs to output file
$foundList = $found | Sort-Object
if ($foundList.Count -eq 0) { Write-Warn "No image URLs found." }
else {
    $foundList | Out-File -FilePath $OutputFile -Encoding UTF8
    Write-Host "Found $($foundList.Count) unique image URLs. Saved to: $OutputFile"
}

# Also print the top 30 to console for quick copy-paste
$foundList | Select-Object -First 30 | ForEach-Object { Write-Host $_ }
