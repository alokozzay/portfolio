// плавная прокрутка

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const hreff = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(hreff);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})