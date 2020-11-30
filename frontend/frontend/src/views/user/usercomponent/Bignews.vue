<template>
  <div class="bignews">
  <!--<el-row>
    <el-col :span="8" v-for="banner in this.news" :key=banner :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">操作按钮</el-button>
            <p>{{}}</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>-->
    <Getnews :news = this.news></Getnews>
  </div>
</template>

<script>
  import Getnews from "../../../components/content/News/Getnews";
  export default {
    name: "Bignews",
    components: {
      Getnews
    },
    data() {
      return {
        news: [],
      };
    },
    methods: {
      getNews() {
        this.$http.get('/news').then(res => {
          console.log(res.data)
          this.news.push(...res.data)
          // let data = res.data
          // this.news.title = data.title
          // this.news.picture[0] = data.pict1
          // this.url=data.url
          // this.date= data.date
        })
      },
    },
    mounted() {
      this.getNews();
    }

  }
</script>

<style scoped>
  .bignews {
    height: 520px;
    overflow: auto;
  }

</style>