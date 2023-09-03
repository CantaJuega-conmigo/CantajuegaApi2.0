const validateVideosProgress = require("./validateVideosProgress");

module.exports=(data,section)=>{

   const First_Video=['PdfCompleted','Total','Ready_to_Next_Video'];
   const Other_Videos=["Last_Video_Completed",'Total',"Ready_to_Next_Video"];
   const Final_Video=['Last_Video_Completed','Total',"Ready_to_Test"];
   
   if(section==='First_Video'){
      return validateVideosProgress(data,First_Video)
   }
   if(section==='Final_Video'){
      return validateVideosProgress(data,Final_Video)
   }
   if(section!=='First_Video'){
      return validateVideosProgress(data,Other_Videos)
   }
}