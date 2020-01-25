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

    <div class="container-float">
      <a class="button-float" href="https://api.whatsapp.com/send?phone=5513997928404"> <svg id="whatsapp-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>
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

.button-float {
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  color: white;
  font-size: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  position: fixed; 
  right: 20px;
  bottom: 20px;
}

#whatsapp-logo {
  fill: #4FCE5D;
  width: 32px;
  height: 32px  ;
}

@media only screen and (max-width: 767px) {
  .banner-art {
    display: none;
  }
}
</style>