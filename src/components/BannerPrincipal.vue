<template>
  <div class="main-banner">
    <div class="banner-content">
      <div class="content-wrapper">
        <p
          class="content-text"
        >Com a Viva Sem Legenda você pode aprender até 7 idiomas onde quer que esteja, seja em casa ou no horário de almoço do seu trabalho, você vai aprender o idioma que desejar com conforto e dedicação total do seu professor.</p>
        <!-- <p class="content-text"></p> -->
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
  margin: 2rem;
}
.languages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  align-content: space-between;
}
.banner-content {
  flex: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
.content-wrapper {
  align-self: center;
}
.content-text {
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 0;
}
.banner-art {
  flex: 20%;
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
  margin-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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