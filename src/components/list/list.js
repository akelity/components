/*global templates */

akelity.list = (((templates, item) => {

  function render(props, done) {

    templates.load('/src/components/list/list.html', el => {
      const data = props.data.slice();

      function addItem() {
        const childProps = {
          data: data.shift(),
          onClick: props.onClick
        };

        item.render(childProps, child => {
          el.querySelector('ul').appendChild(child);
          next();
        });
      }

      function next() {
        if (data.length === 0) {
          done(el);
        } else {
          addItem();
        }
      }

      next();
    });
  }

  return {
    render
  };

})(templates, akelity.item));
