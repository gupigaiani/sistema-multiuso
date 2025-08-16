const menuLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('.content-section');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');

        sections.forEach(section => section.classList.remove('active'));

        const activeSection = document.getElementById(category);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
