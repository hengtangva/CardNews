<template>
  <div class="news">
    <news-item v-for="item in news"
               :key="item.id"
               :newsItem="item"/>
  </div>
</template>

<script>
  import NewsItem from "./NewsItem";
  export default {
    name: "Getnews",
    components:{
      NewsItem,
    },
    props: {
      news: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .news{
    display: flex;
    flex-wrap: wrap;/*包裹，*/
    justify-content: space-around;/*均等分*/
    padding: 2px;
  }


</style>
