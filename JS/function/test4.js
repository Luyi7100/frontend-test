var obj = {
  name: 'zhubajie',
  age: 18,
  gender: 'nan',
  address: 'gaolaozhuang',
};

function add(o) {
  console.log(
    '我是' +
      o.name +
      ',我今年' +
      o.age +
      '岁,' +
      '我是个' +
      o.gender +
      '人,' +
      '我住在' +
      o.address
  );
}
add(obj);
