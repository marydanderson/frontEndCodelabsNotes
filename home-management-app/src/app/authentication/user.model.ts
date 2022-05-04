// store core data that makes up a user; help w/ validating w/ tokens being valid

export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string, //_ b/c, in order to access the component, should have to validate first; do this w/ get
    private _tokenExpirationDate: Date //private b/c it shouldn't be retrievable unless we check the validity
  ) { }

  get token() { //getter: looks like a function but acts like property; cannot assign getters to new values (that's a setter)
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      // token is expired or doesn't exist
      return null
    }
    return this._token;
  }
}
