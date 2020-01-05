<template>
  <div class="hero">
    <img id="logo" src="assets/logo-original.svg" />
    <img id="cloud-circles" src="assets/hero-cloud-circles.svg" />
    <div id="circle-sky"></div>
    <div class="container">
      <div class="logo-container">
        <div id="circle-sun" class="grow"></div>
        <img id="main-art" src="assets/reading.svg" />
      </div>
      <div class="content">
        <h1>A MELHOR ESCOLHA PARA AS MELHORES PESSOAS!</h1>
        <p class="hero-summary">
          Professores particulares, aulas online ou para empresas e
          <span class="highlight">
            7 idiomas
            diferentes!
          </span>
        </p>
        <BaseButton>Agende uma aula experimental</BaseButton>
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

  align-self: center;
  margin: 5rem 5vw 0 5vw;
}
#logo {
  position: absolute;
  width: 25vw;
  max-width: 220px;
  margin: 1.5rem;
}
.logo-container {
  flex: 50%;
  position: relative;
}
.content {
  padding-left: 7.5vw;
  flex: 50%;
  text-align: left;
  align-self: center;
  animation: slideUp 1s forwards 0s ease;
}

.hero-summary {
  max-width: 31rem;
  margin: 1.2rem 0;
  line-height: 1.5rem;
  font-size: 1.2rem;
}
#main-art {
  width: 80%;
  max-width: 35rem;
  animation: slideUp 1s forwards 0s ease;
}
#circle-sky {
  content: "";
  width: 50vw;
  height: 50vw;
  max-width: 550px;
  max-height: 550px;
  background: #0095f5;
  border-radius: 50%;
  background-image: linear-gradient(to right, #0095f5, #50bafe);

  position: absolute;
  right: -8rem;
  top: -16rem;
  z-index: -10;
  /* animation: infinite-grow 3s infinite 0s ease-in-out; */
}

#circle-left {
  position: absolute;
  content: "";
  width: 27vw;
  height: 27vw;
  max-width: 17rem;
  max-height: 17rem;
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
  right: 80px;

  animation: infinite-translate-y 3s infinite 0s ease-in-out;
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
  padding: 2px 0.35rem;
}
/* .image-cover {
  width: 100%;
  z-index: -10;
} */

h1 {
  color: #707070;
  font-weight: 100;
  max-width: 28rem;
}

@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes infinite-grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes infinite-translate-y {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(0) translateY(06px);
  }
  100% {
    transform: rotate(0);
  }
}

@media only screen and (min-width: 768px) {
  /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
  /* phones */
  .container {
    flex-wrap: wrap;
  }
  #circle-sun {
    top: 0;
    right: 0;
    left: auto;
  }
}

@media only screen and (min-width: 768px) {
  /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
  /* phones */
  .container {
    flex-wrap: wrap;
  }
}
</style>
