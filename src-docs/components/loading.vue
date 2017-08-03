<template>
  <div>
    <main>
      <h1 class="h1-title"><router-link to="/">Free Loading!</router-link></h1>
      <div class="button-box">
        <free-loading></free-loading>
        <free-loading type="primary" size="lg"></free-loading>
        <free-loading type="secondary"></free-loading>
        <free-loading type="secondary" size="sm"></free-loading>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        cls: ['myclass'],
      }

    },
  }
</script>

<style lang="less" scoped>

  .button-box {
      text-align: center;
  }

  .h1-title {
    position: relative;
    top: -8rem;
  }

  main {
    position: relative;
    top: -2rem;
  }
</style>
