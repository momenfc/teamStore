const Sign_inScreen = {
  after_render: () => {},
  render: () => {
    return `
    <div class="container flex">
        <div class="card">
            <h2 class="heading-2 card__header">sign-in</h2>
            <form class="form">
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
                    <input
                        type="submit"
                        name="submit"
                        id="submit-input"
                        class="primary-btn primary-btn-fw form__input"
                        value="sign in"
                    />
                </div>
            </form>
            <p class="card__text">
                new user?
                <a href="/#/register" class="card__link">create your account</a>
            </p>
        </div>
    </div>
      `;
  },
};

export default Sign_inScreen;
