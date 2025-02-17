document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const routes = {
    "/": {
      title: "Home",
      content: `
        <h1 class="content">BEST SELLERS</h1>
        `
    },
    "/Books": {
      title: "all-books",
      content: `
        <h1 class="content">ALL BOOKS</h1>
        `
    },
    "/Fiction": {
      title: "Fiction",
      content: `
        <h1 class="content">BOOKS - FICTION</h1>
        `
    },
    "/Non-Fiction": {
      title: "Non-Fiction",
      content: `
        <h1 class="content">BOOKS - NON FICTION</h1>
        `
    },
    "/science": {
      title: "science",
      content: `
        <h1 class="content">BOOKS - SCIENCE</h1>
        `
    },
    "/History": {
      title: "History",
      content: `
        <h1 class="content">BOOKS - HISTORY</h1>
        `
    },
    "/Biography": {
      title: "Biography",
      content: `
        <h1 class="content">BOOKS - BIOGRAPHY</h1>
        `
    },
    "/login": {
      title: "",
      content:
       `
      `
    },
    "/register": {
      title: "",
      content: 
      `
`
    },

    404: {
      title: "Page Not Found",
<<<<<<< HEAD
      content: ` 
=======
      content: `
<<<<<<< HEAD
>>>>>>> 0727adeff18471b4e3365a712eaca92eb5cd3237
        `,
    },
=======
        `
    }
>>>>>>> 52e8bdb19b3e0a6780635187745fa81103ba0802
  };

  function handleRoute() {
    const pathName = window.location.pathname;
    const route = routes[pathName] || routes["404"];

    document.title = `${route.title} - Books`;
    app.innerHTML = route.content;
  }

  document.addEventListener("click", function (event) {
    if (event.target.matches(".nav-link")) {
      // need check class name
      event.preventDefault();
      const href = event.target.getAttribute("href");

      window.history.pushState({}, "", href);
      handleRoute();
    }
  });
  window.addEventListener("popstate", handleRoute);
  handleRoute();
});