const menu = document.querySelector('.menu');

menu?.addEventListener('click', event => {
  const toggleButton = menu.querySelector('.toggle-button');

  if (event.target === toggleButton) {
    toggleButtonHandler.call(event.target);
  }
})

function toggleButtonHandler() {
  const TOGGLE_BUTTON_ACTIVE_CLASS = 'toggle-button--active';
  const MENU_LIST_HIDDEN_CLASS = 'menu__list--hidden';
  const menu = document.querySelector('.menu__list');

  const isMenuOpened = this.classList.contains(TOGGLE_BUTTON_ACTIVE_CLASS);

  if (isMenuOpened) {
    this.classList.remove(TOGGLE_BUTTON_ACTIVE_CLASS);
    menu.classList.add(MENU_LIST_HIDDEN_CLASS);

    return;
  }

  this.classList.add(TOGGLE_BUTTON_ACTIVE_CLASS);
  menu.classList.remove(MENU_LIST_HIDDEN_CLASS);
}
