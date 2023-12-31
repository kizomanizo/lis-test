const Express = require("express");
const Router = Express.Router();
const Controller = require("../controllers/orderController");
const checkLogin = require("../helpers/basicAuth");

Router.route("/").get(checkLogin, Controller.list);
Router.route("/").post(Controller.save);
Router.route("/:uuid").get(checkLogin, Controller.search);

module.exports = Router;
