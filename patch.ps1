$css = Get-Content styles.css
$newCss = @()

$replaceTitle = $false
$replaceParagraph = $false
$replaceTag = $false

foreach ($line in $css) {
    if ($line -match '^\.ds-(hero|categories|curadoria|novidades|showroom)-title \{') {
        $replaceTitle = $true
    } elseif ($line -match '^\.ds-(hero-paragraph|curadoria-desc|showroom-address|footer-text|cat-clean-title|footer-slogan) \{') {
        $replaceParagraph = $true
    } elseif ($line -match '^\.ds-(hero-support-line|pill-text|btn-glass|btn-solid|nav-link|card-subtitle-text|novidades-brand|footer-title|cat-clean-cta) \{') {
        $replaceTag = $true
    } elseif ($line -match '^\.ds-footer-list a \{') {
        $replaceParagraph = $true
    } elseif ($line -match '^\}') {
        $replaceTitle = $false
        $replaceParagraph = $false
        $replaceTag = $false
    }
    
    if ($line -match '^\s*font-size:\s*\d+(px|em);' -and ($replaceTitle -or $replaceParagraph -or $replaceTag)) {
        if ($replaceTitle) {
            $line = $line -replace 'font-size:\s*\d+(px|em);', 'font-size: var(--ds-size-title);'
        } elseif ($replaceParagraph) {
            $line = $line -replace 'font-size:\s*\d+(px|em);', 'font-size: var(--ds-size-paragraph);'
        } elseif ($replaceTag) {
            $line = $line -replace 'font-size:\s*\d+(px|em);', 'font-size: var(--ds-size-tag);'
        }
    }
    $newCss += $line
}
$newCss | Out-File -FilePath styles.css -Encoding utf8
