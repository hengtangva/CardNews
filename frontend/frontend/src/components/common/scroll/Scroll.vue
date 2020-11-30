<template>
  <!--ref确定是哪个-->
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  import BScroll from  'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动位置
      this.scroll.on('scroll', (pos) => {
        this.$emit('scroll',pos)
      })

      //监听上拉加载更多
      this.scroll.on('pullingUp',() => {
        //console.log("load");
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x,y, time = 500) {
        this.scroll.scrollTo(x,y,time) //返回滚动顶部
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ?this.scroll.y: 0
      },
      refresh() {
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
