const baseURL = `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.PORT}${process.env.BASENAME}`;

/**
 * API request methods fabric.
 * @param {string} path - API endpoint path
 * @param {string} method - HTTP request method for request
 * @param {boolean} requireAuthentication - False for avoiding authentication
 * @return {Object} - Endpoin resquest
 *    @property {string} [data=null] - The body content for request
 *    @method onResponse - On response callback
 *      @param {Object} - Response data
 *        @property {string} code - HTTP response status code
 *        @property {string} message - HTTP response status string
 *        @property {string} contents - HTTP response content
 *    @method onError - On error callback
 *      @param {Object} - Fetch error response
 *    @method call - Run request
 */
export function Request (path, method, requireAuthentication=true) {
  return {
      // Optional reques body data, onResponse callback and onError callback
      data: "",
      onResponse: ()=>{},
      onError: ()=>{},
      requesOptions: {
        mode: process.env.CORS,
        method,
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
      },
      call: function () {
        this.requesOptions.body = JSON.stringify(this.data);
        if (requireAuthentication) {
          const token = sessionStorage.getItem("JWT");
          if (! token) throw "Authentication: lack of JWT and authentication required.";
          this.requesOptions.headers.Authentication = 'Bearer ' + token;
        }
        fetch(
          `${baseURL}${path}`,
          this.requesOptions
        )
        .then(
          (response)=>{
            response.json()
            .then(
              (data)=>{
                this.onResponse(
                  {
                    code: response.status,
                    message: response.statusText,
                    contents: data
                  }
                )
              }
            )
          }
        )
        .catch((error)=>this.onError(error))
      }
  }
}