document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const backButton = document.getElementById('backButton');

    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    backButton.addEventListener('click', function() {
        document.querySelector('.home').scrollIntoView({
            behavior: 'smooth'
        });
    });

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const portfolioSection = document.getElementById('portfolio');
    const backButton = document.getElementById('backButton');

    window.addEventListener('scroll', function() {
        const portfolioRect = portfolioSection.getBoundingClientRect();
        const threshold = window.innerHeight * 0.5;

        if (portfolioRect.top <= threshold) {
            backButton.style.opacity = '1';
        } else {
            backButton.style.opacity = '0';
        }
    });

    backButton.addEventListener('click', function() {
        document.querySelector('.home').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
