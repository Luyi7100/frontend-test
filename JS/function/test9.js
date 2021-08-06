var arr = [1, 2, 3, 2, 1, 3, 3, 3, 4, 2, 5];

function quchong(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length - i; j++) {
      if (arr[j] == arr[i]) {
        arr.splice(j, 1);
        //特别重要，有删除发生的时候，还是对原位置重复检查一次，否则对于连续重复的元素就不能起到去重了
        j--;
      }
    }
  }
  return arr;
}

console.log(quchong(arr));
