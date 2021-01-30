<template>
<div>
<ul>
 
  <li  @click="gomenu">Menu</li>
  

</ul>
</div>

</template>
<script>
export default {
   name: 'ordernav' ,

   methods:{
    gomenu(){
      this.$router.push('/restohome');  
    }
}
}
</script>
<style >
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
 background-color: rgb(100, 1, 1);}

li {
  float: left;
}

li  {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li :hover {
  background-color: #111;
}
</style>