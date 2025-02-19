document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".category-dropdown").classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".hamburger-container")) {
    document.querySelector(".category-dropdown").classList.remove("show");
  }
});

// get current user
const currentUserFromSession = sessionStorage.getItem("currentUser");
const currentUserElement = document.getElementById("currentUser");

let user = "disconnected";

if (currentUserFromSession) {
  try {
    const parsedUser = JSON.parse(currentUserFromSession);
    user = parsedUser.username || "disconnected";
  } catch (error) {
    console.error("Error parsing session data:", error);
  }
}

currentUserElement.textContent = user;

function getBookFromButton(button) {
  return {
    id: button.dataset.id, // Récupère l'ID
    title: button.dataset.title,
    price: parseFloat(button.dataset.price),
    image: button.dataset.image,
  };
}
