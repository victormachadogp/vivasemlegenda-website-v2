<template>
    <div>
        <nav>
            <div class="box">
                <img class="nav-logo" src="assets/logo-light.svg">
            </div>
            <div class="box-2">
                <div class="nav-link">
                    <a>HOME</a>
                </div>
                <div class="nav-link">
                    <a>CURSOS</a>
                </div>
                <div class="nav-link">
                    <a>MATRÍCULA</a>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav {
    background-color: #0095F5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-2 {
    display: flex;
    color: white;
    margin: 1.5%;

}

.nav-link {
    padding: 3%;
}

.nav-logo {
    width: 63%;
    margin: 3%;
}


</style>