<template>
  <div>
    <TheNavBar always-show/>
    <!-- <div class="content">content here</div> -->
    <div class="grid">
      <h1>Cursos</h1>
      <div>
        <img class="image-top" src="assets/reading.svg" />
      </div>
    </div>
    <div class="background">
      <div class="cursos-box">
        <div class="flex">
          <h2>Aulas Online</h2>
          <p>Por meio da plataforma Zoom você pode aprender Inglês, Espanhol, Francês, Mandarim, Coreano, Árabe e Português para estrangeiros. Após o cadastro gratuito na plataforma Zoom com o nosso auxilio, é só agendar sua próxima aula e mãos à obra.</p>
          <p>Na plataforma Zoom o aluno terá acesso em áudio e vídeo ao professor no horário marcado para a sua aula, além disso o aluno terá acesso aos materiais preparados para a aula como livros, slides e áudios. Você terá uma sala de aula com a exclusividade e atenção que merece a um click de distância.</p>
        </div>
        <img class="image-box" src="assets/desktop-man.svg" />
      </div>

      <div class="cursos-box middle-box">
        <img class="image-box" src="assets/deal.svg" />
        <div class="flex">
          <h2>Aulas para Empresas</h2>
          <p>A Viva Sem Legenda tem como objetivo ajudar os colaboradores da sua empresa a obter um segundo idioma como parte do seu desenvolvimento profissional visando uma alta qualidade profissional para sua empresa. Essas aulas podem acontecer on-line ou dentro da sua própria empresa para grupos de até seis pessoas.</p>
        </div>
      </div>

      <div class="cursos-box">
        <div class="flex">
          <h2>Aulas On Demand</h2>
          <p>Quer uma aula apenas para tirar aquela dúvida sobre um assunto específico?</p>
          <p>Quer praticar para aquela apresentação profissional com o representante estrangeiro da sua empresa?</p>

          <p>Então você precisa conhecer a aula on-demand da Viva Sem Legenda. Nesse método você contrata uma aula no dia e horário que você desejar para tratar do assunto que você quiser. Estude on-demand e Viva Sem Legenda.</p>
        </div>
        <img class="image-box" src="assets/sobdemanda.svg" />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavBar,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 600px ;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // margin-top: 3%;
}

h1 {
  font-size: 4rem;
  align-self: center;
  font-weight: 600;

}

.image-top {
  width: 100%;
  position: relative;
  top: 10%;
}

.background {
    background-image: linear-gradient(to right, #0095f5, #0095f5, #50bafe);
    padding-top: 3%;
    padding-bottom: 3%;
    
}

.cursos-box {
  background-color: #fff;
  border-radius: 10px;
  margin: 3% 6%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2.5%;
  column-gap: 2rem;
}

.flex{
  display: flex;
    flex-direction: column;
    justify-content: center;
}

.image-box {
  width: 100%;
  align-self: center;
  justify-self: center;
}

.middle-box {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

h2 {
  text-align: left;
  padding: 1%;
}

p {
  text-align: left;
  padding: 1%;
}

@media (max-width: 950px) {

  .cursos-box {
  grid-template-columns: 100%;
  padding: 2.5%;
}

.image-box {
  width: 40%;
  align-self: center;
  justify-self: center;
  margin: 4%;
}
 
}
</style>