<template>
  <div id="app">
    <div class="mask"></div>
    <main v-if="isHomePage">
        <h6>There are demos!</h6>
        <div class="router-box">
        <span><router-link to="/button">button</router-link></span>
        <span><router-link to="/tips">tips</router-link></span>
        <span><router-link to="/badge">badge</router-link></span>
        <span><router-link to="/loading">loading</router-link></span>
        </div>
    </main>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      }
    },
    computed: {
      isHomePage () {
        return this.$route.fullPath === '/'
      }
    }
  }
</script>

<style lang="less">
 @import './assets/css/layout.less';
 .router-box {
    display: flex;
    width: 100%;
    position: relative;
    top: 10rem;
    justify-content:space-around;
    flex-wrap: wrap;
    > span {
      flex: 1;
      border: 2px solid #21e7b6;
      height: 4rem;
      padding: 0 2rem;
      line-height: 4rem;
      text-align: center;
      margin: 0.5rem 0.8rem;
      color: #fff;
      font-size: 24px;
    }
 }
</style>
