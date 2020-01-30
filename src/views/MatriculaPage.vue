<template>
  <div>
    <TheNavBar always-show />
    <div class="grid">
      <h1>Matrícula</h1>
      <div>
        <img class="image-top" src="assets/chat.svg" />
      </div>
    </div>

    <div class="container-form">
      <div class="inside-form">
        <form
          ref="MatriculaForm"
          @submit.prevent="submitForm()"
          class="form form-grid gform"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbyWCSvvDraBDa2gM4vwy7cnh3ariXXSSGwgbD3tw9mD3cxetecN/exec"
        >
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="name">Nome</label>
              <input id="name" name="name" type="text" class="form-control" placeholder="Nome" required />
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" class="form-control" placeholder="Email" required />
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input
              id="endereco"
              name="endereco"
              type="text"
              class="form-control"
              placeholder="Rua das Flores, 123..."
              required
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPassword4">RG</label>
              <input id="rg" name="rg" type="number" class="form-control" placeholder="000000000" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">CPF</label>
              <input
                id="cpf"
                name="cpf"
                type="number"
                class="form-control"
                placeholder="00000000000"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPassword4">Telefone Fixo</label>
              <input
                id="telfix"
                name="telfix"
                type="number"
                class="form-control"
                placeholder="(00)0000-0000"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Celular</label>
              <input
                id="telcel"
                name="telcel"
                type="number"
                class="form-control"
                placeholder="(00)00000-0000"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="class-classes col-md-12">
              <span>Idioma</span>
              <span></span>
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Selecione o idioma:</label>
              <select name="idioma" class="form-control" required>
                <option>Inglês</option>
                <option>Francês</option>
                <option>Espanhol</option>
                <option>Árabe</option>
                <option>Coreano</option>
                <option>Português (estrangeiros)</option>
                <option selected disabled value="">Escolher...</option>
              </select>
            </div>
          </div>
          <!-- Form 2 -->
          <div v-for="(item,index) in classes" :key="index" class="form-row">
            <div class="class-classes col-md-12">
              <span>Aula {{index+1}}</span>
              <span v-if="index > 1" @click="removeClass(index)" class="morethen remove">[x] Remover</span>
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">
                Selecione o
                <strong>Dia</strong> da aula:
              </label>
              <select :name="'dia-'+ (index+1)" class="form-control" required>
                <option>Segunda-Feira</option>
                <option>Terça-Feira</option>
                <option>Quarta-Feira</option>
                <option>Quinta-Feira</option>
                <option>Sexta-Feira</option>
                <option selected disabled value="">Escolher...</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">
                Selecione o
                <strong>Período</strong> da aula:
              </label>
              <select name="dia" class="form-control" required>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
                <option selected disabled value="">Escolher...</option>
              </select>
            </div>
          </div>
          <p @click="addMoreClasses()" class="morethen">+ Adicionar mais uma aula</p>
      <BaseButton v-show="!loader" type="submit">ENVIAR</BaseButton>
          <div class="loader-wrapper col-md-12">
            <div v-if="loader" class="loader"></div>
          </div>

          <div
            class="thankyou_message"
            v-if="response"
            v-html="response.text"
            :class="{'error':response.status != 200 }"
          ></div>
        </form>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    TheNavBar,
    TheFooter,
    BaseButton
  },
  data() {
    return {
      classes: [0, 1],
      response: null,
      loader: false
    };
  },
  methods: {
    submitForm() {
      this.response = null;
      const form = this.$refs.MatriculaForm;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        let response = {};
        if (xhr.status === 200) {
          form.reset();
          response.text = "Formulário enviado com sucesso!";
          response.status = 200;
        } else {
          response.text =
            "Erro no envio do formulário. Favor entrar em contato por telefone ou e-mail.";
          response.status = xhr.status;
        }
        this.response = response;
        this.loader = false;
      };
      this.loader = true;
      xhr.send(data);
    },
    addMoreClasses() {
      if (this.classes.length < 5) {
        this.classes.push({});
      } else {
        alert("Você atingiu o número máximo de aulas por semana.");
      }
    },
    removeClass(index) {
      this.classes.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 3rem;
}

h1 {
  font-size: 4rem;
  align-self: center;
  font-weight: 400;
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
.remove {
  font-weight: normal;
}

.honeypot-field {
  display: none;
}

.container-form {
  background-image: linear-gradient(to right, #0095f5, #0095f5, #50bafe);
  padding-top: 5%;
  padding-bottom: 5%;
}

.form-group {
  text-align: left;
}

.class-classes {
  text-align: left;
  background-color: #faf7f7;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  font-weight: bold;
}

.morethen {
  text-align: left;
}

.thankyou_message {
  margin: 1rem;
  color: rgb(4, 168, 4);
  font-size: 1.5em;
}
.error {
  color: rgb(240, 20, 20);
}

.loader {
  margin: auto;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 15%;
  }

  h1 {
    margin: 5%;
    text-align: center !important;
  }

  .image-top {
    display: none;
  }

  .form {
    margin-top: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>
