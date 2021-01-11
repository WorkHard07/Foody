<template>
  <div class="hello">
    <vs-button   color="dark" type="line" @click="gosignin">Sign in </vs-button>
    <img class="logos" id="pizza" src="../assets/pizza.png" width="95px" />
    <img class="logos" id="cake" src="../assets/cake.png" width="200px" />
    <img class="logos" id="sandwich" src="../assets/sandwich.png" width="130px" />
    <img class="logos" id="cake2" src="../assets/cake2.png" width="160px" />
    <img class="logos" id="chicken" src="../assets/chicken.png" width="230px" />
    <img id="restaurant" src="../assets/resaturant.png" width="300px" /> 
  <Partner/>
  <Footer/>
 </div>
</template>
<script>
import Footer from './Footer.vue';
import Partner from './Partner.vue';
export default {
  name: "Landing",
  components:{
    Footer,
    Partner
  },
  methods:{
    gosignin(){
      this.$router.push('/signin');  
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #f8b101;
}
.hello {
  background-image: url("../assets/background3.png");
  background-repeat: no-repeat;
  background-size: 85%;
  height: 100vh;
}
button.vs-component.vs-button.vs-button-dark.vs-button-line {
    position: absolute;
    top: 7px;
    left: 1441px;
}
img#restaurant {
  position: absolute;
  top: 741px;
  left: 1097px;
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
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
