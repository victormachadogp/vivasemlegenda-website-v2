<template>
  <nav v-show="showNavBar">
    <div class="box">
      <router-link tag="img" to="/" class="nav-logo" src="assets/logo-light.svg" />
    </div>
    <div class="box-2">
      <div class="nav-link">
        <router-link to="/">HOME</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/cursos">CURSOS</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/matricula">MATRÍCULA</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    alwaysShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showNavBar: false
    };
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 350 || this.alwaysShow) this.showNavBar = true;
      else this.showNavBar = false;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
nav {
  background-image: linear-gradient(to right, #0095f5, #0095f5, #50bafe);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  min-height: 3rem;
}

.box-2 {
  display: flex;
}

.nav-link {
  padding: 0 1rem;
  color: white !important;
  text-decoration: none;
}
.nav-link:hover {
}
.nav-link > a {
  font-size: 0.95em;
  font-weight: 500;
  color: white !important;
  text-decoration: none;
}

.nav-logo {
  width: 50%;
  margin: 3%;
}
</style>
