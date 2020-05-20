<template>
  <div>
    <hr />
    <h2>test page</h2>
    <h3>{{$attrs}}</h3>
    <h4>name :{{name}}</h4>
    <h4 @click="$listeners.toChildEvent">点击切换 Test flag</h4>
  </div>
</template>

<script>
export default {
  inject: ['name']
}
</script>
