//创建Person函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//修改Person原型的toString
Person.prototype.toString = function () {
  return 'Person[name=' + this.name + ',age=' + this.age + ']';
};
//给Person对象创建5个实例
var per = new Person('孙悟空', 18);
var per2 = new Person('猪八戒', 28);
var per3 = new Person('红孩儿', 8);
var per4 = new Person('蜘蛛精', 16);
var per5 = new Person('二郎神', 38);
//Person对象作为perArr数组的元素
var perArr = [per, per2, per3, per4, per5];
//要求：创建一个函数，可以将perArr中满18岁的person提取出来，然后封装到一个新的数组并返回
//创建一个函数
function getAdult() {
  //创建一个新数组
  var newArr = [];
  //对perArr进行遍历，获取所有对象信息
  for (var i = 0; i < perArr.length; i++) {
    var p = perArr[i];
    //判断是否大于等于18岁
    if (p.age >= 18) {
      //如果是，就将该对象添加到newArr中
      newArr.push(p);
    }
  }

  //将新数组返回
  return newArr;
}
var result = getAdult(perArr);
console.log(result);
