<template>
  <div id="email">
    <div class="emailContainer">
        <h3 class="emailTitle">
          请发送消息联系我们
        </h3>
        <h4>目前该网页功能已取消，以后想要加入右键功能时记得申请Emailjs</h4>
        <form class="input" ref="form" @submit.prevent="onclick">
            <input name="name" type="text" placeholder="你的名字" 
            style="width: 340px;background-color: rgba(0, 0, 0, 0.5);color:white;box-shadow: 0 0 25px aliceblue;"><br>

            <input name="topic" type="text" placeholder="主题" style="width: 340px;
            margin-top: 10px;background-color: rgba(0, 0, 0, 0.5);color:white;box-shadow: 0 0 25px aliceblue;"><br>

            <textarea name="message" placeholder="你的消息" style="width: 342.5px;height:200px;margin-top: 10px;
            background-color: rgba(0, 0, 0, 0.5);color:white;box-shadow: 0 0 25px aliceblue;"></textarea><br>

            <input type="submit" value="发送" style="width: 348px;margin-top: 5px;
            box-shadow: 0 0 25px aliceblue;background-color: azure;">
        </form>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    name:"EmailPage",
    methods:{
        onclick(){
            emailjs
            .sendForm('service_dtd8wmo', 'template_dmfvfcm', this.$refs.form,'Xte6Av3sB315zQpEn')
                .then(
                result => {
                    window.alert(result.text)
                },
                error => {
                    window.alert(error.text)
                }
            )
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.input{
  width:100%;
  height:100%;
}
#email{
  background: url("@/image/wallpaper.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
.emailContainer{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background-color: rgba(0, 0, 0, 0.5);
        border:1px solid blueviolet;
        box-shadow: 0 0 25px aliceblue;
    }
    .emailTitle{
        margin: 0px auto 48px auto;
        text-align: center;
        font-size: 32px;
        color: aliceblue;
    }
</style>