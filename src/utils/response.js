module.exports = (res, responsecode, { message, data }) => {
  const response = { succes: true };
  message && (response.message = message);
  data && (response.data = data);
  return res.status(responsecode).send(response);
};
