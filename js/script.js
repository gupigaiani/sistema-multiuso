// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('.content-section');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');

        // Esconde todas as seções
        sections.forEach(section => section.classList.remove('active'));

        // Mostra a seção clicada
        const activeSection = document.getElementById(category);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Rolagem suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
