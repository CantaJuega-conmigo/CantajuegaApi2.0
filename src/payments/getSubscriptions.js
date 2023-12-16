const axios=require('../axios/axios')
module.exports=async(id)=>{
    try {
        const subscriptions=!id?await axios.get('/subscriptions'):await axios.get(`/subscriptions/${id}`);
        return subscriptions.data;
    } catch (error) {
        throw new Error(error)
    }

}