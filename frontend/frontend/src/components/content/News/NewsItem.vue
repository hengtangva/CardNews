<template>
<div class="news">
      <el-card :body-style="{ padding: '0px' }">
        <h2>{{newsItem.title}}</h2>
        <a :href="newsItem.url">
        <img :src=newsItem.thumbnail_pic_s alt="" >
        </a>
        <p>{{newsItem.date}}</p>


<!--        <div class = news-info>-->
<!--            <h2>{{newsItem.title}}</h2>-->
<!--        </div>-->
      </el-card>
</div>
<!--  <div class="news">-->
<!--    <img :src="newsItem.pict1" alt="">-->
<!--    <div class="news-info">-->
<!--      <p>{{newsItem.title}}</p>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
  export default {
    name: "NewsItem",
    props: {
      newsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  /*子元素绝对定位的话，父元素必须相对定位，这里goods-info是绝对定位，所以，父元素goods采取相对定位*/
  .news {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }
  .news img {
    width: 100%;
  }

  .news-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .news-info p,h2 {
    overflow: hidden;
    text-overflow: ellipsis;  /*文字在一行显示，多的话就显示....*/
    white-space: nowrap;
    margin-bottom: 3px;
  }
</style>