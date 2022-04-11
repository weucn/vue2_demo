<template>
  <div class="LoginPage">
    <div class="Main">
      <div class="Title">
        <img :src="App.logo" alt="" />
        <span>{{ App.title }}</span>
      </div>
      <div class="Desc">
        {{ App.desc }}
      </div>
      <div id="qwxrcode"></div>
    </div>
    <div class="Version">
      {{ App.version }}
      <a :href="App.vlink" style="margin-left: 10px; color: rgba(0, 0, 0, 0.45)">{{ App.vcontent }}</a>
    </div>
  </div>
</template>

<script>
import Config from '@/config/defaultSettings'
export default {
  name: 'LoginPage',
  data () {
    return {
      App: Config.app
    }
  },
  mounted () {
    // window.WwLogin({
    //   id: "qwxrcode",
    //   appid: "ww866f78e1acac1cd9",
    //   agentid: "1000002",
    //   redirect_uri: encodeURIComponent('https://apps.skywen.cn/tianweiadmin/logining'),
    // });
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTA3MDU0MjQsIm5zaF91c2VyX2F1dGgiOjE3LCJvcmlnX2lhdCI6MTY0ODExMzQyNH0.a0lnwoBPBo7Hmjjd9iKykskHexO1Jn1se_xlcG1VGBg'
    if (token) {
      this.$router.push('/')
    } else {
      window.WwLogin({
        id: 'qwxrcode',
        appid: 'ww866f78e1acac1cd9',
        agentid: '1000002',
        redirect_uri: encodeURIComponent('https://apps.skywen.cn/tianweiadmin/logining')
      })
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.LoginPage {
  height: 100%;
  background: #f0f2f5 url('~./assets/background.svg') no-repeat 50%;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .Main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .Title {
      font-size: 35px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
      }
    }
    .Desc {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 12px;
      margin-bottom: 100px;
    }
    .Box {
      margin-bottom: 20vh;
      .LoginBtn {
        margin-top: 5vh;
        box-sizing: border-box;
      }
    }
  }

  .Version {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    height: 10vh;
  }
}
</style>
