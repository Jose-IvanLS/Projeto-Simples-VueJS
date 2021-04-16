<template>
  <div id="delegacias" class="d-flex justify-content-center">
  <div class="m-4">
      <h1>Delegacias</h1>
      <div class="mapa d-flex m-4">
        <Mapa tipo="delegacias" />
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "../components/Mapa.vue";

export default {
name: "Delegacias",
  components: {
    Mapa
  }
}
</script>

<style scoped>
h1{
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