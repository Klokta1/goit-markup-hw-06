
    function modalWindow() {
  let modalWindow = document.querySelector('.modal_window');
  modalWindow.classList.add("is-open");
     }

    function closeWindow() {
    let modalWindow = document.querySelector('.modal_window');
    modalWindow.classList.remove("is-open");
     }



    function openPhoneMenu() {
      let phoneMenu = document.querySelector('.phone_menu_section');
      phoneMenu.classList.add("is-open");
      }

    function closePhoneMenu() {
        let phoneMenu = document.querySelector('.phone_menu_section');
        phoneMenu.classList.remove("is-open");
      }