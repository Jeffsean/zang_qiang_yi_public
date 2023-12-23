<template>
  <div id="app">
    <el-card :body-style="{ padding: '20px' }" class="choose">
      <el-button type="primary" plain @click="info()">操作提示</el-button>
      <el-button type="primary" plain @click="back()">还原</el-button>
      <label>  关键词：<input v-model="keyword"></label>
      <label>  地区：<input v-model="location"></label>
    </el-card>
    <baidu-map class="map" center="成都" :zoom="15" :scroll-wheel-zoom="true" >
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: '',
      keyword: ''
    }
  },
  mounted(){
    window.alert("在当前页面，您可以规划自己的藏羌彝路线。点击右下角按钮即可定位当前位置。"+
    "在上方搜索框输入关键词和所在地，在地图下方即可显示检索结果。"+
    "在地图中也可以点击标记，可以执行更多操作。");

  },
  methods:{
    back(){
      this.$router.go(0);
    },
    info(){
      window.alert("在当前页面，您可以规划自己的藏羌彝路线。点击右下角按钮即可定位当前位置。"+
      "在上方搜索框输入关键词和所在地，在地图下方即可显示检索结果。"+
      "在地图中也可以点击标记，可以执行更多操作。");
    }
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 600px;
}
/*卡片样式 */
.choose{
    width:80%;
    margin-top:15px;
    margin-left:10%;
}
</style>
  
  