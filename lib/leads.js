const Promise = require('bluebird');

module.exports = function(request) {
  return {
    list: function(data) {
      data = data || {};

      return request.postAsync({
        body: data,
        url: '/leads/search'
      })
      .then(res => {
        return res.body;
      })
    }
  }
}
