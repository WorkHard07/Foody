<template>
<div id="parag">
    
               <vs-button id="become" color="warning" type="filled " @click="go">Become a partner</vs-button>

     </div>

</template>
<script>
export default {
    
  name: "partner",

methods:{
    go(){
      this.$router.push('/create');  
    }
}
}
</script>
<style  >

h2 {
    position: absolute;
    top: 117%;
    left: 6px;
}
button#become {
    position: absolute;
    top: 1045px;
    left: 1059px;
}

.h6{
    color:whitesmoke
}
img#restaurant {
    width: 100%;
}
h2{
    color: #e50100;
}
img#restaurant {
    position: absolute;
 top: 730px;;
    left: 0px;
}
h2{
    font-family: "Lucida Console", "Courier New", monospace;
}
</style>