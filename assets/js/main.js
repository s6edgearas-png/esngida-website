/* ESN Gıda — main.js */
(function () {
    'use strict';

    /* Header shrink on scroll */
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('shrink', window.scrollY > 24);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* Mobile menu toggle */
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-primary');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = toggle.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            nav.classList.toggle('nav-primary--mobile', open);
        });
    }

    /* Scroll reveal */
    const revealEls = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* Number counter */
    const counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && counters.length) {
        const animate = (el) => {
            const target = parseFloat(el.getAttribute('data-count'));
            const decimals = (el.getAttribute('data-decimals') || '0') | 0;
            const duration = 1600;
            const start = performance.now();
            const initial = 0;
            const tick = (now) => {
                const t = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                const value = initial + (target - initial) * eased;
                el.textContent = decimals
                    ? value.toFixed(decimals)
                    : Math.round(value).toLocaleString('tr-TR');
                if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const co = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    animate(e.target);
                    co.unobserve(e.target);
                }
            });
        }, { threshold: 0.6 });
        counters.forEach((c) => co.observe(c));
    }

    /* Year in footer */
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
})();
