<template>
  <div id="app">
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from "@/components/mainHeader";

export default {
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $bg;
  color: #fff;
  font-family: sans-serif;
}

input {
  height: 50px;
  padding-left: 17px;
  border-radius: 13px;
  background-color: $dark-blue-01;
  color: #fff;
  font-size: 18px;
  border: 2px solid $dark-blue-02;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 980px;
  padding: 0 16px;
  margin: 0 auto;
}
</style>
