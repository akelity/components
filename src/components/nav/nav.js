/*global templates */

akelity.nav = (((templates, list) => {

  function render(props, done) {
    templates.load('/src/components/nav/nav.html', el => {

      list.render(props, child => {
        el.appendChild(child);

        if (done) {
          done(el);
        }
      });

    });
  }

  return {
    render
  };

})(templates, akelity.list));
