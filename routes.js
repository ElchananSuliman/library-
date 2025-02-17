document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const routes = {
    "/": {
      title: "Home",
      content: `
        <h1>Welcome</h1>
        `,
    },
    404: {
      title: "Page Not Found",
      content: `
        `,
    },
  };

  function handelRoute() {
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
      handelRoute();
    }
  });
  window.addEventListener("popstate", handelRoute);
  handelRoute();
});
