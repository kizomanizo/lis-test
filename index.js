const Express = require("express");
const logger = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = Express();
const basicAuth = require("express-basic-auth");
const apiHelper = require("./helpers/apiHelper");

// API Routes
const orderRouter = require("./routes/orderRoute");

app.disable("x-powered-by");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cors({ exposedHeaders: ["x-auth-token"] }));
app.use("/api/v1/orders", orderRouter);

app.get("/", (req, res, next) => {
  apiHelper.success(res, 200, "Get Root", "API Root path reached successfully");
});

app.listen(port, () => {
  console.log("STATUS:", "App is running\nPORT: " + port);
});
