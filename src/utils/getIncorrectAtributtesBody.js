const getObjectAtributtes = require("./getObjectAtributtes");

module.exports = (correctAtributtes, req, maxLengthinObject) => {
  //esta la usamos en middlewares de validaciones,post o put, controla que no hay atributos que no deben venir en el body
  const { body } = req;
  const bodyAtributtes = getObjectAtributtes(body);///array con nombre de los atributos del body

  if (bodyAtributtes.length > maxLengthinObject)
    throw new Error("Invalid resquest"); //por si alguien con malas intenciones envia muchos atributtos en un objeto

  const incorrectAtributtes = bodyAtributtes.filter(//filtramos los atributos que no corresponden
    (item) => !correctAtributtes.includes(item)
  );

  if (incorrectAtributtes.length) {//generamos mensajes personalizados claros para devs del front
    throw new Error(
      `${incorrectAtributtes},${
        incorrectAtributtes.length > 1
          ? "are incorrect attributes"
          : "is an incorrect attribute"
      }`
    );
  }
  // return incorrectAtributtes;
};
