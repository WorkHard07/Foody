<template>
  <md-table class="md-card">
    <md-table-row>
      <md-table-head>Name</md-table-head>
      <md-table-head>Restaurant Name</md-table-head>
      <md-table-head>Picture</md-table-head>
      <md-table-head>Address</md-table-head>
      <md-table-head>Email</md-table-head>
      <md-table-head>Delete</md-table-head>
      <md-table-head>Accept</md-table-head>
    </md-table-row>

    <md-table-row v-for="(resto, index) in restos" :key="index">
      <md-table-cell v-if="resto.partner === 'none'">{{
        resto.name
      }}</md-table-cell>
      <md-table-cell v-if="resto.partner === 'none'">{{
        resto.restaurantName
      }}</md-table-cell>

      <md-table-cell v-if="resto.partner === 'none'">
        <img :src="resto.picture" alt="picture" />
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
