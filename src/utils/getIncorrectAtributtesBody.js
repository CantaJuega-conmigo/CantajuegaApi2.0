const getObjectAtributtes = require("./getObjectAtributtes");

module.exports = (correctAtributtes, req, maxLengthinObject) => {
  const { body } = req;
  const bodyAtributtes = getObjectAtributtes(body);
  
  if (bodyAtributtes.length > maxLengthinObject)
    throw new Error("Invalid resquest"); //por si alguien con malas intenciones envia muchos atributtos en un objeto

  const incorrectAtributtes = bodyAtributtes.filter(
    (item) => !correctAtributtes.includes(item)
  );

  if (incorrectAtributtes.length) {
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
