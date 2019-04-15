import api from '../api';

const tumblr = {
  tagged(text) {
    return new Promise((resolve, reject) => {
      api.get(`tagged?tag=${text}&filter=raw&api_key=${process.env.VUE_APP_TUMBLR_API_KEY}`, (data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  },
};

export default tumblr;
