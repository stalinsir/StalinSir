/**
 * reveal.js
 * Adds the `.visible` class to each <section> when it scrolls into view
 * (the fade/slide animation itself lives in css/animations.css).
 */
(function (app) {
    'use strict';

    app.initReveal = function (selector) {
        const sections = document.querySelectorAll(selector);

        // Old browsers: just show everything
        if (!('IntersectionObserver' in window)) {
            sections.forEach((el) => el.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.25 });   // 25% visible

        sections.forEach((el) => observer.observe(el));
    };
})(window.Portfolio = window.Portfolio || {});
