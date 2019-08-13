<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { StoneClass } from './class/StoneClass'
  export default {
    name: 'my-user',
    data () {
      return {
        base: new StoneClass()
      }
    },
    created () {
      console.log(this.base)
    }
  }
</script>

<style>
  /* CSS */
</style>
