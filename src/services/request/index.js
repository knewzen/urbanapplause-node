export default opts => {
  console.log(opts);
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(opts.method || "GET", opts.url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: this.status,
              statusText: xhr.statusText
            });
          console.log('error')
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach(key => {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }

        xhr.send(opts.data);
    });
}
