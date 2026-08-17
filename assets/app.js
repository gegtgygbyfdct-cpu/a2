document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-seen');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach((el) => {
            observer.observe(el);
        });
    }

    // Liquid Fluid Gauges Animations
    const fluidFills = document.querySelectorAll('.fluid-fill');
    if (fluidFills.length > 0) {
        const fluidObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fill = entry.target;
                    const finalHeight = fill.getAttribute('data-height');
                    fill.style.height = finalHeight;
                    fluidObserver.unobserve(fill);
                }
            });
        }, {
            threshold: 0.1
        });

        fluidFills.forEach(fill => fluidObserver.observe(fill));
    }

    // Horizontal Workbench Tabs Logic
    const tabButtons = document.querySelectorAll('.workbench-tab-button');
    const tabPanes = document.querySelectorAll('.workbench-tab-pane');

    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                
                // Clear active button
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Toggle visibility on target panes
                tabPanes.forEach(pane => {
                    if (pane.id === targetId) {
                        pane.classList.add('active');
                    } else {
                        pane.classList.remove('active');
                    }
                });
            });
        });
    }
});

