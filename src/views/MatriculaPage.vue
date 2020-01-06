<template>
  <div>
    <TheNavBar />
    <!-- <div class="content">content here</div> -->

    <div class="grid">
      <h1>Matrícula</h1>
      <div>
        <img class="image-top" src="assets/chat.svg" />
      </div>
    </div>


<form>

    <!-- <div> -->
      <div class="background">
      <div class="container-form">
      <div class="form-row">
        <div class="form-group">
            <label for="inputPassword4">Nome</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Nome">
        </div>
        <div class="form-group">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>

        <div class="form-group-2">
          <label for="inputAddress">Endereço</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Rua das Flores">
        </div> 
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
          <label for="inputPassword4">RG</label>
          <input type="number" class="form-control" id="inputPassword4" placeholder="000000000">
      </div>
      <div class="form-group col-md-6">
          <label for="inputEmail4">CPF</label>
          <input type="number" class="form-control" id="inputEmail4" placeholder="00000000000">
      </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputPassword4">Telefone Fixo</label>
            <input type="number" class="form-control" id="inputPassword4" placeholder="(00)0000-0000">
        </div>
        <div class="form-group col-md-6">
            <label for="inputEmail4">Celular</label>
            <input type="number" class="form-control" id="inputEmail4" placeholder="(00)00000-0000">
        </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-12">
        <label for="inputState">Selecione a língua desejada</label>
        <select id="inputState" class="form-control">
        <option selected>Inglês</option>
        <option selected>Espanhol</option>
        <option selected>Francês</option>
        <option selected>Coreano</option>
        <option selected>Chinês</option>
        <option selected>Árabe</option>
        <option selected>Português (Para Estrangeiros)</option>
        <option selected>Escolher...</option>
        </select>
      </div>			 
      </div>

      <div class="form-row">
    <div class="form-group col-md-6">
            <label for="inputState">Selecione o dia das aulas:</label>
            <select id="inputState" class="form-control">
            <option selected>Segunda-Feira</option>
            <option selected>Terça-Feira</option>
            <option selected>Quarta-Feira</option>
            <option selected>Quinta-Feira</option>
            <option selected>Sexta-Feira</option>
            <option selected>Escolher...</option>
            </select>
        </div>			 
<div class="form-group col-md-6 text-center">
    <label for="inputState">Selecione o período das aulas:</label>
    <div class="form-radios"></div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Manhã</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label" for="inlineCheckbox2">Tarde</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
            <label class="form-check-label" for="inlineCheckbox3">Noite</label>
        </div>
    </div>
</div>			

<button type="submit" class="btn btn-primary btn-lg">Enviar</button>
</div>
</div>

</form>


    
    
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
  height: 600px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
    justify-items: start;

}

.form-group-2 {
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 2%;
}

.form-group {
  margin: 2%;
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
  padding: 5%;
}

.container-form {
  margin: 3%;
  background-color: #fff;
}

.label {
  font-size: 1.1rem;
}
</style>