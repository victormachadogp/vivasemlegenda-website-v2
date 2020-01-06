<template>
  <div class="cursos-container">
    <h2>DEPOIMENTOS</h2>
    <div class="grid-box">
      <div class="cursos-box box-1">
        <p class="box-text">
          <span class="quotes">“</span>Os professores da Viva Sem Legenda são muito dedicados e atenciosos, tem paixão por ensinar e isso torna meu aprendizado mais leve e divertido."
        </p>
        <!-- <p class="customer-name">Victor Machado</p> -->
      </div>
      <div class="cursos-box box-2">
        <p
          class="box-text"
        >"Estudar Árabe na Viva Sem Legenda tem me ajudado a alcançar meus objetivos. Eu imaginava que Árabe era muito mais difícil mas o método Viva Sem Legenda deixou tudo mais fácil."</p>
        <!-- <p class="customer-name">Aluno de Árabe</p> -->
      </div>
      <div class="cursos-box box-3">
        <p
          class="box-text"
        >"Eu não imaginava que ia conseguir falar Inglês tão bem e em tão pouco tempo. Meu problema era falta de tempo mas estudar Inglês on-line com a Viva Sem Legenda resolveu tudo pra mim."</p>
        <!-- <p class="customer-name">Victor Machado</p> -->
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
.customer-name {
  margin-top: 1rem;
  font-style: italic;
  text-align: right;
}
.customer-name::before {
  content: "– ";
}
.quotes {
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
  padding-bottom: 7%;
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