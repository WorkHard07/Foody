<template>
  
  <div id="menu">
      <vs-button id="logosignout" color="warning" type="flat" @click="logout">Logout</vs-button>

     <ul>  <li><img src="https://i.imgur.com/kfoJT37.png" width="50px"></li>
</ul>
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
      <Buybox v-for="(buyitem, index) in buyitems"
        :buy_data="buyitem"
        :key="index"/>
        
    <vs-input label-placeholder="Insert your Adress"   v-model="deliveryAddress" />
    <vs-input  id="number" label-placeholder="Enter your phone number"   v-model="phoneNumber" />





      <h5 v-if="total()">Sum: TND {{ total() }}</h5>
      <div id="submit">
        <vs-button color="dark" type="line" @click="submitorder">
          Submit
        </vs-button>
      </div>
    </div>

  </div>
</template>
<script>
const cookie = require("js-cookie");

import { mapState } from "vuex";
import Buybox from "./Buybox.vue";
import Productbox from "./Productbox.vue";
import { items } from "./dummydata.js";
import axios from "axios";
export default {
  
  data: () => {
    return {
      deliveryAddress:"",
            phoneNumber:"",
      items: items,
      menus: [],
      url: "http://localhost:3000/api/",
      restaurant: null,
     
    };
  },
  async created() {
    this.getallmenus();
  },
  name: "Menu",
  components: {
    Productbox,
    Buybox,
  },
  async beforeMount() {
    var restaurant = await axios.put(
      `${this.url}resto/getResto/${this.$route.params.id}`
    );
    this.restaurant = restaurant.data;
  },
  computed: mapState(["buyitems"]),
  methods: {
     logout() {
      cookie.remove("username");
      localStorage.clear();
      window.location.replace("/");
    },
    getallmenus: async function() {
      console.log(this.$route.params.id);
      const res = await axios.get(this.url + "rm/" + this.$route.params.id);
      this.menus = res.data;
      console.log(res.data);
      this.deliveryAddress=""
    },
    total: function() {
      var sum = 0;
      this.buyitems.forEach(function(buyitem) {
        sum += parseInt(buyitem.total);
      });
      return sum;
    },
    submitorder: async function() {
      var ownerId = document.cookie.split(",")[0].split("=")[1];
      var owner = await axios.get(`${this.url}user/${ownerId}`);
      owner = owner.data;
      console.log(owner);
      let order = {
        orders_owner: ownerId,
        menus: this.buyitems,
        total: this.total(),
        resto: this.restaurant._id,
        userName: owner,
        deliveryAddress:this.deliveryAddress,
                phoneNumber:this.phoneNumber
      };
      // console.log(this.url + "orders/");
      const result = await axios.post(`${this.url}orders/`, {
        order: order,
      });
      this.order = result.data;
    },
  },
};
</script>
<style lang="scss">
html,
body {
  background-color: rgb(236, 239, 243);
  font-family: calibri, sans-serif;
}
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

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
#logosignout {
    position: absolute;
    top: 20px;
    left: 1394px;
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
        background: #E79F02;
        color: #FFFFFF;
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
      border-bottom: 1px solid #BFBFBF;
      height: 40px;
      display: block;
      h3 {
        display: inline-block;
        line-height: 40px;
        margin: 0;
      }
      #price {
        display: inline-block;
        color: #C00707;
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
      border-bottom: 1px solid #BFBFBF;
      overflow: hidden;
      padding: 10px 0;
      display: block;
      flaot: left;
      img {
        height: 100px;
        width: 100PX;
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
        color: #ED277F;
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
