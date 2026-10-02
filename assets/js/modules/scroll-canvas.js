/**
 * scroll-canvas.js
 * Draws a pre-loaded image sequence on a fixed <canvas>,
 * and maps the page scroll position to the frame number.
 */
(function (app) {
    'use strict';

    const FRAME_COUNT = 299;
    const FRAME_DIR = 'assets/images/scroll-frames/';

    const framePath = (index) =>
        `${FRAME_DIR}frame-${String(index + 1).padStart(3, '0')}.jpg`;

    app.initScrollCanvas = function (canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const images = [];
        let frameIndex = 0;
        let ticking = false;

        // Preload every frame so scrolling has zero lag
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = framePath(i);
            images.push(img);
        }
        images[0].onload = render;

        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        }

        // "Cover" behaviour: fill the screen without stretching
        function render() {
            const img = images[frameIndex];
            if (!img || !img.complete || !img.naturalWidth) return;

            const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
            const offsetX = (canvas.width - img.width * ratio) / 2;
            const offsetY = (canvas.height - img.height * ratio) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, img.width, img.height,
                              offsetX, offsetY, img.width * ratio, img.height * ratio);
        }

        function onScroll() {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const fraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
            frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(fraction * FRAME_COUNT)));

            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    render();
                    ticking = false;
                });
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', setCanvasSize);
        setCanvasSize();
    };
})(window.Portfolio = window.Portfolio || {});
