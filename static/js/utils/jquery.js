class JQuery {
  constructor() {}
  ajax({
    method,
    url,
    data = {},
    contentType = "application/json",
    success,
    error,
  }) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (e) => {
      if (e.target.status == 200 && e.target.readyState == e.target.DONE) {
        success(JSON.parse(e.target.responseText));
      } else if (e.target.status >= 400) {
        error(e.target.responseText);
      }
    };
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", contentType);
    xhr.send(data);
  }
}

export default new JQuery();
