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
    xhr.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == this.DONE) {
        success(JSON.parse(this.responseText));
      } else if (this.status >= 400) {
        error(this.responseText);
      }
    };
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", contentType);
    xhr.send(data);
  }
}

export default new JQuery();
