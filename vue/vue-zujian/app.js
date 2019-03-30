Vue.component('button-counter',{
    data: function () {
        return {
            count : 0
        }
    },
    template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>',
})
new Vue({ el: '#components' })   //需要实例化才能使用
var app1 = new Vue({
    el:"#app-1",
    data:{
        sentence:"大哥好！",
    },
    methods:{
        greet:function(){
            app2.sentence = "你好你好，我是大哥"
        }
    }
})
var app2 = new Vue({
    el:"#app-2",
    data:{
        sentence:"大哥牛逼！",
    },
    methods:{
        greet:function(){
            app1.sentence = "你好你好，我是牛逼";
        }
    }
})