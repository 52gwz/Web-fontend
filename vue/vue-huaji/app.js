var app = new Vue({
    el:"#app",
    data:{
        mood:100,   //心情
        isEnded:false,
        faceList:{
            100:"lol.png",
            80:"quite.png",
            60:"unhappy.png",
            40:"smile.png",
            20:"cry.png",
            0:"anger.png"},
        faceStyle:{
            height: '64px',
            margin: '200px auto 20px auto',
            backgroundImage:'url(img/lol.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
        },
    },
    methods:{
        bitHim:function(){
            this.mood-=10;
            console.log(this.mood);
            if(!(this.mood%20)){   //触发五次更改图片
                this.faceStyle.backgroundImage = "url(img/"+this.faceList[this.mood]+")";
                console.log('切图');
            }
            if(this.mood==0){
                this.isEnded=true;
                console.log('游戏结束');
            }
            this.ischange=false;
        },
        restart:function(){
            this.mood=100;
            this.faceStyle.backgroundImage = "url(img/"+this.faceList[this.mood]+")";
            this.isEnded=false;
        },
    },
});