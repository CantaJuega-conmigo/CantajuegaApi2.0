const { Payment } = require("../../DB");
const {getProducts,} = require("../../payments");
module.exports = async (id) => {
    try { 
        const result = await getProducts();
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
