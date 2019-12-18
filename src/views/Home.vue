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
import NavBar from '@/components/NavBar.vue';
import Hero from "@/components/Hero.vue";
import BannerPrincipal from "@/components/BannerPrincipal.vue";
import CursosSection from "@/components/CursosSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Hero,
    BannerPrincipal,
    CursosSection,
    Footer
  }
};
</script>

<style> /*Retirei o Scoped para poder aplicar em todos os elementos da pagina*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>