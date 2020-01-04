<template>
  <div class="section-grid">
      <p class="subtitle">Quer entender por que a Viva Sem Legenda é a melhor escolha para as melhores pessoas? Agende sua aula experimental e comece a viver sem legenda já!</p>
  <div class="flags">
    <div class="us flag-container">
      <img class="country-flag" src="assets/us-flag.svg">
      <p class="country-title">Inglês</p>
    </div>

    <div class="fr flag-container">
      <img class="country-flag" src="assets/fr-flag.svg">
      <p class="country-title">Francês</p>
    </div>

    <div class="sp flag-container">
      <img class="country-flag" src="assets/sp-flag.svg">
      <p class="country-title">Espanhol</p>
    </div>

    <div class="sk flag-container">
      <img class="country-flag" src="assets/sk-flag.svg">
      <p class="country-title">Coreano</p>
    </div>

    <div class="ch flag-container">
      <img class="country-flag" src="assets/ch-flag.svg">
      <p class="country-title">Chinês</p>
    </div>

    <div class="sa flag-container">
      <img class="country-flag" src="assets/sa-flag.svg">
      <p class="country-title">Árabe</p>
    </div>

    <div class="br flag-container">
      <img class="country-flag" src="assets/br-flag.svg">
      <p class="country-title">Português</p>
    </div>

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
  width: 100%;
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

.country-flag {
  width: 70px;
}

.flags {
  display: flex;
  flex-wrap: wrap;
  padding-left: 2%;
  margin: 2%;
  justify-content: center;
}

.flag-container {
  padding-left: 3%;
  padding-right: 3%;
}

.subtitle {
  font-size: 1.2rem;
  padding-left: 3%;
}

.country-title {
  font-size: 1.1em;
  padding-top: 10%;
}

@media (max-width: 900px) {

  .section-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
}

.subtitle {
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 5%;
}

.flags {
  margin-bottom: 5%;

}

.flag-container {
  padding: 2%;
}

.image-container {
    display: none;

  }


}
</style>