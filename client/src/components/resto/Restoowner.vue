<template>   
    <div class="container" id="create-article-div">
     <h2> Create restaurant </h2>
        <b-form>
        <b-form-group
            id="input-group-1"
            label="name :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          placeholder="Enter name"
          required></b-form-input>
      </b-form-group>
      <b-form-group
            id="input-group-1"
            label="restaurant name :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="restaurantName"
          type="text"
          placeholder="Enter restaurant name"
          required></b-form-input>
      </b-form-group>
       <b-form-group
            id="input-group-1"
            label="address :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="address"
          type="text"
          placeholder="Enter address"
          required></b-form-input>
      </b-form-group>
      <b-form-group
            id="input-group-1"
            label="logo :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="logo"
          type="text"
          placeholder="Enter logo"
          required></b-form-input>
      </b-form-group>
      <b-form-group
            id="input-group-1"
            label="email :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="text"
          placeholder="Enter email"
          required></b-form-input>
      </b-form-group>
       <b-form-group
            id="input-group-1"
            label="phone number :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="phoneNumber"
          type="text"
          placeholder="Enter phone number"
          required></b-form-input>
      </b-form-group>
      <b-form-group
            id="input-group-1"
            label="CIN :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="cin"
          type="text"
          placeholder="Enter cin"
          required></b-form-input>
      </b-form-group>
      <b-form-group
            id="input-group-1"
            label="User name :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="userName"
          type="text"
          placeholder="Enter user name"
          required></b-form-input>
      </b-form-group>
      <b-form-group
            id="input-group-1"
            label="Password :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="password"
          type="text"
          placeholder="Enter password"
          required></b-form-input>
      </b-form-group>
    <div class="confim-infirm">
      <b-button class="submit-butn-not" type="submit" variant="primary" @click="postResto">Submit</b-button>
      
    </div>
    </b-form>
    </div>
    
 
</template>

<script>

 import axios from "axios";

export default {
  name: "restoowner",
  data() {
    return {
      name:'',
      restaurantName:'',
      address:'',
      logo:'',
      email:'',
      phoneNumber:'',
      cin:'',
      username:'',
      password:''
    }
    },
  methods:{
      async postResto(){
          const newResto = await axios.post('/createResto', {//  suggestion for route for restaurant creation
            name: this.name,
            restaurantName: this.restaurantName,
            address: this.address,
            logo:this.logo,
            email:this.email,
            phoneNumber:this.phoneNumber,
            cin:this.cin,
            username:this.username,
            password:this.password
          });
            if(newResto){
                alert(`Request submited, thank you for your trust ${this.name}`)
            this.name='',
            this.restaurantName='',
            this.address='',
            this.logo='',
            this.email='',
            this.phoneNumber='',
            this.cin='',
            this.username='',
            this.password
     
            }
            
        }
  }
};
</script>
<style scoped>
</style>