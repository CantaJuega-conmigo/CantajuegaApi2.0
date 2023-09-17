module.exports = (res, errorcode, error, errors ) => {
  const response = {
    succes: false,
    message: error.message ?? "Error in server.",
  };
  errors && (response.errors = errors.errors);
  return res.status(errorcode).send(response);
};
