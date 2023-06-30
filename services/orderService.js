const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const apiHelper = require("../helpers/apiHelper");

BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

// Lists all orders from the DB
async function list(req, res, next) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        tests: true,
      },
    });
    return orders;
  } catch (error) {
    apiHelper.failure(res, 404, "Error listing orders");
  } finally {
    await prisma.$disconnect();
  }
}

// Save a new order in the DB with its tests
async function save(req, res, next) {
  try {
    const { tests, ...order } = req.body;

    // Save the order
    const savedOrder = await prisma.order.create({
      data: {
        ...order,
        tests: {
          create: tests.map((test) => ({
            ...test,
          })),
        },
      },
      include: {
        tests: true,
      },
    });

    return savedOrder;
  } catch (error) {
    apiHelper.failure(res, 404, "Error saving an order");
  } finally {
    await prisma.$disconnect();
  }
}

// Search for a specific order using UUID
async function search(req, _res, next) {
  try {
    const { uuid } = req.params;
    const order = await prisma.order.findFirstOrThrow({
      where: { uuid: uuid },
      include: {
        tests: true,
      },
    });
    return order;
  } catch (error) {
    apiHelper.failure(res, 404, "Error searching order");
    next(error);
  }
}

module.exports = { list, save, search };
