<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"
                :from="option.from"
                :to="option.to"
                :flag="option.flag"
                @todo="change"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  provide () {
    return {
      name: this.option.name
    }
  },
  data () {
    return {
      option: {
        from: 'from home',
        to: 'to components',
        flag: true,
        name: '你要的测试provide'
      }
    }
  },
  methods: {
    change () {
      this.option.flag = !this.option.flag
      this.option.name = '还是被我改了吧'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
