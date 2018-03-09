/*global templates */

akelity.item = ((templates => {

  function render(props, done) {
    templates.load('/src/components/item/item.html', el => {
      el.textContent = props.data;
      el.addEventListener('click', props.onClick);

      if (done) {
        done(el);
      }
    });
  }

  return {
    render
  };

})(templates));
