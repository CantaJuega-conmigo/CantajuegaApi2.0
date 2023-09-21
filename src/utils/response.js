module.exports = (res, responsecode, { message, data }) => {
  const response = { succes: true };//por defecto cuando se use esta funcion sera ante respuestas exitosas//
  message && (response.message = message);//si precisamos enviar un mensaje, entonces se agrega message al objeto de respuesta
  data && (response.data = data);//si precisamos enviar datos(arrays,object), entonces aqui se agrega solo.
  return res.status(responsecode).send(response);//se retorna la respuesta a la peticion
};
