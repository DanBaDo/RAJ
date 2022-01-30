import ('dotenv').config()
process.env

const baseURL = `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.PORT}${process.env.BASENAME}`;

/**
 * API request methods fabric.
 * @param {string} path - API endpoint path
 * @param {string} method - HTTP request method for request
 * @param {boolean} requireAuthentication - False for avoiding authentication
 * @return {object}
 */
export function Request (path, method, requireAuthentication=True) {
  return {
      // Optional reques body data, onResponse callback and onError callback
      data: null,
      onResponse: ()=>{},
      onError: ()=>{},
      requesOptions: {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
      },
      call: ()=> {
        this.requesOptions.body = JSON.stringify(this.data);
        if (requireAuthentication) {
          token = sessionStorage.getItem(JWToken);
          if (! token) throw "Authentication: lack of JWT and authentication required.";
          this.requesOptions.headers.Authentication = 'Bearer ' + token;
        }
        fetch(
          `${baseURL}/${path}`,
          this.requesOptions
        )
        .then((response)=>response.json()
            .then((data)=>this.onResponse(data))
        )
        .catch((error)=>this.onError(error))
      }
  }
}

async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });