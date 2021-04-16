<template>
  <div id="hoteis" class="d-flex justify-content-center">
    <div class="m-4">
      <h1>Hoteis</h1>
      <div class="mapa d-flex m-4">
        <Mapa tipo="hoteis" />
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "../components/Mapa.vue";

export default {
  name: "Hoteis",
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