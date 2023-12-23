<template>
    <div class="news">
      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="back()">返回</el-menu-item>
            <el-menu-item index="1" @click="go2pol()">相关政策</el-menu-item>
            <el-menu-item index="1" @click="go2news()">新闻事迹</el-menu-item>
            <el-menu-item index="1" @click="go2notice()">唱响世界</el-menu-item>
          </el-menu>
            
        </el-header>
        <el-main>
          <div class="notelista">
              <div class="welcomebox">
                <div class="welcome_info">
                  <img src="@/image/藏羌彝.jpg" alt="#" height="300px"><br>
                  <h3>新闻事迹</h3>
                  <span></span>
                </div>
              </div>
              <br><br>
              <ul>
                <li> <a href="http://www.tibet.cn/cn/index/zqdt/202112/t20211210_7113340.html">
                  从象牙塔到生活 寻找藏羌彝文化生命力——走进西南民族大学藏羌彝文化研究院</a> <span></span> </li>
                  <br><br>
                <li> <a href="https://zangdiyg.com/Home/Article/detail/id/10.html">
                  欢乐藏区行，欢乐甲根坝 ——康巴卫视2014年“走基层”活动纪实</a> <span><!--在这里添加日期--></span> </li>
                  <br><br>
                <li> <a href="https://news.sina.com.cn/o/2020-06-22/doc-iirczymk8367229.shtml">
                  原生态藏羌彝非遗传承人演绎超强民族融合音乐 带你走进非物质文化遗产的世界</a> <span></span> </li>
                  <br><br><br>
              </ul>
          </div>
        </el-main>
        <el-footer>本页面是藏羌彝文化走廊音乐研究之新闻及通知页面</el-footer>
      </el-container>
    </div>
</template>

<script>
export default {
  name:"PolPage",
  methods:{
    back(){
      this.$router.push("/")
    },
    go2pol(){
      this.$router.push("/pol")
    },
    go2news(){
      this.$router.push("/news")
    },
    go2notice(){
      this.$router.push("/notice")
    }
  }
}
</script>

<style>
  .el-footer{
    background-color: azure;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .menu{
    background-color: azure;

    width:100%;
  }
  .notelista{
    background-color: azure;
  }
</style>