const {Report}=require('../../DB')
module.exports=async()=>{
    const allReports=await Report.findAll({
        include:'User'
    });
    return allReports
}


// model: Usuario,
// as: 'usuario', // Nombre de la relación en el modelo Reporte
// attributes: ['nombre', 'correo']