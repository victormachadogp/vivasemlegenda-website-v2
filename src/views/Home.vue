<template>
  <div>
    <TheNavBar />
    <Hero />
    <BannerPrincipal />
    <CursosSection />
    <ActionCall />
    <Contact />
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import Hero from "@/components/Hero.vue";
import BannerPrincipal from "@/components/BannerPrincipal.vue";
import CursosSection from "@/components/CursosSection.vue";
import ActionCall from "@/components/ActionCall.vue";
import Contact from "@/components/Contact.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavBar,
    Hero,
    BannerPrincipal,
    CursosSection,
    ActionCall,
    Contact,
    TheFooter
  }
};
</script>

<style>
/*Retirei o Scoped para poder aplicar em todos os elementos da pagina*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>