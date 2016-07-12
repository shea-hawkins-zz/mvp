var current = 'lUkuA35ab5U';

module.exports.getState = function() {
  return new Promise(function(resolve, reject) {
    resolve({
      current: {
        videoId: current
      }
    });
  });
};
