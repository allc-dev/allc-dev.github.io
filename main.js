document.addEventListener('DOMContentLoaded', () => {

    // ── Sticky Header ──────────────────────────────────────────────────
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── Scroll Reveal ──────────────────────────────────────────────────
    const revealTargets = [
        '.hero-badge', '.hero-logo-wrap', '.hero h1', '.hero-sub', '.cta-row',
        '.service-card', '.apps-text', '.apps-visual',
        '.pillar', '.section-header',
    ];

    revealTargets.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger siblings
                const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
                const idx = siblings.indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── Hero Logo Parallax (mouse) ─────────────────────────────────────
    const heroLogo = document.getElementById('hero-logo');
    if (heroLogo) {
        let raf = null;
        document.addEventListener('mousemove', (e) => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 18;
                const y = (e.clientY / window.innerHeight - 0.5) * 12;
                heroLogo.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // ── Smooth scroll for anchor links ────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Mobile menu toggle ────────────────────────────────────────────
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '2rem';
            navLinks.style.background = 'hsl(22, 15%, 7%)';
            navLinks.style.border = '1px solid hsla(43, 40%, 60%, 0.12)';
            navLinks.style.borderRadius = '16px';
            navLinks.style.padding = '1rem';
            navLinks.style.gap = '0.25rem';
        });
    }

    // ── Console easter egg ─────────────────────────────────────────────
    console.log(
        '%c ALLC.DEV %c Fábrica de Software & Loja de Apps',
        'background:#c9963a;color:#000;font-weight:900;padding:4px 10px;border-radius:4px;letter-spacing:1px;',
        'color:#c9963a;font-weight:600;'
    );
});
