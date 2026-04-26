/* ESN Gıda — Interactive World Map
   Auto-injects into [data-world-map] elements.
   Localizes tooltips & origin label per <html lang="..."> */
(function () {
    'use strict';

    var lang = (document.documentElement.getAttribute('lang') || 'tr').toLowerCase().split('-')[0];

    var L = {
        tr: {
            origin: 'SİVAS · TÜRKİYE',
            countries: {
                de: 'Almanya', nl: 'Hollanda', dk: 'Danimarka', uk: 'İngiltere',
                fr: 'Fransa', it: 'İtalya', us: 'ABD', ca: 'Kanada', au: 'Avustralya',
                sa: 'Suudi Arabistan', ae: 'BAE', ru: 'Rusya', kz: 'Kazakistan'
            }
        },
        en: {
            origin: 'SIVAS · TÜRKİYE',
            countries: {
                de: 'Germany', nl: 'Netherlands', dk: 'Denmark', uk: 'United Kingdom',
                fr: 'France', it: 'Italy', us: 'USA', ca: 'Canada', au: 'Australia',
                sa: 'Saudi Arabia', ae: 'UAE', ru: 'Russia', kz: 'Kazakhstan'
            }
        },
        de: {
            origin: 'SIVAS · TÜRKEI',
            countries: {
                de: 'Deutschland', nl: 'Niederlande', dk: 'Dänemark', uk: 'Großbritannien',
                fr: 'Frankreich', it: 'Italien', us: 'USA', ca: 'Kanada', au: 'Australien',
                sa: 'Saudi-Arabien', ae: 'VAE', ru: 'Russland', kz: 'Kasachstan'
            }
        },
        ar: {
            origin: 'سيواس · تركيا',
            countries: {
                de: 'ألمانيا', nl: 'هولندا', dk: 'الدنمارك', uk: 'بريطانيا',
                fr: 'فرنسا', it: 'إيطاليا', us: 'الولايات المتحدة', ca: 'كندا', au: 'أستراليا',
                sa: 'السعودية', ae: 'الإمارات', ru: 'روسيا', kz: 'كازاخستان'
            }
        }
    };

    var t = L[lang] || L.tr;
    var c = t.countries;

    function point(cls, cx, cy, r, label, lblX, lblW) {
        return '<g class="wm-point ' + cls + '" tabindex="0">' +
            '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>' +
            '<g class="wm-tooltip" transform="translate(' + lblX + ' ' + (cy - 22) + ')">' +
                '<rect x="0" y="0" width="' + lblW + '" height="18" rx="2"/>' +
                '<text x="' + (lblW / 2) + '" y="12">' + label + '</text>' +
            '</g>' +
        '</g>';
    }

    var SVG =
'<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" class="world-map-svg" role="img" aria-label="ESN Gıda Export Map">' +
    '<defs>' +
        '<pattern id="oceanDots" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">' +
            '<circle cx="4.5" cy="4.5" r="0.45" fill="rgba(184, 146, 74, 0.10)"/>' +
        '</pattern>' +
        '<radialGradient id="oceanGlow" cx="55%" cy="35%" r="60%">' +
            '<stop offset="0%" stop-color="#FBF8F2" stop-opacity="0"/>' +
            '<stop offset="100%" stop-color="#E8DCC8" stop-opacity="0.18"/>' +
        '</radialGradient>' +
    '</defs>' +

    '<rect width="1000" height="500" fill="url(#oceanDots)"/>' +
    '<rect width="1000" height="500" fill="url(#oceanGlow)"/>' +

    '<g stroke="rgba(184, 146, 74, 0.07)" stroke-width="0.5" fill="none">' +
        '<line x1="0" y1="125" x2="1000" y2="125"/>' +
        '<line x1="0" y1="250" x2="1000" y2="250"/>' +
        '<line x1="0" y1="375" x2="1000" y2="375"/>' +
        '<line x1="500" y1="0" x2="500" y2="500" stroke-dasharray="2 4"/>' +
    '</g>' +

    /* Continents */
    '<g class="wm-continents" fill="#E0D5BA" stroke="#C5B89B" stroke-width="0.7" stroke-linejoin="round">' +
        /* North America */
        '<path d="M 60 110 C 60 95, 75 80, 100 78 C 130 75, 165 78, 200 80 C 230 82, 255 95, 268 115 C 275 130, 273 145, 268 155 C 275 165, 285 175, 287 190 C 286 205, 278 220, 268 230 C 256 240, 240 245, 222 245 C 205 245, 188 240, 175 232 C 162 224, 152 213, 142 200 C 133 188, 125 175, 118 162 C 110 148, 100 135, 90 122 C 80 110, 70 100, 60 95 Z"/>' +
        /* Greenland */
        '<path d="M 295 72 C 308 67, 325 67, 340 75 C 350 87, 348 102, 338 113 C 322 118, 305 115, 297 107 C 290 95, 290 80, 295 72 Z"/>' +
        /* Iceland */
        '<path d="M 460 75 L 470 75 L 472 84 L 465 88 L 458 84 Z"/>' +
        /* UK */
        '<path d="M 478 105 L 488 102 L 492 115 L 488 125 L 478 122 L 475 110 Z"/>' +
        /* South America */
        '<path d="M 230 285 C 245 282, 262 285, 275 295 C 285 308, 290 322, 287 338 C 285 355, 280 372, 273 388 C 265 405, 255 418, 245 425 C 232 428, 222 422, 218 410 C 213 395, 215 380, 220 365 C 222 350, 224 335, 224 320 C 224 305, 226 292, 230 285 Z"/>' +
        /* Europe + western Russia merged */
        '<path d="M 460 95 C 475 88, 495 85, 515 88 C 535 90, 555 92, 575 95 C 595 100, 610 110, 615 125 C 615 138, 605 148, 590 152 C 575 155, 558 153, 540 152 C 525 152, 510 150, 495 148 C 480 145, 470 138, 462 128 C 458 115, 458 102, 460 95 Z"/>' +
        /* Africa */
        '<path d="M 495 175 C 515 172, 535 173, 555 178 C 575 183, 590 192, 595 208 C 600 225, 600 245, 595 265 C 590 285, 580 305, 570 325 C 562 342, 555 358, 547 362 C 537 365, 527 358, 520 348 C 512 335, 506 320, 502 305 C 497 288, 492 270, 488 250 C 484 230, 484 210, 487 195 C 489 185, 491 180, 495 175 Z"/>' +
        /* Madagascar */
        '<path d="M 615 320 L 625 320 L 627 345 L 620 358 L 612 350 L 612 330 Z"/>' +
        /* Asia main */
        '<path d="M 580 95 C 605 90, 635 85, 670 82 C 705 80, 745 80, 780 85 C 815 92, 845 105, 860 122 C 868 138, 865 155, 855 170 C 845 182, 825 192, 800 198 C 770 202, 740 202, 710 200 C 685 197, 660 192, 638 185 C 620 178, 605 168, 595 158 C 587 145, 580 130, 578 115 C 577 105, 578 100, 580 95 Z"/>' +
        /* Arabian Peninsula */
        '<path d="M 595 195 L 615 198 L 635 205 L 650 220 L 645 240 L 625 248 L 610 240 L 600 225 L 595 210 Z"/>' +
        /* India */
        '<path d="M 690 195 L 705 200 L 715 218 L 712 235 L 700 248 L 690 240 L 686 222 L 686 205 Z"/>' +
        /* Southeast Asia */
        '<path d="M 770 215 L 790 215 L 810 220 L 825 232 L 830 245 L 820 252 L 800 250 L 780 240 L 770 230 Z"/>' +
        /* Japan */
        '<path d="M 855 130 L 865 128 L 870 140 L 868 150 L 860 152 L 855 145 Z"/>' +
        /* Australia */
        '<path d="M 815 320 C 835 318, 860 318, 882 322 C 900 326, 905 340, 900 352 C 892 362, 875 368, 855 368 C 835 367, 815 365, 805 358 C 798 350, 800 340, 808 332 C 812 326, 814 322, 815 320 Z"/>' +
        /* New Zealand */
        '<path d="M 920 380 L 932 380 L 935 395 L 928 405 L 920 402 L 918 390 Z"/>' +
        /* Indonesia islands */
        '<path d="M 800 250 L 815 248 L 825 256 L 818 262 L 805 260 Z"/>' +
        '<path d="M 835 245 L 848 245 L 852 252 L 845 256 L 838 252 Z"/>' +
    '</g>' +

    /* Shipping routes — animated dashed flow from Sivas (555,155) outward */
    '<g class="wm-routes" fill="none" stroke="#B8924A" stroke-width="1.4" stroke-linecap="round" opacity="0.55">' +
        '<path d="M 555 155 Q 540 110, 510 135" stroke-dasharray="3 6">' +
            '<animate attributeName="stroke-dashoffset" values="0;-180" dur="6s" repeatCount="indefinite"/>' +
        '</path>' +
        '<path d="M 555 155 Q 380 80, 170 170" stroke-dasharray="3 6">' +
            '<animate attributeName="stroke-dashoffset" values="0;-450" dur="9s" repeatCount="indefinite"/>' +
        '</path>' +
        '<path d="M 555 155 Q 720 220, 855 345" stroke-dasharray="3 6">' +
            '<animate attributeName="stroke-dashoffset" values="0;-380" dur="9s" repeatCount="indefinite"/>' +
        '</path>' +
        '<path d="M 555 155 Q 515 95, 478 118" stroke-dasharray="3 6">' +
            '<animate attributeName="stroke-dashoffset" values="0;-150" dur="5s" repeatCount="indefinite"/>' +
        '</path>' +
        '<path d="M 555 155 Q 580 180, 615 215" stroke-dasharray="3 5" opacity="0.35">' +
            '<animate attributeName="stroke-dashoffset" values="0;-120" dur="5s" repeatCount="indefinite"/>' +
        '</path>' +
        '<path d="M 555 155 Q 620 110, 700 100" stroke-dasharray="3 5" opacity="0.35">' +
            '<animate attributeName="stroke-dashoffset" values="0;-180" dur="6s" repeatCount="indefinite"/>' +
        '</path>' +
    '</g>' +

    /* Country pins */
    '<g class="wm-points">' +
        point('wm-point--active', 510, 135, 6, c.de, 518, 70) +
        point('wm-point--active', 498, 122, 5, c.nl, 506, 78) +
        point('wm-point--active', 513, 110, 5, c.dk, 521, 80) +
        point('wm-point--active', 478, 118, 5, c.uk, 410, 92) +
        point('wm-point--active', 488, 142, 5, c.fr, 410, 65) +
        point('wm-point--active', 528, 155, 5, c.it, 536, 55) +
        point('wm-point--active', 170, 170, 7, c.us, 178, 50) +
        point('wm-point--active', 200, 125, 5, c.ca, 208, 65) +
        point('wm-point--active', 855, 345, 7, c.au, 770, 80) +
        point('wm-point--target', 615, 215, 5, c.sa, 623, 110) +
        point('wm-point--target', 640, 222, 5, c.ae, 648, 50) +
        point('wm-point--target', 700, 100, 6, c.ru, 708, 65) +
        point('wm-point--target', 715, 130, 5, c.kz, 723, 90) +
    '</g>' +

    /* Origin: Sivas */
    '<g class="wm-origin">' +
        '<circle cx="555" cy="155" r="14" fill="none" stroke="rgba(184, 146, 74, 0.5)" stroke-width="1">' +
            '<animate attributeName="r" values="14;28;14" dur="3s" repeatCount="indefinite"/>' +
            '<animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite"/>' +
        '</circle>' +
        '<circle cx="555" cy="155" r="22" fill="none" stroke="rgba(184, 146, 74, 0.3)" stroke-width="0.8">' +
            '<animate attributeName="r" values="22;42;22" dur="3.6s" repeatCount="indefinite"/>' +
            '<animate attributeName="opacity" values="0.5;0;0.5" dur="3.6s" repeatCount="indefinite"/>' +
        '</circle>' +
        '<circle cx="555" cy="155" r="9" fill="#B8924A"/>' +
        '<circle cx="555" cy="155" r="9" fill="none" stroke="#1F3A0E" stroke-width="1.5"/>' +
        '<text x="555" y="183" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#1F3A0E" letter-spacing="2.5" font-weight="700">' + t.origin + '</text>' +
    '</g>' +
'</svg>';

    var placeholders = document.querySelectorAll('[data-world-map]');
    placeholders.forEach(function (el) {
        el.innerHTML = SVG;
    });
})();
