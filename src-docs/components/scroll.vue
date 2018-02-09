<template>
  <div class="page has-navbar">
    <free-scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div class="item item-borderless" v-for="(item, index) in items" :key="index" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>

      <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
    </free-scroll>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        items: [],
        infiniteCount: 0
      }
    },
    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      onRefresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          done()
        }, 1500)
      },
      onInfinite(done) {
        setTimeout(() => {
          if (this.infiniteCount < 2) {
            let start = this.bottom + 1
            for (let i = start; i < start + 10; i++) {
              this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.bottom = this.bottom + 10;
            this.infiniteCount++
          }
          done()
        }, 1500)
      },
      onItemClick(index) {
        console.log(index)
      }
    }
  }
</script>
<style lang="less">
    *, :after, :before {
        box-sizing: border-box;
    }
  .page {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .page-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: auto;
    height: auto;
    background-color: #f5f5f5;
  }
  .item {
    border: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 14px;
    line-height: 14px;
    color: #444;
    min-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item.item-stable {
    border-color: #b2b2b2;
    background-color: #f5f5f5;
    color: #444;
  }
  .item-borderless{
    border-width: 0;
  }
</style>
