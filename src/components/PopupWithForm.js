import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._formInputs = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    this._formInputValues = {};
  }
}

//exmaple

const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
newCardPopup.open();

newCardPopup.close();
