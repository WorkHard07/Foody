<template>
  <div>
    <md-card>
      <md-card-content enctype="multipart/form-data">
        <md-field>
          <label for="address">address</label>
          <md-select v-model="address" name="address" id="cathegory">
            <md-option value="Tunis">Tunis</md-option>
            <md-option value="Ariana">Ariana</md-option>
            <md-option value="Manouba">Manouba</md-option>
            <md-option value="BenArous">Ben Arous</md-option>
          </md-select>
        </md-field>
        <md-field>
          <md-input type="text" v-model="name" placeholder="name"> </md-input>
        </md-field>
        <md-field>
          <md-input
            type="text"
            v-model="restaurantName"
            placeholder="restaurantName"
          >
          </md-input>
        </md-field>

        <md-field>
          <label> picture </label>
          <img style="" :src="image" alt="" />
          <form action="upload/post" enctype="multipart/form-data">

            <input
              @change="handleImage"
              type="file"
              name="image"
              accept="image/*"
            />
          </form>
        </md-field>

        <md-field>
          <md-input type="email" v-model="email" placeholder="email">
          </md-input>
        </md-field>

        <md-field>
          <md-input type="password" v-model="password" placeholder="password">
          </md-input>
        </md-field>

        <md-button @click="postResto" class="md-primary md-raised"
          >Save</md-button
        >
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RestoOwner",
  data() {
    return {
      name: "",
      restaurantName: "",
      picture: "",
      address: "",
      email: "",
      password: "",
      url: "http://localhost:3000/api/resto/",
      image: "",
    };
  },

  async created() {
    this.clearAll();
  },

  methods: {
    handleImage(e) {
      const selectImage = e.target.files[0];
      this.image = selectImage;
    },

    async clearAll() {
      (this.name = ""),
        (this.restaurantName = ""),
        (this.picture = ""),
        (this.address = ""),
        (this.email = ""),
        (this.password = "");
    },

    async postResto() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("restaurantName", this.restaurantName);
      formData.append("address", this.address);
      formData.append("email", this.email);
      formData.append("password", this.password);
      console.log(formData.getAll("image")[0]);

      await axios.post(this.url, formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      this.clearAll();
    },
  },
};
</script>

<style>

 body {
  background-image: url (" ../assets/Restoback.png ") ;
} 
input[type="file"] {
    position: absolute;
    left: -6px;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #dc3545;
  text-align: left;
}
.md-card-content {
  width: 411px;
  height: -69px;
}
.md-card-content {
  position: absolute;
  top: 101px;
  left: 491px;
}
</style>
