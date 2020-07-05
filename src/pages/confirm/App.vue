<template>
  <div id="main">
    <Contents v-if="showContens" @showEdit="showContens= !showContens"/>
    <router-view />
  </div>
</template>

<script>
import Contents from '@/pages/confirm/components/Contents';
export default {
  name: "App",
  components: {
    Contents
  },
  data() {
    return {
      showContens: true
    }
  }
};
</script>

<style>

</style>
