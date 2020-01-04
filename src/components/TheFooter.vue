<template>
  <div class="footer">
    <div class="site-tree">
      <router-link
        tag="span"
        to="/" class="site-tree-element">Página Inicial</router-link>
      <router-link
        tag="span"
        to="/cursos" class="site-tree-element">Cursos</router-link>
      <router-link
        tag="span"
        to="/matricula" class="site-tree-element">Matrícula</router-link>
    </div>
    <div class="logo-wrapper">
      <router-link
        tag="img"
        to="/"
        class="logo"
        src="assets/logo-light.svg"
        alt
      />
    </div>

    <div class="contact">
      <div class="title">CONTACT</div>
      <p>contato@vivasemlegenda.com.br</p>
      <p>(13) 99792-8404</p>
    </div>
    <div class="developed-by">Developed by xxxx</div>
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
  padding: 1.5rem;
}
.logo {
  max-width: 225px;
  cursor: pointer;
}
.contact > .title {
  font-weight: bold;
}
.site-tree {
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
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  /* portrait phones */
}
</style>
