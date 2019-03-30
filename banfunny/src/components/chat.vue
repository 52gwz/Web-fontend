<template>
  <div id="chat">
    <ul id="danmu">
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
        <li>这是一条弹幕</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      // chatbackground:require("../assets/chat-background.png")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#chat {
  // display: none;
  display: block;
  padding: 20px 0 20px;
  width: 100%;
  text-align: right;
  color: black;
  text-shadow: black 0 1px 2px;
  background: url("../assets/chat-background.jpg");
  background-size: 88px;
}
ul {
  list-style: none;
}
#danmu {
  position: relative;
  //   left: 100px;
}
</style>
