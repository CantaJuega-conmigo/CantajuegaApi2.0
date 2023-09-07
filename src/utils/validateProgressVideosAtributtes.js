const validateVideosProgress = require("./validateProgressAtributtes");

module.exports = (newData, select) => {
  ///para usar en middlewares, validamos antes de que lleguen a los controllers
  const First_Video = ["PdfCompleted", "Total", "Ready_to_Next_Video"];
  const Other_Videos = ["Last_Video_Completed", "Total", "Ready_to_Next_Video"];
  const Final_Video = ["Last_Video_Completed", "Total", "Ready_to_Test"];
 
  if (select === "First_Video") {
    validateVideosProgress(newData, First_Video,'videosAtributtes',select); //devuelve true o false
    if(!newData.PdfCompleted){//solo permitiremos la edicion , si el dato necesario ya fue visto
      throw new Error('No es posible modificar el atributo PdfCompleted')
    }
    return true;
  }
  if (select === "Final_Video") {
    validateVideosProgress(newData, Final_Video,'videosAtributtes',select);
    if (!newData.Last_Video_Completed) {
      //solo permitiremos la edicion , si el dato necesario ya fue visto
      throw new Error(
        "No es posible cambiar el atributo Last_Video_Completed."
      );
    }

    return true;
  }
  if (select !== "First_Video") {
    validateVideosProgress(newData, Other_Videos,'videosAtributtes',select);
    if (!newData.Last_Video_Completed) {
      //solo permitiremos la edicion , si el dato necesario ya fue visto
      throw new Error(
        "No es posible cambiar el atributo Last_Video_Completed."
      );
    }
 
    return true;
  }
};
