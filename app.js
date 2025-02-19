document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector(".category-dropdown").classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".hamburger-container")) {
        document.querySelector(".category-dropdown").classList.remove("show");
    }
});



function getBookFromButton(button) {
    return {
        id: button.dataset.id, // Récupère l'ID
        title: button.dataset.title,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image
    };
}