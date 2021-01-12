<template lang="html">
  <div id="app">
    <div class="search-wrapper">
          <input type="text" v-model="search" placeholder="Search location ..">
      
    </div>
    <div class="wrapper">
      <div class="card" v-for="(post, i) in filteredList" :key="i">
        <!-- <a v-bind:href="post.link" target="_blank"> -->
        <div  id="title">
         <router-link to="/menu"> <img :src="post.img" /></router-link>
                 
        {{ post.title  }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Post {
  constructor(title, location, img) {
    this.title = title;
    this.location = location;
    this.img = img;
  }
}
export default {
  name: "user",
  data: function() {
    return {
      search: "",
      postList: [
        new Post( 
          "Panini","Mourouj",
          "https://peppipanini.ca/media/cache/99/92/9992978bac39c00276c2e5c5bc81bc95.png"
        ),
        new Post(
          
          "pizza","Ariena",
          "https://media-cdn.tripadvisor.com/media/photo-s/12/0c/ca/31/logo-of-savoor-restaurant.jpg"
        ),
        new Post(
          
          "Che gusto","Ariena",
          "https://10619-2.s.cdn12.com/rests/original/313_509303845.jpg"
        ),
        new Post(
         
          "KFC", "menzah",
          "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png"
        ),
        new Post(
         
          "Plan B", "Menzah 5",
          "https://medias.monresto.net/partenaires/restaurant/P_191018024745.png"
        ),
        new Post(
         
          "Baguette", "Sokra",
          "https://www.tunisietravail.net/uploads/2020/01/baguetteetbaguette-baguette-et-baguette.png"
        ),
        new Post(
          
          "Burgerking","Naser",
          "https://logos-world.net/wp-content/uploads/2020/04/Burger-King-Logo-1999-present.jpg"
        ),
        new Post(
          
          "Burger","Mourouj",
          "https://image.freepik.com/vecteurs-libre/burger-logo_1366-144.jpg"
        ),
        new Post(
          
          "PizzaHut","Sokra",
          "https://i.pinimg.com/originals/5d/c3/ca/5dc3cae64ecb116dd17aefdf8a969da0.jpg"
        ),
        new Post(
          
          "Mr chef","Ariena",
          "https://thumbs.dreamstime.com/b/print-182159020.jpg"
        ),
      ],
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter((post) => {
        return post.location.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss">
#title{
font-family: 'Hanalei Fill', cursive;

    color:blanchedalmond ; 
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
      font-family: 'Hanalei Fill', cursive;
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
      background-color:#91573f;
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
