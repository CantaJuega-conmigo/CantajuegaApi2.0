const { Stage } = require("../../DB");
module.exports = async (id, content, data, order) => {
  try {
    const stage = await Stage.findByPk(id);
    const actualcontent = stage.content[content]; // get type of content to edit
    const contentToEdit = actualcontent.find((el) => el.order === order); //get content to edit
    if (data.order && data.order !== order)
      // validate user cant change order
      throw new Error("Cannot change order value.");
    for (const key in data) {
      if (!data[key]) delete data[key];
    } //clean properties that are empty or undefined
    if (!contentToEdit) throw new Error("Incorrect order."); //if content not found set error because order doesn't exist
    const newContent = {
      //create new content
      ...contentToEdit, //get last content
      ...data, //add new content
    };
    const indexOfContent = stage.content[content].findIndex(
      (el) => el.order === order
    ); //find index of content to edit
    stage.content[content][indexOfContent] = newContent; //replace new content in index of last content
    const updateStage = await Stage.update(
      { content: stage.content },
      { where: { id: id } }
    );
    return updateStage;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'editContentStage': ${error.message}`
    );
  }
};
