<template>
  <div class="cursos-container">
    <h2>CURSOS</h2>
    <div class="grid-box">
      <div class="cursos-box box-1">
        <img class="image-box" src="assets/desktop-man.svg" />
        <h3>Aulas online</h3>
        <p class="box-text">
          As aulas on-line acontecem através da plataforma Zoom. O
          cadastro é simples e gratuito e nós iremos ajudá-lo a configurar sua sala de aula virtual.
        </p>
      </div>
      <div class="cursos-box box-2">
        <img class="image-box" src="assets/for-companies.svg" />
        <h3>Aulas para empresas</h3>
        <p class="box-text">
          Nosso objetivo é ajudar os colaboradores da sua empresa a obter um
          segundo idioma como parte de seu desenvolvimento profissional visando uma alta qualidade
          profissional para sua empresa.
        </p>
      </div>
      <div class="cursos-box box-3">
        <img class="image-box" src="assets/sobdemanda.svg" />
        <h3>Aulas on-demand</h3>
        <p class="box-text">
          Nesta modalidade você poderá contratar uma aula no dia e
          horário que você desejar para tratar do assunto que quiser.
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
  padding-bottom: 2rem;
  font-size: 2.3rem;
  font-weight: 500;
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
  font-weight: 500;
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.cursos-box:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.box-text {
  text-align: left;
  font-size: 1.1rem;
}

@media (max-width: 850px) {
  .grid-box {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 3rem;
  }

  .cursos-box {
    margin: 5%;
    padding: 7%;
    border-radius: 4%;
    padding-top: 7%;
    padding-bottom: 12%;
  }

  h2 {
    padding-top: 3rem;
  }
}
</style>