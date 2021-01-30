<template>
  <md-table class="md-card">
 <div class="topnav">
                          <vs-button id="logosignout" line-position="top"  line-origin="right" color="dark" type="line"  @click="logout">Logout</vs-button>

  <a class="active" @click="goadmin" >Partners</a><img id="logo" src="https://i.imgur.com/kfoJT37.png" width="50px"></div>
    <md-table-row>
                       <md-table-head> <img src="https://cdn.iconscout.com/icon/free/png-256/restaurant-1495593-1267764.png" width="20 px"></md-table-head>

            <md-table-head><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" width="20 px"></md-table-head>


      <md-table-head><img src="https://i.pinimg.com/originals/4c/11/27/4c1127eba22e46173e39f0b2efae39ba.jpg" width="30 px"></md-table-head>

      <md-table-head><img src="https://ih1.redbubble.net/image.1634880995.2650/st,small,507x507-pad,600x600,f8f8f8.jpg" width="35 px"></md-table-head>
      <md-table-head><img src="https://img.icons8.com/bubbles/2x/email.png" width="40 px"></md-table-head>
      <md-table-head> <img src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg" width="20 px"></md-table-head>
      <md-table-head><img src="https://cdn.iconscout.com/icon/free/png-512/accept-149-840232.png" width="20 px"></md-table-head>
    </md-table-row>
    <md-table-row v-for="(resto, index) in restos" :key="index">
      <md-table-cell v-if="resto.partner === 'none'">{{
        resto.name
      }}</md-table-cell>
      <md-table-cell v-if="resto.partner === 'none'">{{
        resto.restaurantName
      }}</md-table-cell>

      <md-table-cell v-if="resto.partner === 'none'">
        <img :src="'http://127.0.0.1:3000/images/'+resto.picture" alt="picture" class="picturelogo" />
      </md-table-cell>

      <md-table-cell v-if="resto.partner === 'none'">{{
        resto.address
      }}</md-table-cell>
      <md-table-cell v-if="resto.partner === 'none'">{{
        resto.email
      }}</md-table-cell>
      <md-table-cell>
        <md-button
          v-if="resto.partner === 'none'"
          @click="deleteOne(resto._id)"
          class="md-primary md-raised"
          >Delete</md-button
        >
      </md-table-cell>
      <md-table-cell>
        <md-button
          v-if="resto.partner === 'none'"
          @click="acceptPartner(resto._id)"
          class="md-primary md-raised"
          >Accept</md-button
        >
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
import axios from "axios";
const cookie = require("js-cookie");

export default {
  name: "Admin",

  
  data() {
    return {
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
      this.$router.push('/adminTasks');  
      },
    async getAll() {
      const res = await axios.get(this.url + "getpendinrequest");

      this.restos = res.data;
      console.log(res.data);
    },

    async deleteOne(id) {
      await axios.delete(`${this.url}/${id}`, { id: id });
      this.getAll();
    },

    async acceptPartner(id) {
      console.log(id);
      console.log(`${this.url}id?=${id}`);
      await axios
        .put(`${this.url}id?=${id}`, { partner: "ok", id: id })
        .then((result) => {
          console.log(result.data);
          this.getAll();
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
img#logo {
    position: absolute;
    left: 1450px;
}
.topnav a:hover {
  background-color: rgb(134, 2, 2);
  color: black;
}

.topnav a.active {
  background-color: #a70b06;
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
#logosignout {
    position: absolute;
    top: 10px;
    left: 1350px;
}
</style>