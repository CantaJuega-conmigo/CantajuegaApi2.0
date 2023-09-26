module.exports=async(Model,id,{message1,message2})=>{

    const model = await Model.findByPk(id);
    const updated = await Model.update(
      { deleted: !model.deleted },
      { where: { id } }
    );
    const isSuccesfully = updated[0] === 1;

    if (!isSuccesfully) throw new Error("No se pudo realizar la accion.");
    return {
      status: isSuccesfully,
      message: !model.deleted
        ? message1??'Se ha borrado con exito.'
        : message2??"Se restauro con exito.",
    };
}