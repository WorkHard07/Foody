<template>
  <div>
    <md-card>
      <md-card-content>
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
          <md-file v-model="picture" accept="image/*" />
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
      url: "http://localhost:3000/api/resto",
    };
  },

  async created() {
    this.clearAll();
  },

  methods: {
    async clearAll() {
      (this.name = ""),
        (this.restaurantName = ""),
        (this.picture = ""),
        (this.address = ""),
        (this.email = ""),
        (this.password = "");
    },

    async postResto() {
      console.log(this.url);
      await axios.post(this.url, {
        name: this.name,
        restaurantName: this.restaurantName,
        picture: this.picture,
        address: this.address,
        email: this.email,
        password: this.password,
      });

      this.clearAll();
    },
  },
};
</script>

<style   >
body{
    background-image: url("https://s1.1zoom.me/b6244/313/Fast_food_Hamburger_Hot_dog_Colored_background_523442_1920x1080.jpg");

}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #dc3545;
    text-align: left;
    background-color: #fff;
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
