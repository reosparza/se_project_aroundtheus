import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
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

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("mousedown", handleOutsideClick);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("mousedown", handleOutsideClick);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

const handleImageClick = function (cardData) {
  modalImageElement.src = cardData.link;
  modalImageElement.alt = cardData.name;
  imageModalCaption.textContent = cardData.name;
  openModal(imageModal);
};

function getCardElement(cardData) {
  return new Card(cardData, "#card-template", handleImageClick).getView();
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(addCardModal);
  evt.target.reset();
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

addNewCardButton.addEventListener("click", () => openModal(addCardModal));

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");

  button.addEventListener("click", () => closePopup(popup));
});

function handleEscape(evt) {
  if (evt.key === "Escape") {
    modals.forEach((modal) => {
      closePopup(modal);
    });
  }
}

function handleOutsideClick(evt) {
  if (evt.target.classList.contains("modal")) {
    closePopup(evt.target);
  }
}

//initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

const cardSection = new Section(
  { items: initialCards, renderer: getCardElement },
  ".cards__list"
);

cardSection.renderItems();

const imagePopup = new PopupWithImage("#image-modal");
imagePopup.setEventListeners();
