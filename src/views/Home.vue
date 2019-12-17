<template>
  <div>
    <NavBar />
    <Hero />
    <BannerPrincipal />
    <CursosSection />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import BannerPrincipal from "@/components/BannerPrincipal.vue";
import CursosSection from '@/components/CursosSection.vue';

export default {
  components: {
    Hero,
    BannerPrincipal,
    CursosSection
  }
};
</script>

<style scoped>
</style>