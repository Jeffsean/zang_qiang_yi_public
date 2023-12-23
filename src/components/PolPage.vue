<template>
    <div class="pol">
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
                  <h3>相关政策</h3>
                  <span></span>
                </div>
              </div>
              <br><br>
              <ul>
                <li> <a href="https://www.mct.gov.cn/whzx/qgwhxxlb/sc/201811/t20181105_835756.htm">
                  《藏羌彝文化产业走廊四川行动计划(2018—2020年)》发布 </a> <span></span> </li>
                  <br><br>
                <li> <a href="http://sscp.cssn.cn/xkpd/djbd_20143/djbdnr/202206/t20220617_5412866.html">
                  构建藏羌彝走廊研究体系</a> <span><!--在这里添加日期--></span> </li>
                  <br><br>
                <li> <a href="https://www.gov.cn/gongbao/content/2014/content_2711451.htm">
                  文化部财政部关于印发《藏羌彝文化产业走廊总体规划》的通知</a> <span></span> </li>
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