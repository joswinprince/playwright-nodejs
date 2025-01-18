class DjangoLogin{
    constructor(page){
        this.page = page;
        this.usernameInput = '#id_username';
        this.passwordInput = '#id_password';
        this.loginButton = 'input[type="submit"]';
    }
    async navigate(url){
        await this.page.goto(url);
    }

    async login(username, password){
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
module.exports = DjangoLogin;