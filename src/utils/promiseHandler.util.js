const promiseHandler = async (promise, res, service) => {
  try {
    const data = await promise;
    res.json(data);
  } catch (err) {
    console.error({ message: err.message, type: "error", service });
  }
};
module.exports = promiseHandler;
