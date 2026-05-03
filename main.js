document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(card);
    });

    // Subtle parallax effect for hero logo
    document.addEventListener('mousemove', (e) => {
        const logo = document.querySelector('.hero-logo');
        if (!logo) return;
        
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        logo.style.transform = `scale(1) translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });

    console.log('%c ALLC.DEV %c Construindo o futuro.', 'background: #d4af37; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;', 'color: #d4af37; font-weight: bold;');
});
