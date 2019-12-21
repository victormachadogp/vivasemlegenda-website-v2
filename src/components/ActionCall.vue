<template>
    <div class="grid-container">
        <div class="text">
            <h4>COMECE HOJE!</h4> 
            <p class="paragraph">De acordo com site de empregos Catho, apenas 5%
            da população brasileira fala uma segunda língua e
            menos de 3% têm fluência em inglês. Isso significa
            começar com vantagem quando se trata do mercado </p>
        </div>

        <div>
            <img class="desk-man" src="assets/desktop-man.svg">
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