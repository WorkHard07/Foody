<template>
  <div>
    <ul class="nav">
                       <vs-button id="logosignout" line-position="top" line-origin="left" color="warning" type="line" @click="logout">Logout</vs-button>


      <li @click="gomenu">Menu</li><img id="logo" src="https://i.imgur.com/kfoJT37.png" width="50px">
    </ul>

    <div class="card" v-for="(order, index) in orders" :key="index">
      <h1>{{ order.userName }}</h1>
      <p v-for="(menu, i) in order.menus" :key="i">
        commande {{ i+1 }} <br />
          {{ menu.name }}
      </p>
      <p class="price">{{ order.total }}dt</p>
      <p>{{ order.phoneNumber }}</p>

      <p>{{ order.deliveryAddress }}</p>
      <p><button @click="deleteOrder(order._id)">Done</button></p>
    </div>
  </div>
</template>
<script>
const cookie = require("js-cookie");

import axios from "axios";
export default {
  name: "restohome",
  data() {
    return {
      orders: "",
      id: document.cookie.split(",")[0].split("=")[1],
      url: "http://localhost:3000/api/orders",
      menus: [],
      men: "",
    };
  },

  async beforeMount() {
    const res = await axios.get(this.url + "/" + this.id);

    this.orders = res.data;
    console.log(this.orders);
  },

  methods: {
    logout() {
      cookie.remove("username");
      localStorage.clear();
      window.location.replace("/");
    },
    async deleteOrder(id) {
      await axios.delete(`${this.url}/${id}`);
      window.location.replace("/restohome");
    },
    gomenu() {
      this.$router.push("/createMenu");
    },
  },
};
</script>
<style>
img#logo {
    position: absolute;
    left: 1458px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(100, 1, 1);
}
li {
  float: left;
}
li {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li :hover {
  background-color: #111;
}
h1 {
  font-family: "Rye", cursive;
  color: rgb(129, 0, 0);
}
.card {
  margin-top: 72px;
}
.card:hover {
  -ms-transform: scale(0.5);
  -webkit-transform: scale(1);
  transform: scale(1.1);
}

.button:active {
  background-color: #131312;
  box-shadow: 0 5px rgb(63, 1, 1);
  transform: translateY(20px);
}
.card {
  box-shadow: 0 12px 8px 0 rgb(138, 3, 3);
  max-width: 300px;
  text-align: center;
  font-family: arial;
}
.card {
  margin-top: 51px;
  margin-left: 618px;
}
.price {
  color: rgb(114, 4, 4);
  font-size: 22px;
}
.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: rgb(230, 160, 10);
  background-color: rgb(83, 2, 2);
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
#logosignout {
    position: absolute;
    top: 10px;
    left: 1350px;
}

</style>
