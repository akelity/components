/*global templates */

akelity.main = ((templates => {

  function render(data, done) {
    templates.load('/src/components/main/main.html', el => {
      el.querySelector('.cursor').innerHTML = data;

      if (done) {
        done(el);
      }
    });
  }

  return {
    render
  };

})(templates));
