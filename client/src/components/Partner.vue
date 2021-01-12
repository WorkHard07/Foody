<template>
<div id="parag">
    <h2  >Do you want to deliver your clients in a easy way ?
 This solution is for you <br>
 it allows you to receive  orders  to locate your clients  and track orders ,<br> isn't that great</h2>
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
    top: 959px;
    left: 936px;
}
.h6{
    color:whitesmoke
}
h2{
    color: #e50100;
}
h2{
    font-family: "Lucida Console", "Courier New", monospace;
}
</style>