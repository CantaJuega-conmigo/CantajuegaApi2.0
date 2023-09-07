module.exports = async (ActualProgress, newData, select, id, ProgressModel) => {
  const newProgress = {
    ...ActualProgress,
    [select]: newData,
  };
  const finalUpdate = await ProgressModel.update(newProgress, {
    where: {
      id: id,
    },
  });
  return finalUpdate;
};
