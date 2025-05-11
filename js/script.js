<script>
  document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.main-section-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.modal-close-button');

    // Открыть модалку
    openModalBtn.addEventListener('click', () => {
      modalOverlay.classList.add('is-visible');
    });

    // Закрыть по кнопке
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('is-visible');
    });

    // Закрыть по клику вне модального окна
    modalOverlay.addEventListener('click', (event) => {
      // Проверяем, что клик был именно по оверлею, а не по содержимому
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove('is-visible');
      }
    });

    // Закрыть по Esc
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modalOverlay.classList.remove('is-visible');
      }
    });
  });
</script>
