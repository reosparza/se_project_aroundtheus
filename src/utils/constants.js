export const initialCards = [
  {
    name: "Valley of Fire",
    link: "https://images.unsplash.com/photo-1584812261582-efe582e4c124?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mount Rainier National Park",
    link: "https://images.unsplash.com/photo-1503882786865-8fc7969fa064?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blue Lakes",
    link: "https://images.unsplash.com/photo-1632714394813-c545b84bf7fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Makena Beach",
    link: "https://images.unsplash.com/photo-1550143140-a808693b609f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emerald Lake",
    link: "https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Great Sand Dunes",
    link: "https://images.unsplash.com/photo-1619408507579-368cba59746f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const modals = document.querySelectorAll(".modal");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const imageModal = document.querySelector("#image-modal");
export const addCardFormElement = addCardModal.querySelector(".modal__form");
export const profileEditForm = profileEditModal.querySelector(".modal__form");

export const closeButtons = document.querySelectorAll(".modal__close-button");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const addNewCardButton = document.querySelector(".profile__add-button");

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const imageModalCaption = imageModal.querySelector(
  ".modal__image-caption"
);

export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
export const cardUrlInput = addCardFormElement.querySelector(
  ".modal__input_type_url"
);
export const profileTitleInput = document.querySelector("#profile-title-input");

export const cardListEl = document.querySelector(".cards__list");
export const modalImageElement = imageModal.querySelector(".modal__image");
