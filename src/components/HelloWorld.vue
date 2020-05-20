<template>
  <div class="hello">
    <hr />
    <h2>hello world page</h2>
    <h4>{{$attrs}}</h4>
    <h3 @click="changeFlag">点击切换flag</h3>
    <Test :toChild="$attrs" @toChildEvent="$listeners.todo"></Test>
  </div>
</template>

<script>
import Test from './Test'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeFlag () {
      this.$listeners.todo()
    }
  },
  components: {
    Test
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
</style>
