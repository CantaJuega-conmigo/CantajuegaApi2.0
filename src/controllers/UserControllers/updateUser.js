const { User } = require("../../DB");
module.exports = async (data, id) => {
    try {
        const userEdited = await User.update(data, { where: { id: id } });
        const isSucessfully=userEdited[0]===1
        if(!isSucessfully)throw new Error('Error al actualizar los datos.');
        return isSucessfully
    } catch (error) {
        throw error
    }

};
