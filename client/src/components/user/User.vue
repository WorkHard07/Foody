<template lang="html">
  <div id="app">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search location .." />
    </div>
    <div class="wrapper">
      <div class="card" v-for="(restos, i) in filteredList" :key="i">
        <!-- <a v-bind:href="post.link" target="_blank"> -->
        <div id="title">
          <router-link :to="{ name: 'menu', params: { id: restos._id } }">
            <img :src="'http://127.0.0.1:3000/images/' + restos.picture"
          /></router-link>
          {{ restos.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import stars from './stars.vue';
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
  // data: function() {
  //   return {
  //     search: "",
  //     postList: [

  //       new Post(
  //         "MCdonadls",
  //         "Menzah",
  //         "https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_640.png"
  //       ),
  //       new Post(
  //         "Che gusto","Ariena",
  //         "https://www.gustocheemoziona.com/wp-content/uploads/2017/12/GUSTO-CHE-EMOZIONA-TRASP.png"
  //       ),
  //       new Post(
  //         "KFC", "menzah",
  //         "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png"
  //       ),
  //       new Post(
  //         "Plan B", "Menzah 5",
  //         "https://medias.monresto.net/partenaires/restaurant/P_191018024745.png"
  //       ),
  //       new Post(

  //         "Baguette", "Sokra",
  //         "https://annugeo.com/images/photos/ag42-baguette_baguette_tunisie.jpg"
  //       ),
  //       new Post(

  //         "Burgerking","Naser",
  //         "https://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png"
  //       ),
  //       new Post(

  //         "Burger","Mourouj",
  //         "https://images.vexels.com/media/users/3/129606/isolated/preview/74fb78d3222ba12833ea9275c53a4935-burger-logo-by-vexels.png"
  //       ),
  //       new Post(
  //         "PizzaHut","Sokra",
  //         "https://assets.stickpng.com/images/5842997fa6515b1e0ad75adf.png"
  //       ),
  //       new Post(
  //         "Mr chef","Ariena",
  //         "https://thumbs.dreamstime.com/b/print-182159020.jpg"
  //       ),
  //     ],
  //   };
  // },

  methods: {
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

<style lang="scss" scoped>
#title {
  font-family: "Hanalei Fill", cursive;
  color: blanchedalmond;
}
html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}
body {
  background-image: url("https://cdn.wallpapersafari.com/12/28/mvfcT9.jpg");
  background-repeat: no-repeat;
  margin: top;
  background-color: #8f1b1b;
  width: 112%;
}
input[type="text"] {
  width: 223px;
  height: 43px;
}
.wrapper {
  position: absolute;
  top: 138px;
  left: 461px;
}
div#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .search-wrapper {
    position: relative;
    label {
      position: absolute;
      font-size: 12px;
      font-family: "Hanalei Fill", cursive;
      color: rgba(247, 8, 8, 0.5);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: 0.15s all ease-in-out;
    }
    input {
      padding: 4px 12px;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(180, 7, 1, 0.979);
      transition: 0.15s all ease-in-out;
      background-color: #91573f;
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
      color: #990404;
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
}
</style>
