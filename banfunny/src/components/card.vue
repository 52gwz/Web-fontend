<template>
  <div id="card">
    <div id="buttons">进入直播间</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#card {
  display: block;
}
#buttons {
  // width: 20%;
  cursor: default;
  margin: 0 5%;
  border-radius: 2px;
  background-color: rgb(245, 245, 245);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
  text-align: center;
  line-height: 50px;
}
#buttons:hover {
  background-color: #ebebeb;
  box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.16);
}
</style>
