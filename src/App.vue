<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">

        <b-button class="navbar-toggler" v-b-toggle.collapse-1>
          <span class="navbar-toggler-icon"></span>
        </b-button>

        <router-link class="navbar-brand" :to="{name: 'inicio'}" tabindex="1">FF</router-link>

        <b-collapse class="collapse navbar-collapse" id="collapse-1">

          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                id="router-link"
                class="nav-link"
                :to="{name: 'hospitais'}"
                tabindex="2"
              >Hospitais</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'delegacias'}" tabindex="3">Delegacias</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'restaurantes'}" tabindex="4">Restaurantes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'hoteis'}" tabindex="5">Hoteis e outros</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{name: 'turisticos'}"
                tabindex="6"
              >Pontos Turísticos</router-link>
            </li>
          </ul>
        </b-collapse>
      </nav>
    </header>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    obtendoLocalizacao: function() {
      this.$store.dispatch("mostrarLocalAtual");
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
