<template>
  <div>
    <main>
      <h1><router-link to="/">Free Button!</router-link></h1>
      <div class="button-box">
        <free-button type="default" size="large">large</free-button>
        <template v-for="type in types">
          <br />
          <free-button :type="type">{{ type }}</free-button>
        </template>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        types: ['info','default','primary','success','warning','danger'],
      }

    },
  }
</script>

<style>
  .button-box {
      text-align: center;
  }
</style>
