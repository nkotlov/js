<template>
  <div class="home-container">
    <HomeHeader />
    <HomeContent />
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeView/HomeHeader.vue";
import HomeContent from "@/components/HomeView/HomeContent.vue";
import HomeFooter from "@/components/HomeView/HomeFooter.vue";

export default {
  components: {
    HomeHeader,
    HomeContent,
    HomeFooter,
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
</style>
