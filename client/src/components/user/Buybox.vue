<template id="Buybox">
  <div class="row">
    <img :src="'http://127.0.0.1:3000/images/' + this.buy_data.picture" />
    <h4>{{ buy_data.name }}</h4>
    <p>TND {{ buy_data.price }}</p>
    <div class="qty-minus" v-on:click="minusQty(buy_data)">-</div>
    <div class="qty">{{ buy_data.qty }}</div>
    <div class="qty-plus" v-on:click="plusQty(buy_data)">+</div>
    <div class="del" v-on:click="removeItem(buy_data)">Remove</div>
    <div class="totalprice">{{ buy_data.total }} TND</div>
  </div>
</template>
<script>
export default {
  name: "Buybox",
  template: "#Buybox",
  props: ["buy_data"],

  methods: {
    removeItem: function(buy_data) {
      var { buyitems } = this.$store.state;
      var index = buyitems.indexOf(buy_data);
      buyitems.splice(index, 1);
    },
    plusQty: function(buy_data) {
      buy_data.qty += 1;
      buy_data.total = buy_data.qty * buy_data.price;
    },
    minusQty: function(buy_data) {
      buy_data.qty -= 1;
      if (buy_data.qty < 0) {
        buy_data.qty = 0;
      }
      buy_data.total = buy_data.qty * buy_data.price;
    },
  },
};
</script>
<style scoped></style>
