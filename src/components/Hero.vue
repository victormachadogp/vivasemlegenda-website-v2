<template>
  <div class="hero">
    <img id="logo" src="assets/logo-original.svg" />
    <img id="cloud-circles" src="assets/hero-cloud-circles.svg" />
    <div id="circle-sky"></div>
    <div class="container">
      <div class="content">
        <h1>A MELHOR ESCOLHA PARA</h1>
        <h1>AS MELHORES PESSOAS!</h1>
        <p class="hero-summary">
          Professores particulares, aulas online ou para empresas e
          <span class="highlight">
            7 idiomas
            diferentes!
          </span>
        </p>
        <BaseButton>Agende uma aula experiemental</BaseButton>
      </div>
      <div class="logo-container">
        <div id="circle-sun" class="grow"></div>
        <img id="main-art" src="assets/reading.svg" />
      </div>
      <div id="circle-left"></div>
    </div>
    <!-- <img class="image-cover" src="assets/path-hero.svg" /> -->
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseButton
  }
};
</script>

<style scoped>
/* Hero Before Flexbox */
.hero {
  position: relative;
  /* background-color: aquamarine; */
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  padding: 0 5rem;
  margin-top: 5rem;
}
#logo {
  position: absolute;
  max-width: 225px;
  margin: 1.5rem;
}
.logo-container {
  flex: 50%;
  position: relative;
}
.content {
  flex: 50%;
  text-align: left;
  align-self: center;
  animation: slideUp 1s forwards 0s ease;
}
.hero-summary {
  margin: 2rem 0;
}
#main-art {
  width: 70vw;
  max-width: 35rem;
  animation: slideUp 1s forwards 0s ease;
}
#circle-sky {
  content: "";
  width: 70vh;
  height: 70vh;
  background: #0095f5;
  border-radius: 50%;
  background-image: linear-gradient(to right, #0095f5, #50bafe);

  position: absolute;
  right: -8rem;
  top: -10rem;
  z-index: -10;
}

#circle-left {
  position: absolute;
  content: "";
  width: 35vh;
  height: 35vh;
  background-image: linear-gradient(to right, #0095f5, #50bafe);
  border-radius: 50%;
  left: -25vh;
  bottom: 0;
  opacity: 0.9;
  z-index: -10;
}
#cloud-circles {
  position: absolute;
  left: 8rem;
  top: 4rem;
  max-width: 60vh;
}
#circle-sun {
  content: "";
  width: 100px;
  height: 100px;
  background: #fbb03b;
  border-radius: 50%;

  position: absolute;
  top: -130px;
  left: 80px;
}

.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.1);
}

.highlight {
  background-color: #fbb03b;
  color: white;
  padding: 0.25rem;
}
/* .image-cover {
  width: 100%;
  z-index: -10;
} */

h1 {
  color: #707070;
  font-size: 3vw;
  font-weight: 100;
}

@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: rotate(xx) translateY(0);
  }
}
</style>
