import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  config,
  modals,
  profileEditModal,
  addCardModal,
  imageModal,
  addCardFormElement,
  profileEditForm,
  closeButtons,
  profileEditButton,
  addNewCardButton,
  profileTitle,
  profileDescription,
  imageModalCaption,
  profileDescriptionInput,
  cardTitleInput,
  cardUrlInput,
  profileTitleInput,
  cardListEl,
  modalImageElement,
} from "../../utils/constants.js";

const enableValidation = () => {
  const formEls = Array.from(document.querySelectorAll(config.formSelector));
  formEls.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
  });
};

enableValidation(config);

const imagePopup = new PopupWithImage("#image-modal");

imagePopup.setEventListeners();

function handleImageClick(data) {
  imagePopup.open(data);
}

function getCardElement(cardData) {
  return new Card(cardData, "#card-template", handleImageClick).getView();
}

const user = new UserInfo(".profile__title", ".profile__description");

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileModalSubmit
);

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);

function handleAddCardFormSubmit() {
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const card = getCardElement({ name, link });
  cardSection.addItem(card);
  addCardPopup.close();
}

const cardSection = new Section(
  { items: initialCards, renderer: getCardElement },
  ".cards__list"
);

function handleFormModalButton() {
  const userProfile = user.getUserInfo();
  profileTitleInput.value = userProfile.name;
  profileDescriptionInput.value = userProfile.description;
  profileEditPopup.open();
  profileEditPopup.setEventListeners();
}

function handleAddCardFormButton() {
  addCardPopup.open();
  addCardPopup.setEventListeners();
}

function handleProfileModalSubmit() {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileEditPopup.close();
}

profileEditButton.addEventListener("click", handleFormModalButton);
addNewCardButton.addEventListener("click", handleAddCardFormButton);

cardSection.renderItems();
