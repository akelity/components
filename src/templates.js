const templates = ((() => {
  const templateList = {};

  getAbsolutePath = () => {
    return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  }

  function getResource(path, onSuccess, onError) {
    const request = new XMLHttpRequest();
    const url = getAbsolutePath() + path;
    
    // defaulting to console.error
    if (!onError) onError = (err) => {console.error(err)};
    
    request.open('GET', url, true);

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        onSuccess(this.response);
      } else {
        onError('Server error');
      }
    };

    request.onerror = () => {
      onError('Request error');
    };

    request.send();
  }

  function pushTemplate(path, template) {
    templateList[path] = template;
  }

  function getTemplate(key) {
    return toNode(templateList[key]);
  }

  function toNode(template) {
    const container = document.createElement('div');
    container.innerHTML = template;
    return container.children[0];
  }

  function loadTemplate(path, callback) {
    if (templateList.hasOwnProperty(path)) {
      callback(getTemplate(path));
      return;
    }

    getResource(path, template => {
      pushTemplate(path, template);
      callback(getTemplate(path));
    });
  }

  return {
    load: loadTemplate
  };
})());
