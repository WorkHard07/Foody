<template>
  <div>
    <ul>
                       <vs-button id="logosignout" line-position="top" line-origin="left" color="warning" type="line">Logout</vs-button>

      <li  @click="gomenu">Orders</li> <img id="logo" src="https://i.imgur.com/kfoJT37.png" width="50px">
    </ul>
    <md-card>
      <md-card-content>
        <input v-model="id" type="hidden" />
        <md-field>
          <label for="cathegory">cathegory</label>
          <md-select v-model="cathegory" name="cathegory" id="cathegory">
            <md-option value="sandwiches">Sandwiches</md-option>
            <md-option value="plates">Plates</md-option>
            <md-option value="snacks">Snacks</md-option>
            <md-option value="other">Other</md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-input v-model="name" placeholder="name"> </md-input>
        </md-field>
        <md-field>
          <md-input v-model="description" placeholder="description"> </md-input>
        </md-field>

        <md-field>
          <label> picture </label>
          <md-file
            @change="handleImage"
            type="file"
            name="picture"
            accept="image/*"
          />
        </md-field>
        <md-field>
          <md-input v-model="price" placeholder="price"> </md-input>
        </md-field>
        <md-button @click="postMenu" class="md-primary md-raised"
          >Save</md-button
        >
      </md-card-content>
    </md-card>
    <md-table class="md-card">
      <md-table-row>
        <md-table-head>Cathegory</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Picture</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Edit</md-table-head>
        <md-table-head>Delete</md-table-head>
      </md-table-row>

      <md-table-row v-for="(menu, index) in menus" :key="index">
        <md-table-cell><h5 class="up">{{ menu.cathegory }}</h5></md-table-cell>
        <md-table-cell><h5  class="up">{{ menu.name }}</h5></md-table-cell>
        <md-table-cell><h5  class="up">{{ menu.description }}</h5></md-table-cell>
        <md-table-cell>
          <img :src="'http://127.0.0.1:3000/images/' + menu.picture"
            class="menulogo"
            alt="picture"/>
        </md-table-cell>
        <md-table-cell>{{ menu.price }}</md-table-cell>
        <md-table-cell>
          <md-button @click="getOne(menu)" class="md-primary md-raised"
            >Edit</md-button
          >
        </md-table-cell>
        <md-table-cell>
          <md-button @click="deleteOne(menu._id)" class="md-primary md-raised"
            >Delete</md-button
          >
        </md-table-cell>
      </md-table-row>
    </md-table>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateMenu",

  data: () => {
    return {
      menus: [],
      id: 0,
      cathegory: "",
      name: "",
      description: "",
      picture: "",
      price: "",
      resto: "",
      url: "",
    };
  },
  async beforeMount() {
    this.resto = document.cookie.split("=")[1].split(",")[0];
    this.url = "http://localhost:3000/api/"
    console.log(this.url + "rm/" + this.resto);
    const res = await axios.get(this.url + "rm/" + this.resto);
    this.menus = res.data;
    console.log(res.data);
    this.id = 0;
    this.cathegory = "";
    this.name = "";
    this.description = "";
    this.picture = "";
    this.price = "";
  },
  methods: {
    handleImage(e) {
      const selectImage = e.target.files[0];
      this.picture = selectImage;
      console.log(this.picture);
    },

    gomenu() {
      this.$router.push("/restohome");
    },

    async getOne(menu) {
      this.id = menu._id;
      this.cathegory = menu.cathegory;
      this.name = menu.name;
      this.description = menu.description;
      this.picture = menu.picture;
      this.price = menu.price;
    },

    async postMenu() {
      const formData = new FormData();
      formData.append("cathegory", this.cathegory);
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("picture", this.picture);
      formData.append("price", this.price);
      formData.append("resto", this.resto);
      if (this.id == 0) {
        await axios.post(this.url, formData, {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        });
        this.getAll();
      } else {
        await axios.put(`${this.url}/${this.id}`, {
          cathegory: this.cathegory,
          name: this.name,
          description: this.description,
          picture: this.picture,
          price: this.price,
        });
        this.getAll();
      }
    },
    async deleteOne(id) {
      await axios.delete(`${this.url}/${id}`);
      this.getAll();
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
 background-color: rgb(100, 1, 1);}

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
img#logo {
    position: absolute;
    left: 1458px;
}
li :hover {
  background-color: rgb(112, 4, 4);
}
 .up{
 font-family: 'Rye', cursive;
}
.md-table-head-label {
    color: rgb(129, 4, 4);
}
.menulogo {
  width: 80px;
  height: 80px;
}
#logosignout {
    position: absolute;
    top: 10px;
    left: 1350px;
}
</style>
