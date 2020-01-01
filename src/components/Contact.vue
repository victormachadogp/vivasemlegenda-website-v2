<template>
  <div class="background">
    <h2>CONTATO</h2>
    <div class="grid-box">
      <div>
        <form class="input-section">
          <input class="input-area" type="text" placeholder="Nome" />
          <input class="input-area" type="text" placeholder="Email" />
          <textarea class="input-area grow">
                        Digite sua mensagem aqui...
                    </textarea>
        </form>
      </div>
      <div class="image-input">
        <img class="contact-image" src="assets/contact-us.svg" />
      </div>
    </div>
    <BaseButton>ENVIAR</BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseButton
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
  font-weight: normal;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.input-section {
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