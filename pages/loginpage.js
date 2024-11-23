class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#username';
      this.passwordInput = '#password';
      this.loginButton = 'button[type="submit"]';
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  }
  
  module.exports = LoginPage;
  