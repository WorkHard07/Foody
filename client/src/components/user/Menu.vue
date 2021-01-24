<template>
  <div id="menu">
    <div id="product">
      <Productbox
        v-for="(item, index) in menus"
        :item_data="item"
        :key="index"
      />
    </div>
    <div id="cart">
      <div id="head">
        <h3>Shopping Cart</h3>
        <div class="p" id="price">Price</div>
        <div class="p" id="quantity">Quantity</div>
        <div class="p" id="total">Total</div>
      </div>
      <Buybox
        v-for="(buyitem, index) in buyitems"
        :buy_data="buyitem"
        :key="index"
      />
      <h5 v-if="total()">Sum: $ {{ total() }}</h5>
      <div id="submit">
        <vs-button color="dark" type="line" @click="submitorder">
          Submit
        </vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Buybox from "./Buybox.vue";
import Productbox from "./Productbox.vue";
import { items } from "./dummydata.js";
import axios from "axios";

export default {
  data: () => {
    return {
      items: items,
      menus: [],
      url: "http://localhost:3000/api/",

      //  items: [ ],
      //   {
      //     img: "https://i.imgur.com/jg6kc30.jpg",
      //     title: "Pizza",
      //     price: "10",
      //     id: "pizza"
      //   },
      //   {
      //     img: "https://i.imgur.com/e8UDNfD.png",
      //     title: "Sandwich",
      //     price: "6",
      //     id: "sandwich"
      //   },
      //   {
      //     img: "https://i.imgur.com/tZ61z8u.png",
      //     title: "soda",
      //     price: "3",
      //     id: "soda"
      //   }
      // ],
    };
  },
  async created() {
    console.log(this.url + "?id=" + this.$route.params.id);

    this.getallmenus();
  },
  name: "Menu",
  components: {
    Productbox,
    Buybox,
  },
  computed: mapState(["buyitems"]),
  methods: {
    getallmenus: async function() {
      const res = await axios.get(this.url + "?id=" + this.$route.params.id);
      this.menus = res.data;
      console.log(res.data);
    },
    total: function() {
      var sum = 0;
      this.buyitems.forEach(function(buyitem) {
        sum += parseInt(buyitem.total);
      });
      return sum;
    },
    submitorder: function() {
      console.log(document.cookie);
      console.log(this.buyitems);
      let order = {
        userid: document.cookie.split('=')[4].split(',')[0],
        buyitems: this.buyitems,
        total: this.total(),
        restoid:this.$route.params.id
      };
      console.log(order);
    },
  },
};
</script>
<style lang="scss">
html,
body {
  background-color: rgb(239, 244, 255);
  font-family: calibri, sans-serif;
}

#app {
  width: 760px;
  margin: 20px auto;
  #product {
    .box {
      width: 230px;
      height: 190px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin: 0 10px;
      position: relative;
      img {
        width: 230px;
        height: 190px;
      }
      .plus {
        width: 50px;
        height: 50px;
        background: #e79f02;
        color: #ffffff;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        font-size: 1.4rem;
        position: absolute;
        right: 20px;
        top: 150px;
        box-shadow: 0 0 4px 2px rgba(117, 2, 2, 0.979);
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.05);
        }
      }
      h2 {
        margin-left: 20px;
      }
      h2 {
        color: rgb(138, 3, 3);
      }
      p {
        margin-left: 20px;
      }
    }
  }
  #cart {
    margin-top: 50px;
    overflow: hidden;
    #head {
      width: 100%;
      border-bottom: 1px solid #bfbfbf;
      height: 40px;
      display: block;
      h3 {
        display: inline-block;
        line-height: 40px;
        margin: 0;
      }
      #price {
        display: inline-block;
        color: #c00707;
        margin-left: 200px;
        line-height: 40px;
      }
      #quantity {
        display: inline-block;
        color: #960303;
        margin-left: 100px;
        line-height: 40px;
      }
      #total {
        display: inline-block;
        color: #777777;
        line-height: 40px;
        float: right;
      }
    }
    .row {
      width: 100%;
      border-bottom: 1px solid #bfbfbf;
      overflow: hidden;
      padding: 10px 0;
      display: block;
      flaot: left;
      img {
        height: 100px;
        float: left;
      }
      h4 {
        float: left;
        margin: 0;
        line-height: 100px;
        margin-left: 20px;
        width: 100px;
      }
      p {
        float: left;
        margin: 0;
        width: 80px;
        line-height: 100px;
        margin-left: 35px;
        text-align: center;
      }
      .qty-minus {
        float: left;
        width: 20px;
        line-height: 100px;
        margin-left: 60px;
        text-align: center;
        cursor: pointer;
      }
      .qty {
        float: left;
        width: 20px;
        line-height: 100px;
        margin-left: 20px;
        text-align: center;
      }
      .qty-plus {
        float: left;
        width: 20px;
        line-height: 100px;
        margin-left: 20px;
        text-align: center;
        cursor: pointer;
      }
      .del {
        float: left;
        width: 80px;
        line-height: 100px;
        margin-left: 60px;
        cursor: pointer;
        text-decoration: underline;
        color: #ed277f;
      }
      .totalprice {
        float: left;
        width: 80px;
        line-height: 100px;
        margin-left: 10px;
        text-align: right;
      }
      .row p::before,
      .box p::before,
      .totalprice::before {
        content: "$";
      }
    }
    h5 {
      font-size: 1.2rem;
      text-align: right;
    }
  }
}
</style>
