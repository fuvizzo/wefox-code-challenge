module.exports = class MapServices {
  geocode(addressStr) {
    return new Promise((resolve, reject) => {
      reject(new Error('not implemented'));
    });
  }

  reverseGeocode(lat, lng) {
    return new Promise((resolve, reject) => {
      reject(new Error('not implemented'));
    });
  }
};
