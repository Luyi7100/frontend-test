function quchong(array) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[j] == array[i]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}

console.log(quchong([1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 7, 7777, 7, 8]));
