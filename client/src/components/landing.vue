<template>
  <div class="hello">

  <vs-button color="warning" type="flat" @click="gosignin">Sign in </vs-button>
  
    <img id="restaurant" src="../assets/restaurent.png" width="300px" /> 
  <Partner/>
 </div>
</template>
<script>
import Partner from './Partner.vue';
export default {
  name: "Landing",
  components:{
    Partner
  },
  methods:{
    gosignin(){
      this.$router.push('/signin');  
    }
  }
};
</script>
<style >

 
body {
  background-color: #f8b101;
}
.hello {
  background-image: url("../assets/backgroundproject.png");
  background-repeat: no-repeat;
    background-size: 100%;
  height: 100vh;
  background-color: black;
}
button.vs-component.vs-button.vs-button-warning.vs-button-flat {
    position: absolute;
    left: 93%;
}

/* #signin{
  position: absolute;
  left: 93%
} */
img#pizza {
  position: absolute;
  top: 535px;
  left: 585px;
}
img#cake {
  position: absolute;
  top: 140px;
  left: 213px;
}
img#sandwich {
  position: absolute;
  top: 149px;
  left: 28px;
}
img#cake2 {
  position: absolute;
  top: 193px;
  left: 432px;
}
img#chicken {
  position: absolute;
  top: 270px;
  left: 487px;
}
img.logos:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

</style>