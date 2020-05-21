<template>
  <div>
    <Button type="primary" @click="testThrottle" class="mr10">Test Throttle</Button>
    <Button type="primary" @click="testDebounce" class="mr10">Test Debounce</Button>
    {{count}} - {{handler}}
  </div>
</template>

<script>
import { throttle, debounce } from '../util/index'
export default {
  data () {
    return {
      count: {
        throttle: 0,
        debounce: 0
      },
      handler: {
        throttle: 0,
        debounce: 0
      }
    }
  },
  methods: {
    testThrottle () {
      this.count.throttle++
      throttle(() => {
        this.handler.throttle++
      }, 2000)()
    },
    // throttle (fn, wait) {
    //   const cxt = this
    //   const args = arguments
    //   if (!this.timer.throttle) {
    //     this.timer.throttle = setTimeout(() => {
    //       fn.apply(cxt, args)
    //       this.timer.throttle = 0
    //     }, wait)
    //   }
    // },
    testDebounce () {
      this.count.debounce++

      debounce(() => {
        this.handler.debounce++
      }, 2000)()
      // this.handler.debounce++
    }
  }
}
</script>
