// function creatPerson(name, age, gender) {
//   var obj = new Object();
//   obj.name = name;
//   obj.age = age;
//   obj.gender = gender;
//   obj.sayName = function () {
//     console.log(this.name);
//   };
//   return obj;
// }
// var a = creatPerson('swk', 18, 'man');
// var b = creatPerson('zbj', 28, 'man');
// a.sayName();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log('hello,i am ' + this.name);
  };
}
var per = new Person('swk', 18);
console.log(per);
console.log(per.name);
per.sayName();
