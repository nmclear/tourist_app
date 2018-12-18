const formatDataForListColumns = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (numberOfElementsLastRow !== numColumns) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow += 1;
  }

  return data;
};

export default formatDataForListColumns;
