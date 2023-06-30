async function success(res, status, title, message, next) {
  try {
    res.status(status).json({
      status: status,
      success: true,
      title: title,
      message: message,
    });
  } catch (error) {
    next(error);
  }
}

async function failure(res, status, message, next) {
  try {
    res.status(status).json({
      status: status,
      success: false,
      title: "Error",
      message: message,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { success, failure };
