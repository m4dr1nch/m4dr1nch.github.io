const navSlide = () => {
    const navStacks = document.querySelector('.navStacks');
    const navLinks = document.querySelector('.navLinks');
    const navLinksText = document.querySelectorAll('.navLinks li')

    navStacks.addEventListener('click', () => {
        // Toggle navigation bar
        navLinks.classList.toggle('navActive');

        // Animating links
        navLinksText.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 1s ease forwards ${index / 7 + 0.1}s`;
            }
        });

        // Stacks animation
        navStacks.classList.toggle('navStacksToggle');
    });
}

const app = () => {
    navSlide();
}

app();