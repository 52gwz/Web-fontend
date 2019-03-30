var count = 0;
var oldNumber =  Number;
window.Number = function()
{
  count+=1;
  return oldNumber.apply(null,arguments);
}
Number('1');
Number('2');
Number('3');
console.log(count);
var gawain = {
  name:'高文铮',  //注意用:
  birth:2001,
  age: function(){
    var y = new Date().getFullYear();
    return y - this.birth;  //返回年龄
  }
};  //记得分号
//对象要在函数前
function Gao() {
  for (var i = 0; i < 2; i++) {
    alert("My name is " + gawain.name + ",im " + gawain.age() + " years old`");
    alert("My IQ:" + (150 + Number("100")));
  }
}
Gao();

// (function test(j)
// {
//   console.log(j);
// }(5)) 
