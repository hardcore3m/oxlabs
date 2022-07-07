const controller = require("../controllers/colors.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/v1/colors", controller.colorsJson);

    app.get("/api/v1/pretty/colors", controller.colorsList);

  };
  