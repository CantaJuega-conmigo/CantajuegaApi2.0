const getIncorrectAtributtesBody = require("./getIncorrectAtributtesBody");
const getObjectAtributtes = require("./getObjectAtributtes");

module.exports = (req, Atributtes, type, select) => {
  const {body}=req
  const bodyAtributtes = getObjectAtributtes(body); //convertimos el objeto (que es la info a cambiar); en array , [[key,value],[key,value]]
  if (bodyAtributtes[0] === "Pdf_Viewed" && !body[bodyAtributtes[0]]) {
    throw new Error(
      `The value in ${bodyAtributtes[0]} is not valide.`
    );
  }
 
  if (type === "videosAtributtes") {

     const {Total,one_Day_Passed,Ready_to_Next_Video}=body;
     if(Total<4&&one_Day_Passed||Ready_to_Next_Video) {
      throw new Error ('Invalid resquest')
     }
     getIncorrectAtributtesBody(Atributtes,req,5)
    return;
  }

  if (!Atributtes.includes(bodyAtributtes[0])) {
    throw new Error(`${bodyAtributtes[0]} is an incorrect atributte.`);
  }
  return true;
};
