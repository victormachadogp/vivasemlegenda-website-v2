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
  

<div class="container-form">
  <div class="inside-form">

<form class="form form-grid gform" method="POST" action="https://script.google.com/macros/s/AKfycbyWCSvvDraBDa2gM4vwy7cnh3ariXXSSGwgbD3tw9mD3cxetecN/exec">

    <!-- <div> -->
      <div class="form-row">
        <div class="form-group col-md-6">
            <label for="name">Nome</label>
            <input id="name" name="name" type="text" class="form-control" placeholder="Nome">
        </div>
        <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" class="form-control" placeholder="Email">
        </div>
    </div>

    <div class="form-group">
        <label for="inputAddress">Endereço</label>
        <input id="endereco" name="endereco" type="text" class="form-control" placeholder="1234 Rua das Flores">
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
          <label for="inputPassword4">RG</label>
          <input id="rg" name="rg" type="number" class="form-control" placeholder="000000000">
      </div>
      <div class="form-group col-md-6">
          <label for="inputEmail4">CPF</label>
          <input id="cpf" name="cpf" type="number" class="form-control" placeholder="00000000000">
      </div>
  </div>

  <div class="form-row">
      <div class="form-group col-md-6">
          <label for="inputPassword4">Telefone Fixo</label>
          <input id="telfix" name="telfix" type="number" class="form-control" placeholder="(00)0000-0000">
      </div>
      <div class="form-group col-md-6">
          <label for="inputEmail4">Celular</label>
          <input id="telcel" name="telcel" type="number" class="form-control" placeholder="(00)00000-0000">
      </div>
  </div>

   <div class="form-row" id="cloneForm">
      <div class="form-group col-md-6" >
              <label for="inputState">Selecione o dia das aulas:</label>
              <select name="dia" class="form-control">
              <option selected>Segunda-Feira</option>
              <option selected>Terça-Feira</option>
              <option selected>Quarta-Feira</option>
              <option selected>Quinta-Feira</option>
              <option selected>Sexta-Feira</option>
              <option selected>Escolher...</option>
              </select>
          </div>			 
          <div class="form-group col-md-6" >
              <label for="inputState">Selecione o Período das aulas:</label>
              <select name="dia" class="form-control">
              <option selected>Manhã</option>
              <option selected>Tarde</option>
              <option selected>Noite</option>
              <option selected>Escolher...</option>
              </select>
          </div>			 
  </div>			 
   <!-- Form 2 -->
<div class="form-row" >
  <div class="form-group col-md-6">
          <label for="inputState">Selecione o dia das aulas:</label>
          <select name="dia" class="form-control">
          <option selected>Segunda-Feira</option>
          <option selected>Terça-Feira</option>
          <option selected>Quarta-Feira</option>
          <option selected>Quinta-Feira</option>
          <option selected>Sexta-Feira</option>
          <option selected>Escolher...</option>
          </select>
      </div>			 
      <div class="form-group col-md-6">
          <label for="inputState">Selecione o Período das aulas:</label>
          <select name="dia" class="form-control">
          <option selected>Manhâ</option>
          <option selected>Tarde</option>
          <option selected>Noite</option>
          <option selected>Escolher...</option>
          </select>
      </div>			
</div>
<p class="morethen" id="clickHere">Adicione mais de 2 aulas por semana</p>

<!-- Field Against Bots -->
<fieldset class="pure-group honeypot-field">
    <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
    <input id="honeypot" type="text" name="honeypot" value="" />
  </fieldset>


<button type="submit" class="button-success pure-button button-xlarge btn btn-primary btn-lg">&nbsp;Enviar</button>

<!-- Thank You Message -->
<div class="thankyou_message" style="display:none;">
    <h2>Obrigado por nos contatar!
      Vamos analisar o seu pedido e responder o mais rapido possivel.</h2>
</div>


     

</form>
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
  height: 600px;
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

.label {
  font-size: 1.1rem;
}

// New Code
.form-grid {
	background-color: white;
	margin: 5%;
	padding: 5%;
	border-radius: 20px;
}

.form-radios {
	margin: 2%;
	padding-left: 10% !important;
}

/* Form Code */

.morethen {

	color: rgb(74, 74, 218);
	cursor: pointer;
}

.honeypot-field {
	display: none;
  }

.container-form {
  background-image: linear-gradient(to right, #0095f5, #0095f5, #50bafe);
  padding-top: 5%;
  padding-bottom: 5%;
  margin-bottom: 2%;
  }

.form-group {
  text-align: left;
  }

.morethen {
  text-align: left;
}

@media (max-width: 600px) {

  .grid {
  grid-template-columns: 1fr;
  justify-items: center;
}

  h1 {
    margin: 5%;
    text-align: center !important;

  }

  .image-top {
    display: none;
  }
}

</style>