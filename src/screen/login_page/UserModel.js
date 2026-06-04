export default class UserModel {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.token = data.token;
  }
}