<template>
  <div class="footer">
    <div class="site-tree">
      <router-link tag="span" to="/" class="site-tree-element">Página Inicial</router-link>
      <router-link tag="span" to="/cursos" class="site-tree-element">Cursos</router-link>
      <router-link tag="span" to="/matricula" class="site-tree-element">Matrícula</router-link>
    </div>
    <div class="logo-wrapper">
      <router-link tag="img" to="/" class="logo" src="assets/logo-light.svg" alt />
    </div>

    <div class="contact">
      <div class="title">CONTATO</div>
      <p>contato@vivasemlegenda.com.br</p>

      <svg id="whatsapp-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
      <a class="link-whatsapp" href="https://api.whatsapp.com/send?phone=5513997928404">(13) 99792-8404</a>
    </div>
    <!-- <div class="developed-by">Developed by xxxx</div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-image: linear-gradient(to right, #0095f5, #0095f5, #50bafe);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #ffffff;
  min-height: 120px;
  align-content: center;
  padding: 1.5rem 10%;
}
.logo-wrapper {
  flex: 1;
}
.logo {
  max-width: 200px;
  cursor: pointer;
}

.contact {
  flex: 1;
}
.contact > .title {
  font-weight: 500;
}
.site-tree {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;

  text-align: left;
  min-width: 200px;
}

.site-tree-element {
  margin: 0.25rem 0;
  cursor: pointer;
}

.developed-by {
  width: 100%;
  font-size: small;
}

.link-whatsapp {
  text-decoration: none;
  color: white;
}

.link-whatsapp:hover {
  color: blue;
}

#whatsapp-logo {
  fill: white;
  vertical-align: middle;
}

@media only screen and (min-width: 768px) {
  /* tablets and desktop */
  .site-tree-element::before {
    content: "| ";
  }
}

@media only screen and (max-width: 767px) {
  /* phones */
  .footer {
    flex-direction: column;
  }
  .site-tree {
    text-align: center;
  }
  .logo {
    max-width: 180px;
  }
  .footer > div {
    padding-top: 1.5rem;
  }
  .logo-wrapper {
    order: -1;
    padding-top: 0 !important;
    width: 100%;
  }
}
</style>
