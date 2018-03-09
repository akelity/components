(((nav, main) => {

  loadMenu();
  loadView();

  function loadMenu() {
    const props = {
      data: ['Home', 'Bio', 'Photos', 'abc'],
      onClick(e) {
        loadView(e);
      }
    };

    nav.render(props, el => {
      document.querySelector('#menu').appendChild(el);
    });
  }

  function loadView(e) {
    const container = document.querySelector('#content');
    let data = 'Akelity Plain Components';

    if (e) {
      container.removeChild(container.firstChild);
      data = e.target.textContent;
    }

    main.render(data, el => {
      container.appendChild(el);
    });
  }

})(akelity.nav, akelity.main));
