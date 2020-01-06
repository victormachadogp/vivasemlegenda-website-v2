<template>
    <div class="grid-container">
        <div class="text">
            <h4>COMECE HOJE!</h4> 
            <p class="paragraph">Nosso objetivo é que você consiga se comunicar em todos os contextos, com isso em mente, nossas aulas são preparadas com situações reais do dia a dia para que você não trave na hora de comunicar no mundo a fora. </p>
        </div>

        <div>
            <img class="desk-man" src="assets/around_the_world.svg">
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.text {
    justify-self: center;
    align-self: center;
    text-align: left;
    margin-left: 3rem; 
    padding-right: 9%;
}

h4 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-bottom: 2%;
}
.desk-man {
    width: 100%;
    margin-top: 10%;
    margin-bottom: 10%;
}

.paragraph {
    font-size: 1.3em;

}

@media (max-width: 800px) {

    .grid-container{
        display: grid;
        grid-template-columns: 1fr;
    }

    .desk-man {
    width: 70%;
}

.text {
    text-align: center;
    margin-left: 0px;
    margin: 1%;
    padding-right: 0px;
}

h4 {
    margin-top: 5%;
    margin-bottom: 3%;
}

.paragraph {
    margin-left: 5%;
    margin-right: 5%;
    text-align: justify;
}



}


</style>