
<template>
  <div class="hello">
  <vsButton   line-position="top" line-origin="right" color="dark" type="line">Sign in</vsButton></div>
</template>

<script>
import Vue from 'vue'
import { vsButton } from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(vsButton)
export default {
  name: "landing",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 body{
  background-color : #f8b101
} 
.hello {
  background-image: url("../background.png");
  background-repeat: no-repeat;
  background-size:  85% ;
  height: 100vh;

background-position: center;
}
</style>
