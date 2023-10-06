module.exports = async (ActualProgress, newData, select, id, ProgressModel) => {
  const newProgress = {
    ...ActualProgress,
    [select]: {
      ...newData,
      day_Started: !newData.day_Started///guardamos la fecha cuando fue visto 4 veces
      ? new Date()
      : newData.day_Started,
    }
  };
  const finalUpdate = await ProgressModel.update(newProgress, {
    where: {
      id: id,
    },
  });
  return finalUpdate;
};
