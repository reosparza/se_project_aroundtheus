const initialCards = [
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

const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const imageModal = document.querySelector("#image-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const profileEditForm = profileEditModal.querySelector(".modal__form");

const closeButtons = document.querySelectorAll(".modal__close-button");
const profileEditButton = document.querySelector("#profile-edit-button");
const addNewCardButton = document.querySelector(".profile__add-button");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const ImageModalCaption = imageModal.querySelector(".modal__image-caption");

const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");
const profileTitleInput = document.querySelector("#profile-title-input");

const cardListEl = document.querySelector(".cards__list");
const modalImageElement = imageModal.querySelector(".modal__image");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", escapeKeyCloseModal);
  modal.addEventListener("mousedown", outsideClickCloseModal);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", escapeKeyCloseModal);
  modal.removeEventListener("mousedown", outsideClickCloseModal);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    modalImageElement.src = cardData.link;
    ImageModalCaption.textContent = cardData.name;
    modalImageElement.alt = cardData.name;
    openModal(imageModal);
  });

  cardImageEl.setAttribute("src", cardData.link);
  cardImageEl.setAttribute("alt", cardData.name);
  cardTitleEl.textContent = cardData.name;

  return cardElement;
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

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

function escapeKeyCloseModal(evt, imageModal) {
  if (evt.key === "Escape") {
    console.log("Escape key is pressed");
    document.querySelectorAll(".modal").forEach((modal) => {
      closePopup(modal);
    });
  }
}

function outsideClickCloseModal(evt) {
  if (evt.target.classList.contains("modal")) {
    closePopup(evt.target);
  }
}
