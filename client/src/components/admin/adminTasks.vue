<template>
<div>

<div>
    <div class="topnav">
                             <vs-button id="logosignout" line-position="top"  line-origin="right" color="dark" type="line">Logout</vs-button>

  <a class="active" @click="goadmin" >Requests</a><img id="logo" src="https://i.imgur.com/kfoJT37.png" width="50px">
  <div class="search-container">
    <form >
      <input type="text" placeholder="Search Restaurant Name.." v-model="search">
      <button type="submit"></button>
    </form>
  </div>
</div>   
</div>
  <md-table class="md-card">
    <md-table-row>     
            <md-table-head>Restaurant Name</md-table-head> 

      <md-table-head> Name</md-table-head>

      <md-table-head>Picture</md-table-head>
      <md-table-head>Address</md-table-head>
      <md-table-head>Email</md-table-head>
      <md-table-head>Delete</md-table-head>
    </md-table-row>
    <md-table-row v-for="(resto, index) in filteredList" :key="index">
      <md-table-cell>{{
        resto.name
      }}</md-table-cell>
      <md-table-cell>{{
        resto.restaurantName
      }}</md-table-cell>
      <md-table-cell >
        <img :src="'http://127.0.0.1:3000/images/'+resto.picture" alt="picture" class="picturelogo" />
      </md-table-cell>
      <md-table-cell>{{
        resto.address
      }}</md-table-cell>
      <md-table-cell>{{
        resto.email
      }}</md-table-cell>
      <md-table-cell>
        <md-button
          @click="deleteOne(resto._id)"
          class="md-primary md-raised">Delete</md-button >
          
      </md-table-cell>
    </md-table-row>
  </md-table>
  </div>
</template>
<script>
import axios from "axios";
const cookie = require("js-cookie");

export default {
  name: "AdminTasks",

  data() {
    return {
      search:'',
      restos: [],
      url: "http://localhost:3000/api/resto/",
    };
  },
  async created() {
    this.getAll();
  },
  methods: {
    logout() {
      cookie.remove("username");
      localStorage.clear();
      window.location.replace("/");
    },
       goadmin(){
      this.$router.push('/admin');  
      },
    async getAll() {
      const res = await axios.get(this.url + "getall");
      this.restos = res.data;
      console.log(res.data);
    },
    async deleteOne(id) {
      await axios.delete(`${this.url}/${id}`, { id: id });
      this.getAll();
    }
  
  },
   computed: {
    filteredList() {
      console.log(this.restos);
       return this.restos.filter((element) => {
          return element.restaurantName
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
    },
  },
};
</script>
<style scoped>
.picturelogo{
  height: 80px;
  width: 80px;
}
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
img#logo {
    position: absolute;
    left: 1250px;
}
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
#logosignout {
    position: absolute;
    top: 10px;
left: 1175px;}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #960303;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>