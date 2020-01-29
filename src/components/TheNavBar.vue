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

    <div class="nav-mobile">
      <span class="open-slide">
        <div v-on:click="openSlideMenu()">
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
            <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
            <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
          </svg>
        </div>
      </span>
    </div>

    <!-- New Code -->
    <div id="side-menu" class="side-nav">
      <div class="btn-close" v-on:click="closeSlideMenu()">&times;</div>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link to="/matricula">Matrícula</router-link>
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
  beforeMount () {
    if (this.alwaysShow) this.showNavBar = true;
  },
  data() {
    return {
      showNavBar: false
    };
  },
  methods: {
    openSlideMenu() {
      document.getElementById("side-menu").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },

    closeSlideMenu() {
      document.getElementById("side-menu").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },

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
  cursor: pointer;
}

@media (min-width: 600px) {
  .nav-mobile {
    display: none;
  }

  .side-nav {
    display: none;
  }
}

@media (max-width: 600px) {
  .box-2 {
    display: none;
  }

  .nav-mobile {
    margin: 10px;
    margin-top: 20px;
  }

  nav {
    width: 100%;
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    /* position: fixed; */
    z-index: 10;
    min-height: 3rem;
  }

  .navbar {
    overflow: hidden;
    height: 63px;
  }

  .navbar a {
    /* float:left; */
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .navbar ul {
    margin: 8px 0 0 0;
    list-style: none;
  }

  .navbar a:hover {
    background-color: #ddd;
    color: #000;
  }

  /* New Code */

  .side-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-image: linear-gradient(to bottom, #0095f5, #0095f5, #50bafe);
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }

  .side-nav a {
    padding: 10px 10px 10px 30px;
    text-decoration: none;
    font-size: 22px;
    color: white;
    display: block;
    transition: 0.3s;
  }

  .side-nav a:hover {
    color: #0095f5;
    background-color: white;
    transition-duration: 0.5s;
  }

  .side-nav .btn-close {
    position: absolute;
    top: 0;
    right: 22px;
    font-size: 36px;
    margin-left: 50px;
  }

  .btn-close {
    color: white;
    cursor: pointer;
  }
}
</style>
