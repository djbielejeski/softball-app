module.exports.createApiController = function (model) {
  return {
    // Get All
    get: function (req, res) {
      //res.send('GET player controller');
      model.find(function (error, items) {
        if (error) return console.error(error);
        res.send(items);
      });
    },
    // Get single
    getById: function (req, res) {
      var id = req.params.id.toObjectId();
      model.findById(id, function (error, item) {
        if (error) return console.error(error);
        res.send(item);
      })
    },
    // Add/Update
    post: function (req, res) {
      const id = getIdFromReq(req);

      if(id) {
        model.findByIdAndUpdate(id,
          req.body,
          { new: true },
          function (error, item) {
            if (error) return console.error(error);
            res.send(item);
          });
      }
      else{
        model.create(req.body, function(error, item) {
          if (error) return console.error(error);
          res.send(item);
        });
      }
    },
    // Delete
    delete: function (req, res) {
      model.findByIdAndDelete(getIdFromReq(req), function (error) {
        if (error) return console.error(error);
        res.send(res.ok);
      });
    }
  }
};

function getIdFromReq(req){
  if(req.body && req.body._id){
    return req.body._id.toObjectId();
  }
  else {
    return '';
  }
}
