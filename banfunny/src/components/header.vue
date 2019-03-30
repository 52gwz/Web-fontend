<template>
  <header>
    <h3>{{ title }}</h3>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "中出穹妹"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: #4285f4;
  padding: 5px;
  opacity: 0.9;
}
h3 {
  color: white;
  text-align: center;
}
</style>
