const getObjectAtributtes = require("./getObjectAtributtes");

module.exports = (correctAtributtes, req, maxLengthinObject,optionalAtributtes=[]) => {
  //esta la usamos en middlewares de validaciones,post o put, controla que no hay atributos que no deben venir en el body
  const { body } = req;console.log(optionalAtributtes);
  const bodyAtributtes = getObjectAtributtes(body); ///array con nombre de los atributos del body
  const MissingProperties = correctAtributtes.filter(// nos quedamos con los atributos que deberian venir pero no vienen.
    (item, index) => body[item]===undefined
  );

  if (MissingProperties.length)
    throw new Error(
      `${MissingProperties},${
        MissingProperties.length > 1 ? "are necessary" : "is necessary"
      } `
    );
  if (bodyAtributtes.length > maxLengthinObject??10)
    throw new Error("Invalid resquest"); //por si alguien con malas intenciones envia muchos atributtos en un objeto

  const incorrectAtributtes = bodyAtributtes.filter(
    //filtramos los atributos que no corresponden
    (item) => !correctAtributtes.includes(item)&&!optionalAtributtes.includes(item)
  );

  if (incorrectAtributtes.length) {
    //generamos mensajes personalizados claros para devs del front
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
