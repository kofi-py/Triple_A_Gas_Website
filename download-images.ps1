<#
download-images.ps1

Usage:
  - Place the script in the project root (Triple_A_Gas_Website) or run it from anywhere.
  - Create a plain text file with one image URL per line, e.g. C:\temp\image-urls.txt
  - Run:
      powershell -ExecutionPolicy Bypass -File "C:\Users\user\OneDrive\Desktop\kofi's Desktop\Triple_A_Gas_Website\download-images.ps1" -UrlsFile "C:\temp\image-urls.txt"

Parameters:
  -UrlsFile  : Path to a text file containing one image URL per line. Default: C:\temp\image-urls.txt
  -OutputDir : Directory where images will be saved. Default: <script-folder>\app\images
  -Overwrite : If set, will overwrite existing files with the same name.

Notes:
  - The script sets a User-Agent header to mimic a browser — some servers require this.
  - If an image filename cannot be determined from the URL, a GUID-based name is used.
  - If ImageMagick (magick/convert) is installed and you want resized copies, uncomment the example at the bottom.
#>

param(
    [string]$UrlsFile = "C:\temp\image-urls.txt",
    [string]$OutputDir = "$PSScriptRoot\app\images",
    [switch]$Overwrite
)

# Make sure the URLs file exists
if (-not (Test-Path $UrlsFile)) {
    Write-Error "URLs file not found: $UrlsFile`nCreate a file with one image URL per line and re-run."
    exit 1
}

# Create output dir if needed
if (-not (Test-Path $OutputDir)) {
    try {
        New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
        Write-Host "Created output directory: $OutputDir"
    } catch {
        Write-Error "Failed to create output directory: $OutputDir`n$_"
        exit 1
    }
}

$urls = Get-Content $UrlsFile | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
if ($urls.Count -eq 0) {
    Write-Error "No URLs found in $UrlsFile"
    exit 1
}

$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36'

foreach ($url in $urls) {
    try {
        $uri = [uri]$url
    } catch {
        Write-Warn "Skipping invalid URL: $url"
        continue
    }

    # Extract filename from URL path (strip querystring)
    $fileName = [System.IO.Path]::GetFileName($uri.LocalPath)
    if ([string]::IsNullOrWhiteSpace($fileName)) {
        $fileName = [System.Guid]::NewGuid().ToString() + ".jpg"
    }

    $dest = Join-Path $OutputDir $fileName

    if ((Test-Path $dest) -and -not $Overwrite) {
        Write-Host "Skipping (exists): $fileName"
        continue
    }

    Write-Host "Downloading: $url -> $dest"
    try {
        Invoke-WebRequest -Uri $url -Headers @{ 'User-Agent' = $ua } -OutFile $dest -UseBasicParsing -TimeoutSec 60
        Write-Host "Saved: $dest"
    } catch {
        Write-Warn "Failed to download $url : $_"
        # Attempt a fallback via Curl.exe (Windows 10+)
        try {
            Write-Host "Attempting curl fallback for $url"
            & curl.exe -L -o "$dest" -A "$ua" "$url"
            if (Test-Path $dest) { Write-Host "Saved (curl): $dest" } else { Write-Warn "Curl fallback did not produce a file for $url" }
        } catch {
            Write-Warn "Curl fallback failed for $url : $_"
        }
    }
}

Write-Host "All done. Images saved to: $OutputDir"

<#
# Optional ImageMagick example (uncomment if ImageMagick is installed and you want a resized copy):
foreach ($f in Get-ChildItem -Path $OutputDir -File) {
    $out = Join-Path $OutputDir ([System.IO.Path]::GetFileNameWithoutExtension($f.Name) + "-1600.jpg")
    Write-Host "Creating resized copy: $out"
    & magick convert "$($f.FullName)" -resize 1600x "$out" 2>$null
}
#>
