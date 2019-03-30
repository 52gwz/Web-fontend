<template>
  <div class="users">
    <ul>
        <li v-for="user in users" :key="user.id">
            {{user}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Users",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      users:['安柏华','是我的','大哥','牛逼！'],
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    ul{
        list-style: none;
    }
</style>
