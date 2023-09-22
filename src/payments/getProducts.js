const axios=require('../axios/axios')
module.exports=async()=>{
    try {
        const products=await axios.get('/products');
        return products.data;
    } catch (error) {
        throw new Error(error)
    }

}