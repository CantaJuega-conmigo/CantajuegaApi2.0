module.exports=(Progress, newData) => {
    //para prohibir que se pueda modificar el estado de visto del pdf y controlar que el primer video sea visto solo el si el pdf fue abierto.
  
    if (!newData.PdfCompleted) {//medida adicional ya que en esto tambien se valida en el middleware
      //newData representa a la info que viene por body, si quieren volver a ponerlo en false tirara un error.
      throw new Error("No es posible actualizar la propiedad");
    }
    if (!Progress.Pdf_Viewed || !Progress.First_Video.PdfCompleted) {
      //si la propiedad Pdf_Viewed  y First_Video.PdfCompleted estan en false entonces tiramos error.
      throw new Error("Debe ver el pdf para acceder al primer videoooo");
    }
    //si lo anterior no se cumple simplemente es xq ya se puede acceder al primer video.
  };
  