<template>
  <div class="section-grid">
    <p>Quer entender por que a Viva Sem Legenda é a melhor escolha para as melhores pessoas? Agende sua aula experimental e comece a viver sem legenda já!</p>
  <div class="flags">
    <p>Flags
    </p>

  </div>

  <div class="image-container">
    <img class="banner-image" src="assets/begin_chat.svg">
  </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20%;
}

.image-container {
  grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
}

.banner-image {
  width: 35%;
}

</style>