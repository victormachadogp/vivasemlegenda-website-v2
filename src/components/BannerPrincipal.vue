<template>
  <div class="main-banner">
    <div class="banner-content">
      <div class="content-wrapper">
        <p
          class="content-text"
        >Quer entender por que a Viva Sem Legenda é a melhor escolha para as melhores pessoas?</p>
        <p class="content-text">Agende sua aula experimental e comece a viver sem legenda já!</p>
      </div>
      <div class="languages">
        <div v-for="(item, index) in flags" :key="index" class="us flag-container">
          <img class="country-flag" :src="item.icon" />
          <p class="country-title">{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="banner-art">
      <img class="banner-image" src="assets/begin_chat.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: [
        { icon: "assets/us-flag.svg", title: "Inglês" },
        { icon: "assets/fr-flag.svg", title: "Francês" },
        { icon: "assets/sp-flag.svg", title: "Espanhol" },
        { icon: "assets/sk-flag.svg", title: "Coreano" },
        { icon: "assets/ch-flag.svg", title: "Chinês" },
        { icon: "assets/sa-flag.svg", title: "Árabe" },
        { icon: "assets/br-flag.svg", title: "Português" }
      ]
    };
  }
};
</script>

<style scoped>
.main-banner {
  display: flex;
  margin: 1rem;
  margin-bottom: 0;
}
.languages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}
.banner-content {
  flex: 75%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
.content-wrapper{
  align-self: center;
}
.content-text {
  font-size: 1.2rem;
  text-align: left;
}
.banner-art {
  flex: 25%;
  position: relative;
  height: 300px;
}

.banner-image {
  position: absolute;
  top: -4rem;
  height: 115%;
  /* Center img  */
  left: 0;
  margin-left: auto;
  margin-right: auto;
  right: 0;
}

.country-flag {
  width: 70px;
}

.flags {
  padding-left: 2%;
  margin: 2%;
  justify-content: center;
}

.flag-container {
  padding-left: 3%;
  padding-right: 3%;
}

.country-title {
  font-size: 1.1em;
  padding-top: 10%;
}

@media only screen and (max-width: 767px) {
  .banner-art {
    display: none;
  }
}
</style>