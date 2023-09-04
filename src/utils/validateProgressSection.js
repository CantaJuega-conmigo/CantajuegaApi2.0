const validateVideosProgress = require("./validateVideosProgress");

module.exports=(data,section)=>{
  // ordenamos los atributos correctos, del progreso que se quiere modificar
   const First_Video=['PdfCompleted','Total','Ready_to_Next_Video'];
   const Other_Videos=["Last_Video_Completed",'Total',"Ready_to_Next_Video"];
   const Final_Video=['Last_Video_Completed','Total',"Ready_to_Test"];
   
   ///dependiendo la informacion que querramos cambiar, validamos de cierta forma que los atributos sean los correctos a modificar
   if(section==='First_Video'){
      // if(!data.PdfCompleted){//solo permitiremos la edicion , si el dato necesario ya fue visto
      //   throw new Error('Por favor abra el pdf')
      // }
      return validateVideosProgress(data,First_Video)//devuelve true o false
   }
   if(section==='Final_Video'){
       if(!data.Last_Video_Completed){//solo permitiremos la edicion , si el dato necesario ya fue visto
        throw new Error('Debe ver el video anterior para desbloquear este')
      }
      return validateVideosProgress(data,Final_Video)
   }
   if(section!=='First_Video'){
      if(!data.Last_Video_Completed){//solo permitiremos la edicion , si el dato necesario ya fue visto
         throw new Error('Debe ver el video anterior para desbloquear este')
       }
      return validateVideosProgress(data,Other_Videos)
   }
}