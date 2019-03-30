<template>
  <div id="app">
    <app-header></app-header>
    <div id="table" v-on:click="chat()">
      <card></card>
    </div>
    
    <chat v-show="isShow"></chat>
    <app-footer></app-footer>
  </div>
</template>
<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
import card from "./components/card.vue";
import chat from "./components/chat.vue";

export default {
  name: "app",
  data() {
    return {
      isShow: false
    };
  },
  components: {
    card,
    chat,
    "app-header": header,
    "app-footer": footer
  },
  methods: {
    chat: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="scss">
#table {
  margin: 20px 0px;
}
</style>
