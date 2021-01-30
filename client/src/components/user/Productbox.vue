<template id="Productbox">
  <div class="box">
    <img :src="'http://127.0.0.1:3000/images/'+item_data.picture" />
    <div class="plus">
      <b-icon icon="plus" class="fa fa-plus" v-on:click="addItem(item_data)" />
    </div>
    <h2 class="mekla">{{ item_data.name }}</h2>
    <p>TND {{ item_data.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Productbox",
  template: "#Productbox",
  props: ["item_data"],

  methods: {
    addItem: function(item_data) {
      var i;

      console.log(this.$store.state);
      if (
        this.findIndex(this.$store.state.buyitems, "id", item_data.id) === -1
      ) {
        this.pushData();
      } else {
        i = this.findIndex(this.$store.state.buyitems, "id", item_data.id);
        this.$store.state.buyitems[i].qty += 1;
        this.$store.state.buyitems[i].total =
          this.$store.state.buyitems[i].qty *
          this.$store.state.buyitems[i].price;
        console.log(i);
      }
    },
    pushData: function() {

      this.$store.state.buyitems.push({
        picture: this.item_data.picture,
        name: this.item_data.name,
        price: this.item_data.price,
        total: this.item_data.price,
        id: this.item_data._id,
        qty: 1,
      });
    },
    findIndex: function(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },
  },
};
</script>
<style ></style>
