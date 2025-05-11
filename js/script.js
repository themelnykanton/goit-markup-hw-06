document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.main-section-button');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.modal-close-button');

  openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('is-visible');
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('is-visible');
  });

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove('is-visible');
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalOverlay.classList.remove('is-visible');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerOpenButton = document.querySelector(".burger-open-button");
  const burgerMenuOverlay = document.querySelector(".burger-menu-overlay");
  const modalCloseButton = document.querySelector(".burger-close-button");

  burgerOpenButton.addEventListener("click", () => {
    burgerMenuOverlay.classList.add("is-visible");
    document.body.classList.add("body-no-scroll");
  });

  modalCloseButton.addEventListener("click", () => {
    burgerMenuOverlay.classList.remove("is-visible");
    document.body.classList.remove("body-no-scroll");
  });

  burgerMenuOverlay.addEventListener("click", (event) => {
    if (event.target === burgerMenuOverlay) {
      burgerMenuOverlay.classList.remove("is-visible");
      document.body.classList.remove("body-no-scroll");
    }
  });
});

