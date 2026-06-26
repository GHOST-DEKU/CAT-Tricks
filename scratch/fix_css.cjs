const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const injection = `
        body.light-mode {
            --bg-color: #F5F5F7;
            --card-bg: rgba(255, 255, 255, 0.8);
            --card-border: rgba(0, 0, 0, 0.08);
            --text-main: #1D1D1F;
            --text-muted: #86868B;
            --nav-bg: rgba(0, 0, 0, 0.04);
            --nav-border: rgba(0, 0, 0, 0.08);
            --tag-bg: rgba(0, 0, 0, 0.05);
            --tag-border: rgba(0, 0, 0, 0.1);
            
            --toggle-bg: rgba(0, 0, 0, 0.05);
            --toggle-border: rgba(0, 0, 0, 0.1);
            --slider-track: rgba(0, 0, 0, 0.15);
            --slider-handle: #1D1D1F;
            --bg-glow: rgba(0, 0, 0, 0.03);
            --scroll-thumb: rgba(0, 0, 0, 0.2);
            --scroll-thumb-hover: rgba(0, 0, 0, 0.4);
            --title-mid: #4f46e5;
        }

        body[data-theme='Quant'] {
            --accent-1: #0A84FF;
            --accent-2: #BF5AF2;
            --bg-glow: rgba(191, 90, 242, 0.15);
        }

        body[data-theme='DILR'] {
            --accent-1: #FF9F0A;
            --accent-2: #FF453A;
            --bg-glow: rgba(255, 69, 58, 0.15);
        }

        body[data-theme='VARC'] {
            --accent-1: #30B0C7;
            --accent-2: #32D74B;
            --bg-glow: rgba(50, 215, 75, 0.15);
        }

        body[data-theme='Vocab'] {
            --accent-1: #FFD60A; /* Gold Yellow */
            --accent-2: #FFC008; /* Rich Amber */
            --bg-glow: rgba(255, 214, 10, 0.12);
        }
`;

css = css.replace(':root {', ':root {\n            --toggle-bg: rgba(255, 255, 255, 0.05);\n            --toggle-border: rgba(255, 255, 255, 0.1);\n            --slider-track: rgba(255, 255, 255, 0.1);\n            --slider-handle: #ffffff;\n' + injection);

css = css.replace('background: rgba(255, 255, 255, 0.1);', 'background: var(--slider-track);');
css = css.replace('background: #ffffff;', 'background: var(--slider-handle);');

// The toggle background is defined with a newline before the border in styles.css
css = css.replace(/background: rgba\(255, 255, 255, 0\.05\);[\s\n\r]+border: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'background: var(--toggle-bg);\n            border: 1px solid var(--toggle-border);\n            color: var(--text-main);');

fs.writeFileSync('src/index.css', css);
