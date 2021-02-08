class Axios {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.post = this.post.bind(this);
  }

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = (e) => {
        if (
          e.target.status >= 200 &&
          e.target.readyState == e.target.DONE &&
          e.target.status < 300
        ) {
          resolve(e.target.response);
        } else if (e.target.status >= 400) {
          reject({
            status: e.target.status,
            statusText: xhr.statusText,
          });
        }
      };

      xhr.onerror = (e) => {
        console.log(e);
      };

      xhr.open("POST", this.baseUrl + url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
    });
  }
}

const axios = {
  create: ({ baseUrl }) => new Axios(baseUrl),
};

export default axios;
