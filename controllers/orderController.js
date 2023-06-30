const apiHelper = require("../helpers/apiHelper");
const Service = require("../services/orderService");

async function list(req, res, next) {
  const listOrders = Service.list(req, res, next);
  return apiHelper.success(res, 200, "List Orders", await listOrders, next);
}

async function save(req, res, next) {
  const saveOrder = Service.save(req, res, next);
  return apiHelper.success(res, 200, "Save Order", await saveOrder, next);
}

async function search(req, res, next) {
  const searchOrder = Service.search(req, res, next);
  return apiHelper.success(res, 200, "Search Order", await searchOrder, next);
}

module.exports = { list, save, search };
