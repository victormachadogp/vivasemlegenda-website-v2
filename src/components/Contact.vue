<template>
    <div class="background">
        <h2>CONTATO</h2>
        <div class="grid-box">
            <div>
                <form class="input-section">
                    <input class="input-area" type="text" placeholder="Nome">
                    <input class="input-area" type="text" placeholder="Email">
                    <input class="input-area grow" type="text" placeholder="Digite sua mensagem aqui...">
                </form>
            </div>
            <div class="image-input">
                <img class="contact-image" src="assets/contact-us.svg">
            </div>
        </div>
        <button class="button">ENVIAR</button>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.background {
    background-color: lightgray;
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
    background-color: #0095F5;
    color: white;
    border-radius: 5px;
    border: 2px solid #0095F5;

}

</style>