document.addEventListener("DOMContentLoaded", () => {
    // Animation du robot
    anime({
        targets: '.robot .head',
        rotate: [
            { value: -10, duration: 500, easing: 'easeInOutQuad' },
            { value: 10, duration: 500, easing: 'easeInOutQuad' }
        ],
        loop: true,
    });

    anime({
        targets: ['.arm-left', '.arm-right'],
        rotate: [
            { value: -10, duration: 800, easing: 'easeInOutQuad' },
            { value: 10, duration: 800, easing: 'easeInOutQuad' }
        ],
        loop: true,
        direction: 'alternate'
    });

    anime({
        targets: ['.leg-left', '.leg-right'],
        translateY: [
            { value: -10, duration: 500, easing: 'easeInOutQuad' },
            { value: 10, duration: 500, easing: 'easeInOutQuad' }
        ],
        loop: true,
        direction: 'alternate'
    });

    // Animation d'apparition du texte et du bouton
    anime.timeline()
        .add({
            targets: '.error-text',
            opacity: [0, 1],
            scale: [0.8, 1],
            easing: 'easeOutElastic(1, .8)',
            duration: 1500,
        })
        .add({
            targets: '.error-message, .back-home',
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(200)
        });
});