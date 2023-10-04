const getIncorrectAtributtesBody = require("./getIncorrectAtributtesBody");
const getObjectAtributtes = require("./getObjectAtributtes");

module.exports = (req, Atributtes, type, select) => {
  const {body}=req
  const bodyAtributtes = getObjectAtributtes(body); //convertimos el objeto (que es la info a cambiar); en array , [[key,value],[key,value]]
  if (bodyAtributtes[0] === "Pdf_Viewed" && !body[bodyAtributtes[0]]) {
    throw new Error(
      `El valor que se quiere asignar en ${bodyAtributtes[0]} no es valido`
    );
  }
  if (type === "videosAtributtes") {
     getIncorrectAtributtesBody(Atributtes,req,5)
    return;
  }

  if (!Atributtes.includes(bodyAtributtes[0])) {
    throw new Error(`${bodyAtributtes[0]} no es un atributo correcto.`);
  }
  return true;
};
