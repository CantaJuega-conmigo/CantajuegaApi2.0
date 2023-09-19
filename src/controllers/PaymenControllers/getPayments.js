const { Payment } = require("../../DB");
module.exports = async (id) => {
    try { 
        const result = id ? await Payment.findByPk(id) : await Payment.findAll();
        if(id&&!result){
            throw new Error('No se encontro el registro')
        }
        console.log(result);
        if(!id&&!result.length) throw new Error('No se encontraron los registros');
        return result 
    } catch (error) {
        throw error
    }

};
