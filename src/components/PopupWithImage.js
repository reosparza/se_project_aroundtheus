import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    console.log(popupSelector);
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".modal__image");
    this._captionElement = this._popupElement.querySelector(
      "modal__image-caption"
    );
  }

  open(data) {
    this._imageElement.src = data.link;
    this._imageElement.alt = data.name;
    this._captionElement.textContent = data.name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
