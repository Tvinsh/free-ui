<template>
  <div>
    <main>
      <h1 class="h1-title"><router-link to="/">Free Badge!</router-link></h1>
      <div class="button-box">
        <free-badge content="after" />
        <free-badge content="primary" primary />
        <free-badge content="secondary" secondary />
        <free-badge content="new" circle />
        <free-badge content="self" color="#99f" :badgeClass="cls" />
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
