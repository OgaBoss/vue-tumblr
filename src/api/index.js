import axios from 'axios';

const api = {
  request(method, url, data, successCb = null, errorCb = null) {
    axios.request({
      url,
      data,
      method: method.toLowerCase(),
    }).then(successCb).catch(errorCb);
  },

  get(url, successCb = null, errorCb = null) {
    return this.request('get', url, {}, successCb, errorCb);
  },

  post(url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb);
  },

  put(url, data, successCb = null, errorCb = null) {
    return this.request('put', url, data, successCb, errorCb);
  },

  delete(url, data = {}, successCb = null, errorCb = null) {
    return this.request('delete', url, data, successCb, errorCb);
  },

  /**
   * Init the service.
   */
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;

    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use((e) => {
      const config = e;
      // config.headers.Authorization = `Bearer ${Cookies.get('jwt-token')}`;
      return config;
    });

    // Intercept the response and…
    axios.interceptors.response.use(response => response, error => Promise.reject(error.response));
  },
};

export default api;
