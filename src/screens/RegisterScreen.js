const RegisterScreen = {
  after_render: () => {},
  render: () => {
    return `
        <div class="container flex">
        <div class="card">
        <h2 class="heading-2 card__header">create account</h2>
        <form class="form">
            <div class="form__group">
            <label for="name" class="form__label">name</label>
            <input
                type="name"
                name="name"
                id="name-input"
                class="form__input"
                placeholder="Enter your name"
            />
            </div>
            <div class="form__group">
            <label for="email" class="form__label">email</label>
            <input
                type="email"
                name="email"
                id="email-input"
                class="form__input"
                placeholder="Enter your email"
            />
            </div>
            <div class="form__group">
            <label for="password" class="form__label">password</label>
            <input
                type="password"
                name="password"
                id="password-input"
                class="form__input"
                placeholder="Enter your password"
            />
            </div>
            <div class="form__group">
            <label for="re-enter-password" class="form__label"
                >re-enter password</label
            >
            <input
                type="password"
                name="re-enter-password"
                id="re-enter-password-input"
                class="form__input"
                placeholder="Re-enter password"
            />
            </div>
            <div class="form__group">
            <input
                type="submit"
                name="submit"
                id="submit-input"
                class="primary-btn primary-btn-fw form__input"
                value="register"
            />
            </div>
        </form>
        <p class="card__text">
            already have an account?
            <a href="/#/signin" class="card__link">sign-in</a>
        </p>
        </div>
    </div>
        `;
  },
};

export default RegisterScreen;
