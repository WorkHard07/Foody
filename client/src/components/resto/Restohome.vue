<template>
  <div>
    <md-table class="md-card">
      <ul>
        <li @click="gomenu">Menu</li>
      </ul>
      <md-table-row>
        <md-table-head>username</md-table-head>
        <md-table-head>order</md-table-head>
        <md-table-head>total</md-table-head>
      </md-table-row>
      <md-table-row v-for="(order, index) in orders" :key="index">
        <md-table-cell>{{ order.user }}</md-table-cell>
        <md-table-cell><div>{{ order.menus }}</div></md-table-cell>
        <md-table-cell>{{ order.total }}dt</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "restohome",
  data() {
    return {
      orders: "",
      id: document.cookie.split(",")[0].split("=")[1],
      url: "http://localhost:3000/api/orders",
    };
  },
  async created() {
    this.getorders();
  },
  methods: {
    gomenu() {
      this.$router.push("/createMenu");
    },

    async getorders() {
      console.log(this.id);
      const res = await axios.get(this.url + "/" + this.id);
      console.log(res.data);
      this.orders = res.data;
    },
  },
};
</script>
<style>
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
</style>
