<template>
  <div id="contato" class="background">
    <h2>CONTATO</h2>
    <div class="grid-box">
      <div>
        <form ref="contactForm" class="contact-form">
          <input class="input-area" type="text" name="name" placeholder="Nome" />
          <input class="input-area" type="email" name="email" placeholder="Email" />
          <textarea
            name="message"
            class="input-area grow"
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </form>
      </div>
      <div class="image-input">
        <img class="contact-image" src="assets/contact-us.svg" />
      </div>
    </div>
    <BaseButton @click="sendForm()">ENVIAR</BaseButton>
    <p v-if="responseMsg" class="response">{{this.responseMsg}}</p>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseButton
  },
  data() {
    return {
      responseMsg: null
    };
  },
  methods: {
    sendForm() {
      const action = "https://formspree.io/xpzqqakq";

      const form = this.$refs.contactForm;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.responseMsg = "Mensagem enviada com sucesso!";
        } else {
          this.responseMsg = "Ocorreu um erro no envio de sua mensagem.";
        }
      };
      xhr.send(data);
    }
  }
};
</script>

<style scoped>
.background {
  padding: 3rem;
}

h2 {
  padding-bottom: 3.5rem;
  font-size: 2.3rem;
  font-weight: 500;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-image {
  width: 90%;
}

.input-area {
  padding: 1.5%;
  margin: 2%;
  border-radius: 10px;
  border: 2px solid rgb(194, 194, 194);
  font-size: 1em;
}

.grow {
  padding-bottom: 80px;
}

.button {
  margin: 2%;
  padding: 1.2%;
  padding-left: 2%;
  padding-right: 2%;
  background-color: #0095f5;
  color: white;
  border-radius: 5px;
  border: 2px solid #0095f5;
}

.response {
  margin: 1rem;
  font-size: 1.1em;
}

@media (max-width: 800px) {
  .grid-box {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }

  .contact-image {
    display: none;
  }
}
</style>