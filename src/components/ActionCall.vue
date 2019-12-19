<template>
    <div class="grid-container">
        <div class="text">
            <h4>COMECE HOJE!</h4> 
            <p>De acordo com site de empregos Catho, apenas 5%
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
}

.desk-man {
    width: 100%;
}

</style>