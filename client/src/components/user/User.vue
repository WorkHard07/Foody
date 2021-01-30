<template lang="html">
  <div id="app">
  <vs-button id="logosignout" color="warning" type="flat" @click="logout">Logout</vs-button>
<label>
  <input type="text" required  v-model="search" placeholder="Enter your location" >
 
</label>
    <div class="wrapper">
      <div class="card" v-for="(restos, i) in filteredList" :key="i">
        <div id="title">
          <router-link :to="{ name: 'menu', params: { id: restos._id } }">
            <img :src="'http://127.0.0.1:3000/images/' + restos.picture"/></router-link>
          {{ restos.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const cookie = require("js-cookie");
import axios from "axios";

export default {
  
  name: "user",
  data() {
    return {
      restos: [],
      url: "http://localhost:3000/api/resto/getall",
      search: "",
    };
  },

  async created() {
    this.getAll();
  },
  
  methods: {
     logout() {
      cookie.remove("username");
      localStorage.clear();
      window.location.replace("/");
    },
    redirectLog() {
      this.$router.push("/user");
    },
    async getAll() {
      const res = await axios.get(this.url);
      this.restos = Object.values(res.data);
    },
  },
  computed: {
    filteredList() {
      console.log(this.restos);
       
       return this.restos.filter((element) => {
          return element.address
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      
    },
  },
};
</script>

<style lang="scss"  >
#title {
  font-family: "Hanalei Fill", cursive;
  color: rgb(134, 5, 5);
}

html, body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4px;
    margin-bottom: 13px;
}

body {
    background-image: url(https://gephardtdaily.com/wp-content/uploads/2015/01/fire-pizza.jpg);
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100%;
}
input[type="text"] {
  width: 223px;
  height: 43px;
}
.wrapper {
  position: absolute;
  top: 138px;
    left: 463px}
    
    div#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // .search-wrapper {
  //   position: relative;
  //   label {
  //     position: absolute;
  //     font-size: 12px;
  //     font-family: "Hanalei Fill", cursive;
  //     color: rgba(247, 8, 8, 0.5);
  //     top: 8px;
  //     left: 12px;
  //     z-index: -1;
  //     transition: 0.15s all ease-in-out;
  //   }
    input {
      padding: 4px 12px;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(119, 3, 3, 0.979);
      transition: 0.15s all ease-in-out;
      background-color: #fffbfb;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label {
          font-size: 10px;
          transform: translateY(-24px) translateX(-12px);
        }
      }
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
      }
    }
  }
  .wrapper {
    display: flex;
    max-width: 601px;
    flex-wrap: wrap;
    padding-top: 12px;
  }
  img {
    width: 129px;
  }
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 200px;
    margin: 20px;
    transition: 0.15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    a {
      text-decoration: none;
      padding: 12px;
      color: #810303;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      small {
        font-size: 10px;
        padding: 4px;
      }
    }
  }
  input[type="text"] {
    width: 224px;
    height: 35px;
}
  input[type="text"] {
    position: absolute;
    left: -143px;
    top: -9px;
  }
  .hotpink {
    background: rgb(192, 0, 0);
  }
  .green {
    background: rgb(228, 168, 3);
  }
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
label{
  width: 100%;
  max-width: 300px;
}
input{
  width: 100%;
  display: flex;
  padding: 15px;
  background-color: white;
  border: 2px solid black;
  color: #111;
  font-size: 15px;
  box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
  height: 58px;    
  transform: skew(-3deg, 1deg);
  font-family: 'Knewave', cursive;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:focus,
  &:valid{
    outline: none;
    ~ ul li{
      @for $i from 1 through 6 {
        &:nth-child(#{$i}){
          &::before{
            filter: blur(20px);
            transform: translate(0, -35px) rotate(-210deg);
          }
          &::after{
            filter: blur(0);
            transform: scale(1) rotate(0);
          }
        }
      }
      @for $i from 1 through 6{
        &:nth-child(#{$i}){
          &::after{
            transition-delay: 200ms + ($i * 200ms);
          }
        }
      }
    }
  }
}
label{
  position: relative;
}
ul{
  position: absolute;
  top: 38px;
  left: -4px;
  margin: 0;
  list-style: none;
  padding-left: 22px;
  position: absolute;
  display: flex;
  pointer-events: none;
  transition: 200ms;
  li{
    letter-spacing: 3px;
    text-transform: uppercase;
    color: transparent;
    pointer-events: none;
    transition: 500ms ease-in-out;
    ::selection{
      color: transparent;
    }
    &::after,
    &::before{
      color: black;
      position: absolute;
      transition: 500ms ease-in-out;
    }
    &::before{
      top: -20px;
    }
    &::after{
      top: -63px;
      transform: scale(0) rotate(210deg);
      filter: blur(20px);
    }
    $chars: s,e,a,r,c,h;
    @each $char in $chars {
      $i: index($chars, $char);
      $x: index($chars, $char);
      $i: $i * 200;
      $y: $x * 12;
      &[#{$char}]::before{
        content: attr($char) quote($char);
        transition-delay: $i+ms;
      }
      &[#{$char}]::after{
        content: attr($char) quote($char);
        left: unquote($y+'px');
        color: #666;
      }
    }
  }
}
div#app input[type=text] {
    position: absolute;
    left: -116px;
    top: -304px;
}
#logosignout {
    position: absolute;
    top: 20px;
    left: 1394px;
}
</style>
