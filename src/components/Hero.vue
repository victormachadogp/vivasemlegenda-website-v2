<template>
  <div class="hero">
    <div class="container">
      <div class="logo-container">
        <img class="logo" src="assets/logo-original.svg" />
      </div>
      <div class="content">
        <h1>A MELHOR ESCOLHA PARA AS MELHORES PESSOAS!</h1>
      </div>
    </div>
    <!-- <img class="image-cover" src="assets/path-hero.svg" /> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Hero Before Flexbox */
.hero {
  position: relative;
  /* background-color: aquamarine; */
  display: flex;
  height: 80vh;

  /* Background */
  background-image: url('/assets/path-hero.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
}
.logo-container {
  flex: 50%;
}
.content {
  flex: 50%;
}
.logo {
  width: 70vw;
  max-width: 20rem;
  animation: slideUp 1s forwards 0s ease;
}

/* .image-cover {
  width: 100%;
  z-index: -10;
} */

h1 {
  color: white;
  font-size: 3vw;
  font-weight: 100;
  animation: slideUp 1s forwards 0s ease;
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