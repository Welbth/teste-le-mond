const fs = require('fs');
let css = fs.readFileSync('c:/Users/luise/Downloads/Le Mond/styles.css', 'utf8');

// Fix the font families (revert mistake)
css = css.replace(/--font-display: 'Playfair Display', serif;/g, "--font-display: 'Fraunces', Georgia, serif;");
css = css.replace(/--font-sans: 'Inter', sans-serif;/g, "--font-sans: 'Plus Jakarta Sans', sans-serif;");

// Add CSS variables to media queries
if (!css.includes('--ds-size-title: 42px;')) {
    css = css.replace(/@media \(max-width: 1024px\) \{/, `@media (max-width: 1024px) {
    :root {
        --ds-size-title: 42px;
        --ds-size-paragraph: 14px;
        --ds-size-tag: 11px;
    }`);
}
if (!css.includes('--ds-size-title: 34px;')) {
    css = css.replace(/@media \(max-width: 768px\) \{/, `@media (max-width: 768px) {
    :root {
        --ds-size-title: 34px;
        --ds-size-paragraph: 13px;
        --ds-size-tag: 9px;
    }`);
}

// Function to safely replace font-size in blocks
function replaceSize(className, variable) {
    const regex = new RegExp(`(\\.${className}\\s*\\{[\\s\\S]*?)font-size:\\s*\\d+(?:px|em);`, 'g');
    css = css.replace(regex, `$1font-size: var(${variable});`);
}

// Replace titles
replaceSize('ds-hero-title', '--ds-size-title');
replaceSize('ds-categories-title', '--ds-size-title');
replaceSize('ds-curadoria-title', '--ds-size-title');
replaceSize('ds-novidades-title', '--ds-size-title');
replaceSize('ds-showroom-title', '--ds-size-title');

// Replace paragraphs
replaceSize('ds-hero-paragraph', '--ds-size-paragraph');
replaceSize('ds-curadoria-desc', '--ds-size-paragraph');
replaceSize('ds-showroom-address', '--ds-size-paragraph');
replaceSize('ds-footer-text', '--ds-size-paragraph');
replaceSize('ds-cat-clean-title', '--ds-size-paragraph');
replaceSize('ds-footer-slogan', '--ds-size-paragraph');
replaceSize('ds-footer-list a', '--ds-size-paragraph');

// Replace tags
replaceSize('ds-hero-support-line', '--ds-size-tag');
replaceSize('ds-pill-text', '--ds-size-tag');
replaceSize('ds-btn-glass', '--ds-size-tag');
replaceSize('ds-btn-solid', '--ds-size-tag');
replaceSize('ds-nav-link', '--ds-size-tag');
replaceSize('ds-card-subtitle-text', '--ds-size-tag');
replaceSize('ds-novidades-brand', '--ds-size-tag');
replaceSize('ds-footer-title', '--ds-size-tag');
replaceSize('ds-cat-clean-cta', '--ds-size-tag');

// Remove redundant font-sizes from media queries
css = css.replace(/\.ds-hero-title\s*\{\s*font-size:\s*\d+px;\s*margin-left:\s*auto;\s*margin-right:\s*auto;\s*\}/g, '.ds-hero-title {\n        margin-left: auto;\n        margin-right: auto;\n    }');
css = css.replace(/\.ds-hero-paragraph\s*\{\s*font-size:\s*\d+px;\s*margin-left:\s*auto;\s*margin-right:\s*auto;\s*\}/g, '.ds-hero-paragraph {\n        margin-left: auto;\n        margin-right: auto;\n    }');
css = css.replace(/\.ds-hero-title\s*\{\s*font-size:\s*\d+px;\s*margin-bottom:\s*\d+px;\s*\}/g, '.ds-hero-title {\n        margin-bottom: 20px;\n    }');
css = css.replace(/\.ds-hero-paragraph\s*\{\s*font-size:\s*\d+px;\s*\}/g, '');
css = css.replace(/\/\* Categories \*\/\s*\.ds-categories-title\s*\{\s*font-size:\s*\d+px;\s*\}/g, '');
css = css.replace(/\.ds-curadoria-title\s*\{\s*font-size:\s*\d+px;\s*\}/g, '');
css = css.replace(/\.ds-showroom-title\s*\{\s*font-size:\s*\d+px;\s*\}/g, '');
css = css.replace(/\.ds-showroom-subtitle\s*\{\s*font-size:\s*\d+px;\s*\}/g, '');
css = css.replace(/\.ds-hero-support-line\s*\{\s*font-size:\s*\d+px;\s*letter-spacing:\s*[\d.]+px;\s*text-align:\s*center;\s*text-wrap:\s*balance;\s*\}/g, '.ds-hero-support-line {\n        letter-spacing: 1.5px;\n        text-align: center;\n        text-wrap: balance;\n    }');

fs.writeFileSync('c:/Users/luise/Downloads/Le Mond/styles.css', css);
console.log('done');
