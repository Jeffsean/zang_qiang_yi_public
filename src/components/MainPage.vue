<template>
    <div id="main">
        <el-card :body-style="{ padding: '20px' }" class="choose">
            <el-button type="info" plain @click="go2pol()">相关政策</el-button>
            <el-button type="info" plain @click="go2news()">新闻事迹</el-button>
            <el-button type="info" plain @click="go2notice()">唱响世界</el-button>
            <el-button type="info" plain @click="vision()">旅游蓝图</el-button>
            <el-button type="info" plain @click="test()">用户调查</el-button>
            <el-button type="info" plain @click="email()">意见邮箱</el-button>
        </el-card>
        <el-scrollbar class="scrollbar">
            <div class="block">
                <el-carousel height="300vh" autoplay="true" arrow="never">
                    <el-carousel-item>
                        <el-card class="CardList">
                            <div slot="header" class="clearfix">
                                <span>民族音乐</span>
                            </div>
                            <div style="padding: 14px;">
                                <img src="@/image/首图.jpg" class="image">
                                <p style="font-size:32px;">
                                狭义地讲，所谓中国民族音乐就是祖祖辈辈生活、繁衍在中国这片土地上的各民族，
                                从古到今在悠久历史文化传统上创造的具有民族特色，能体现民族文化和民族精神的音乐。
                                而广义上，民族音乐是泛指中国音乐家所创作的音乐和具有中国五声色彩的音乐。
                                </p>
                            </div>
                        </el-card>
                    </el-carousel-item>
                    <el-carousel-item>
                        <el-card class="CardList">
                            <div slot="header" class="clearfix">
                                <span>藏</span>
                            </div>
                            <div style="padding: 14px;">
                                <img src="@/image/藏族歌曲.jpg" class="image">
                                <p style="font-size:32px;">
                                    藏族传统音乐特色鲜明，品种多样，包括民间音乐、古典音乐、宗教音乐3大类。民间音乐可分为民歌、歌舞音乐、说唱音乐、戏曲音乐、
                                    器乐等5类。卫藏、康巴、安多3大方言区的民间音乐在风格上有明显的差别，乐种亦不尽相同。宗教音乐包括诵经音乐、宗教仪式乐舞羌姆、寺院器乐；
                                    古典音乐嘎尔只传于拉萨布达拉宫及日喀则扎什仑布寺。民间音乐在传统音乐中居主要地位。
                                </p>
                            </div>
                        </el-card>
                    </el-carousel-item>
                    <el-carousel-item>
                        <el-card class="CardList">
                            <div slot="header" class="clearfix">
                                <span>羌</span>
                            </div>
                            <div style="padding: 14px;">
                                <img src="@/image/羌族歌曲.jpg" class="image">
                                <p style="font-size:32px;">
                                    羌族民间音乐历史悠久，风貌古朴，在历史传承中不断创造谱写迷人的旋律。
                                    主要有羌族古歌、情歌、赞歌、酒歌、祭奠歌、山歌、舞歌、盘歌、决术歌、婚礼歌、丧葬歌等，
                                    在音乐结构上多数以两乐句为一个乐段，并在此基础上根据抒发情感的需要而作叠加、反复处理。
                                    羌族民间音乐以五声音阶、徽调式为基础，虽间或加入清角或变宫形成六声音阶，但一直少有七声音阶出现。
                                </p>
                            </div>
                        </el-card>
                    </el-carousel-item>
                    <el-carousel-item>
                        <el-card class="CardList">
                            <div slot="header" class="clearfix">
                                <span>彝</span>
                            </div>
                            <div>
                                <img src="@/image/彝族歌曲.png" class="image">
                                <p style="font-size:32px;">
                                    彝族是我国能歌善舞的民族之一。彝族民间有各式各样的传统曲调，诸如爬山调、进门调、迎客调、吃酒调、娶亲调、哭丧调等。
                                    无论男女老少，个个都会唱几首。
                                    有的曲调有固定的词，有的没有。山歌又分男女声调，男声调雄浑高亢，女声调柔和细腻。
                                    各地山歌又有自己独特的风格，如著名歌曲《马儿快快跑》就是根据彝族民间曲调提炼出来的。
                                    彝族乐器有葫芦笙、马布、巴乌、口弦、月琴、笛、三弦、编钟、铜鼓、大扁鼓和克些觉黑等。
                                </p>
                            </div>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    name:"MainPage",
    methods:{
        go2pol(){
            this.$router.push("/pol")
        },
        go2news(){
            this.$router.push("/news")
        },
        go2notice(){
            this.$router.push("/notice")
        },
        vision(){
            const { href } = this.$router.resolve({
                path:"/vision"
            })
            window.open(href,"_blank")
        },
        test(){
            window.open("https://www.wjx.cn/vm/wFNbCzs.aspx# ")
        },
        email(){
            const { href } = this.$router.resolve({
                path:"/email"
            })
            window.open(href,"_blank")
        }
    }
}
</script>

<style>
#main{
    background: url("@/image/main.jpg");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
}
/*行排列 */
.el-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
/*卡片样式 */
.choose{
    width:80%;
    margin-top:15px;
    margin-left:10%;
}
.CardList{
    width:80%;
    margin-top:15px;
    margin-left:10%;
}

.image{
    height:350px;
    width:50%;
}
.list{
    height:100%;
    position:fixed;
}
.scrollbar{
    height:100%;
    overflow-x: hidden !important;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    height:100vh;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    height:100vh;
  }
</style>