/*
1.告知你所选定的小动物叫声
2.加法计算器
3.定义一组函数 输入数字 逆转并输出汉字形式
4.n的阶乘
5.斐波那契数列
*/

function scream(animale)
{   
    var a = document.getElementById('bark');
    switch (animale)
    {
        case "fox":
            a.innerHTML="da da da~";
        return;
    }
} 
function plus(x,y)
{
    return x+y;
}
// function reverse(nb)
// {
//     while(nb!=NaN)
//     {
//         var a = nb%10;
//         nb/=10;
//     }
// }
function mul(n)
{
    if(n==1 || n==0)
    {
        return 1;
    }
    return n*mul(n-1);
    /*
    mul(4) => 4*mul(3)
    mul(3) => 3*mul(2)
    mul(2) => 2*mul(1)
    if n==1 => return 1
    代码简洁但是运算速度较慢
    */
   
}
function test()
{
    var a = [];
    for(var i = 0;i<10;i++)
    {
        a[i] = function () {
            document.write(i+" ");
        }
    }
    return a;
}
var arr = test();
for(var j = 0;j<10;j++)
{
    arr[j]();
}