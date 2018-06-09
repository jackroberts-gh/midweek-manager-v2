import * as auth0 from 'auth0-js';

class Auth {
  public auth0 = new auth0.WebAuth({
    audience: 'https://midweek-manager.eu.auth0.com/userinfo',
    clientID: 'jARaHjd6GxScvsRSZNICpP23GtpvNE9J',
    domain: 'midweek-manager.eu.auth0.com',
    redirectUri: 'http://localhost:3001',
    responseType: 'token id_token',
    scope: 'openid'
  });

  public login() {
    this.auth0.authorize();
  }
}

export default new Auth();