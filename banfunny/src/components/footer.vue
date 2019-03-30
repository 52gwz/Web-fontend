<template>
  <footer>
    <span>{{ copyright }}</span>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Copyright 2018 by Gawain"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background-color: #4285f4;
  padding: 20px;
  text-align: center;
}
span {
  font-size: small;
  color: white;
}
</style>
