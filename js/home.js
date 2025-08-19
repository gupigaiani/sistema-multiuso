const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

window.addEventListener("DOMContentLoaded", () => {
    cards.forEach(card => card.style.display = "none");
});

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        const text = (card.textContent || card.innerText).toLowerCase();
        if (query && text.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
