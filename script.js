document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateParallax() {
        const scrolled = window.scrollY;
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        
        parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        ticking = false;
    }

    function onScroll() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
}); 