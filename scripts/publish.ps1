param(
  [string]$Message = "update: publish site"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne "main") {
  throw "Current branch is '$branch'. Switch to main before publishing."
}

git add -A
if ($LASTEXITCODE -ne 0) {
  throw "git add failed."
}

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Output "No staged changes to publish."
  exit 0
}

git commit -m $Message
git push origin main

Write-Output "Pushed to origin/main. GitHub Pages will update automatically."
