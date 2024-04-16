export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    this._userData = {
      name: this._name.textContent,
      description: this._description.textContent,
    };
    return this._userData;
  }

  setUserInfo({ name, description }) {
    this._name.textContent = name;
    this._description.textContent = description;
  }
}
