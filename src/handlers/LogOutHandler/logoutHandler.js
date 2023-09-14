module.exports=(req,res)=>{
 try {
    res.clearCookie('accesscookie')
    res.send('Se ha deslogueado con exito.')
 } catch (error) {
    res.status(401).send({
        error:true,
        message:error.message??'server failed.'
    })
 }
}