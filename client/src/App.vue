<template>
  <div>
    <Navbar />
    <HomeView />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HomeView from './views/HomeView.vue';

export default {
  components: {
    Navbar,
    HomeView
},
};
</script>

<style lang="scss"></style>
