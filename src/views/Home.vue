<template>
  <div>
    <NavBar />
    <Hero />
    <BannerPrincipal />
    <CursosSection />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import BannerPrincipal from "@/components/BannerPrincipal.vue";
import CursosSection from "@/components/CursosSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Hero,
    BannerPrincipal,
    CursosSection,
    Footer
  }
};
</script>

<style scoped>
</style>