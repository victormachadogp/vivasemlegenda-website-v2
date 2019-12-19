<template>
  <div class="hero">
    <section class="container">
      <img class="image-cover" src="assets/path-hero.svg" />
      <div class="grid">
        <img class="logo" src="assets/logo-original.svg" />
        <h1>A MELHOR ESCOLHA PARA AS MELHORES PESSOAS!</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .hero{
    background: rosybrown;
    width: 100%;
    height: 300px;
} */

.container {
  width: 100%;
  position: relative;
  text-align: center;
}

.image-cover {
  width: 100%;
  pointer-events: none;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 100;
  width: 100%;
}
h1 {
  align-self: center;
  justify-self: center;
  width: 70%;
  color: white;
  font-size: 3vw;
  font-weight: 100;
  animation: slideUp 1s forwards 0s ease;
}

.logo {
  width: 60%;
  align-self: center;
  justify-self: center;
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