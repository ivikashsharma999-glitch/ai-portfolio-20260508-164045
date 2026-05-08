document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem('cinematic-theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('cinematic-theme', newTheme);
        });
    }

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Reveals
    const heroTl = gsap.timeline();
    
    heroTl.fromTo('.status-indicator', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo('.gsap-reveal',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.2 },
        '-=0.5'
    )
    .fromTo('.gsap-reveal-delay',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
        '-=1'
    )
    .fromTo('.gsap-reveal-delay-2',
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power2.out' },
        '-=0.5'
    )
    .fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power2.out' },
        '-=1'
    );

    // Fade Up Elements on Scroll
    gsap.utils.toArray('.gsap-fade-up').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Fade Right for Timeline
    gsap.utils.toArray('.gsap-fade-right').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Project Image Parallax effect
    gsap.utils.toArray('.project-visual').forEach(visual => {
        gsap.to(visual, {
            backgroundPosition: '50% 100%',
            ease: 'none',
            scrollTrigger: {
                trigger: visual,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

});
