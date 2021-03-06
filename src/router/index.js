import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CursosPage from '@/views/CursosPage.vue';
import MatriculaPage from '@/views/MatriculaPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosPage
  },
  {
    path: "/matricula",
    name: "matricula",
    component: MatriculaPage
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) return {
      selector: to.hash
    }
    else {
      // Scrolls to top
      return { x: 0, y: 0 }
    }
  }

});

export default router;
