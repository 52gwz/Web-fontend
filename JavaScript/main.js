function cmp_number()
{
    var x = document.getElementById("number").value;
    var a = document.getElementById("hint");
    if(x!="" && !isNaN(x))
    {
        if(x>666)
        {
            a.innerHTML="猜大了吧~";
        }else if(x<666){
            a.innerHTML="我想你应该是猜小咯~";
        }else{
            a.innerHTML="卢本伟牛x！";
        }
    }else{
        a.innerHTML="你输了些什么几把玩意儿？";
    }
    
}