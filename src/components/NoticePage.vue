<template>
    <div class="notice">
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
                  <h3>唱响世界</h3>
                  <span></span>
                </div>
              </div>
              <br><br>
              <ul>
                <li> <a href="https://www.mct.gov.cn/whzx/zsdw/zymzlt/201912/t20191206_849388.htm">
                  2019国家艺术院团演出季”《穿越藏羌彝》 大型民族音乐会圆满成功</a> <span></span> </li>
                  <br><br>
                <li> <a href="https://www.sc.gov.cn/10462/10464/10465/10595/2021/5/21/ac320d8b748345919016e894eb6ee8b9.shtml">
                  第五届红原大草原夏季雅克音乐季8月震撼归来</a> <span><!--在这里添加日期--></span> </li>
                  <br><br>
                <li> <a href="http://wlt.sc.gov.cn/scwlt/hydt/2021/7/19/9157bdf623d7459a8e386ff912817252.shtml">
                  “城市之星”惠民音乐会——“吴蜀桐韵”古琴专场音乐会在蓉举办</a> <span></span> </li>
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