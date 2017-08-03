<template>
  <div>
    <main>
      <h1><router-link to="/">Free Tips!</router-link></h1>
      <div class="btns">
        <a class="btn"
           v-for="(item, index) in btns"
           @click="notice(item.options)">{{ item.content }}</a>
      </div>
    </main>
    <free-tips
      :options.sync="options"
      :show.sync="showNotification" @close="closeNotification"></free-tips>
    </div>
</template>

<script>

  export default {
    data () {
      return {
        showNotification: false,
        options: {},
        btns: [
          {
            content: 'success',
            options: {
              autoClose: false,
              content: 'this is free success!'
            }
          },
          {
            content: 'warning',
            options: {
              autoClose: false,
              backgroundColor: '#fbff7c',
              textColor: '#92253f',
              content: 'this is free warning!'
            }
          },
          {
            content: 'error',
            options: {
              autoClose: true,
              backgroundColor: '#fc5050',
              content: 'this is free error!'
            }
          },
          {
            content: 'info',
            options: {
              autoClose: true,
              showTime: 5000,
              backgroundColor: '#769FCD',
              content: 'this is free info!',
              countdownBar: true,
              barColor: '#415F77'
            }
          },
          {
            content: 'flexible',
            options: {
              backgroundColor: 'rgba(6,45,146,.6)',
              content: `<P><span style="font-family: anana;font-size: 1.5rem">Title</span><br>here can contains HTML tags!</P>`,
              textColor: '#03D6D2'
            }
          }
        ]
      }
    },
    methods: {
      notice (options) {
        this.showNotification = true
        this.options = options
      },
      closeNotification () {
          this.showNotification = false
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/css/layout.less';

  #app main .btns {
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-left: auto;
    margin-right: auto
  }

  @media screen and (max-width: 768px) {
    #app main .btns {
      flex-direction: column;
      margin-top: 1.5rem
    }
  }

  #app main .btns .btn {
    display: inline-block;
    border: 2px solid #21e7b6;
    border-radius: 5px;
    color: #fff;
    font-size: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: .75rem 1.5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer
  }

  @media screen and (max-width: 768px) {
    #app main .btns .btn {
      width: 30%;
      margin-bottom: .5rem;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      padding: .5rem 1rem
    }
  }
</style>
