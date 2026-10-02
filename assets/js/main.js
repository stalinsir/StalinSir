/**
 * main.js — entry point.
 * Load order in index.html:  modules/*.js  →  main.js
 */
(function (app) {
    'use strict';

    app.initScrollCanvas('scroll-canvas');
    app.initReveal('section');
})(window.Portfolio);
