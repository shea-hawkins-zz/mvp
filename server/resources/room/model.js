var current = 'M7lc1UVf-VE';

module.exports.getState = function() {
  return new Promise(function(resolve, reject) {
    resolve({
      current: current
    });
  });
};
