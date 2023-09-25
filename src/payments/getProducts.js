const axios=require('../axios/axios')
module.exports=async(id)=>{
    try {
        const products=!id?await axios.get('/products'):await axios.get(`/products/${id}`);
        return products.data;
    } catch (error) {
        throw new Error(error)
    }

}