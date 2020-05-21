<template>
  <div id="app">
    <div id="nav" style="display: flex;justify-content: center;align-content: center;cursor: pointer;">
      <div @click="toHome" class="mr10">Home</div>
      <div @click="toAbout" class="mr10">About</div>
      <div @click="toFunction" class="mr10">Function</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import snsLogin from '@bilibili/sns-login'

export default {
  created () {
    // const _this = this
    // snsLogin.snsVerify({
    //   // code: '5A82297F5559EE09981E79BFAF4E4D3F',
    //   // appId: '101135748',
    //   // type: 'qq',
    //   // redirectUrl: 'https://passport.bilibili.com/web/sns/bind/callback/qq'
    // }).then(fastRegister => {
    //   fastRegister.showComponent()
    //   fastRegister.hasPassport(true) // ^0.2.4版本新增了账号密码登录入口的显示隐藏方法
    //   fastRegister.addEventListener('login-success', (res) => {
    //     fastRegister.hideComponent()
    //     _this.$router.push({
    //       name: 'About'
    //     })
    //     // snsLogin.snsBind({
    //     //   code: '5A82297F5559EE09981E79BFAF4E4D3F',
    //     //   appId: '101135748',
    //     //   type: 'qq',
    //     //   redirectUrl: 'https://passport.bilibili.com/web/sns/bind/callback/qq'
    //     // })
    //   })
    // })
  },
  mounted () {},
  methods: {
    toHome () {
      this.$router.push({
        name: 'Home'
      })
    },
    toAbout () {
      this.$router.push({
        name: 'About'
      })
    },
    toFunction () {
      this.$router.push({
        name: 'Function'
      })
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
