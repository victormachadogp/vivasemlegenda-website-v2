<template>
  <div class="cursos-container">
    <h2>CURSOS</h2>
    <div class="grid-box">
      <div class="cursos-box box-1">
        <img class="image-box" src="assets/desktop-man.svg" />
        <h3>Aulas Online</h3>
        <p class="box-text">
          As aulas on-line acontecem por
          meio da plataforma Zoom. Após o
          cadastro gratuito que o aluno fará
          com o nosso auxilio.
        </p>
      </div>
      <div class="cursos-box box-2">
        <img class="image-box" src="assets/deal.svg" />
        <h3>Aulas para Empresas</h3>
        <p class="box-text">
          As aulas on-line acontecem por
          meio da plataforma Zoom. Após o
          cadastro gratuito que o aluno fará
          com o nosso auxilio.
        </p>
      </div>
      <div class="cursos-box box-3">
        <img class="image-box" src="assets/learning.svg" />
        <h3>Outros</h3>
        <p class="box-text">
          As aulas on-line acontecem por
          meio da plataforma Zoom. Após o
          cadastro gratuito que o aluno fará
          com o nosso auxilio.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cursos-container {
  background-image: linear-gradient(to right, #0095f5, #0095f5, #50bafe);
}

h2 {
  width: 100%;
  color: white;
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: 2.3rem;
  font-weight: normal;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 3%;
}

.image-box {
  width: 80%;
  height: 24vh;
}

h3 {
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 1.5rem;
}

.cursos-box {
  background-color: white;
  margin: 10%;
  padding: 7%;
  border-radius: 4%;
  padding-top: 7%;
  padding-bottom: 10%;
}

.box-text {
  text-align: left;
  font-size: 1.1rem;
}

@media (max-width: 850px) {
  .grid-box {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 3%;
  }

  .cursos-box {
    margin: 5%;
    padding: 7%;
    border-radius: 4%;
    padding-top: 7%;
    padding-bottom: 12%;
  }

  h2 {
    padding-top: 5%;
  }
}
</style>