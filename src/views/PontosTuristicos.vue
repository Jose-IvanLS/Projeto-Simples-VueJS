<template>
  <div id="pontosTuristicos" class="d-flex justify-content-center">
    <div class="m-4">
      <h1>Pontos Turisticos</h1>
      <div class="mapa d-flex m-4">
        <Mapa tipo="pontosTuristicos" />
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "../components/Mapa.vue";

export default {
  name: "PontosTuristicos",
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