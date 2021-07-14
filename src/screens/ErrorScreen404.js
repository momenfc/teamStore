const ErrorScreen404 = {
  after_render: () => {
    const navbar = document.querySelector(".navbar"),
      footer = document.querySelector(".footer");
    navbar.style.display = "none";
    footer.style.display = "none";
  },

  render: () => {
    return `
        <div class="error404">
            <h1 class="heading-1 heading-1__red">error 404</h1>
            <p class="error404__text">page not found</p>
            <a href="/#/" class="error404__link">back to home &rarr;</a>
        </div>`;
  },
};
export default ErrorScreen404;
