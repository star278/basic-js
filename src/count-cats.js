module.exports = function countCats(arr) {
  var numberCats = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'string' && arr[i][j] === '^^') {
          numberCats++;
      }
    }
  }
  return numberCats;
};
