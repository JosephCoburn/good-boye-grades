const Api = require('../models/dog');

module.exports = {
  index
};

function index(req, res) {
  Api.find({}).then(function(api) {
    res.status(200).json(api);
  });
}