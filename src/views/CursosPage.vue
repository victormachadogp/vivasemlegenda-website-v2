<template>
  <div>
    <TheNavBar />
    <div class="content">content here</div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavBar,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 600px ;
}
</style>