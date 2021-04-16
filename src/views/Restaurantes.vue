<template>
  <div id="restaurantes" class="d-flex justify-content-center">
    <div class="m-4">
      <h1>Restaurantes</h1>
      <div class="mapa d-flex m-4">
        <Mapa tipo="restaurantes" />
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "../components/Mapa.vue";

export default {
  name: "Restaurantes",
  components: {
    Mapa
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.mapa {
  border-style: solid;
  left: 5%;
  width: 85%;
  height: 80%;
  position: absolute;
}
</style>