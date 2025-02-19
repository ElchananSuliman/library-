document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".category-dropdown").classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".hamburger-container")) {
    document.querySelector(".category-dropdown").classList.remove("show");
  }
});

// get current user
