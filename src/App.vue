<template>
  <div>
    <Header />
    <router-view class="col"></router-view>
  </div>
</template>

<script>
import Header from './components/includes/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
/*  */
</style>
