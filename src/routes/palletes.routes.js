const controller = require("../controllers/palletes.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/v1/palletes", controller.palletesJson);

    app.get("/api/v1/pretty/palletes", controller.palletesList);

  };
  