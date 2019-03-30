//实例化Vue对象
var app = new Vue({
    el:"#Vue-app",
    data:{
        x:0,
        y:0,
        name:"高文铮",
        website:'http://www.baidu.com',
        websiteTag:"<img src='logo.png'>",
        isReform:false,
        isProgress:false,
        show:false,
        show2:false,
        todos:[
            {text:"牛逼哦弟弟"},
            {text:"社会主义"},
            {text:"民主"}
        ]
    },
    methods:{
        sayhello:function(){
            return "fuck " + this.name;
        },
        change:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
    },
    computed:{
        compClasses:function(){
            return {
                progress : this.isProgress,
                reform : this.isReform
            }
        },
    },
    
});