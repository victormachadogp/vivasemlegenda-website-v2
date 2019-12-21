<template>
    <div class="cursos-container">
        <h2>CURSOS</h2>
        <div class="grid-box">
            <div class="cursos-box box-1">
                <img class="image-box" src="assets/desktop-man.svg">
                <h3>Aulas Online</h3>
                <p>As aulas on-line acontecem por
                meio da plataforma Zoom. Após o
                cadastro gratuito que o aluno fará
                com o nosso auxilio.
                </p>
        </div>
            <div class="cursos-box box-2">
                <img class="image-box" src="assets/deal.svg">
                <h3>Aulas para Empresas</h3>
                <p>As aulas on-line acontecem por
                meio da plataforma Zoom. Após o
                cadastro gratuito que o aluno fará
                com o nosso auxilio.
                </p>
        </div>
            <div class="cursos-box box-3">
                <img class="image-box" src="assets/man-computer.svg">
                <h3>Outros</h3>
                <p>As aulas on-line acontecem por
                meio da plataforma Zoom. Após o
                cadastro gratuito que o aluno fará
                com o nosso auxilio.
                </p>
        </div>

    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.cursos-container {
    background-color: #0095F5;
}

h2 {
    width: 100%;
}

.grid-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.image-box {
    width: 50%;
}

.cursos-box {
    background-color: white;
    margin: 10%;
    padding: 7%;
    border-radius: 7%;
    padding-top: 15%;
    padding-bottom: 15%;
}


</style>