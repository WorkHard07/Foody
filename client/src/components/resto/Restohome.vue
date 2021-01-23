<template>
<div>
<ul>
 
  <li  @click="gomenu">Menu</li>
  

</ul>
</div>

</template>
<script>
export default {
   name: 'restohome' ,

   methods:{
    gomenu(){
      this.$router.push('/createMenu');  
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
  background-color: #333;
}

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