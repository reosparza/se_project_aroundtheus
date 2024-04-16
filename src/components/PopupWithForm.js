import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._formInputs = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  open() {
    super.open();
    this._popupForm.addEventListener("submit", this._handleFormSubmit);
  }

  close() {
    this._popupForm.reset();
    this._popupForm.removeEventListener("submit", this._handleFormSubmit);
    super.close();
  }

  _getInputValues() {
    this._formInputValues = {};
    this._formInputs.forEach((input) => {
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  _handleSubmit(evt) {
    evt.preventDeault();
    this._handleFormSubmit(this._getInputValues);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this.handleSubmit);
  }
}
