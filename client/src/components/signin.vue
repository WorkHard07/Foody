<template>
  <div id="app">
    <article>
      <div class="container" :class="{ 'sign-up-active': signUp }">
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-left">
              <p>Please login with your personal info</p>
              <button class="invert" id="signIn" @click="signUp = !signUp">
                Log In
              </button>
            </div>
            <div class="overlay-right">
              <p>Please enter your personal details</p>
              <button class="invert" id="signUp" @click="signUp = !signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <form class="sign-up">
          <h2>Create login</h2>
          <div>Use your email for registration</div>
          <input type="text" placeholder="Name" v-model="Username" />
          <input type="email" placeholder="Email" v-model="Useremail" />
          <input type="password" placeholder="Password" v-model="Password" />
          <button @click="create">Sign Up</button>
        </form>
        <form class="sign-in">
          <h2>Sign In</h2>
          <div>Use your account</div>
          <input type="email" placeholder="Email" v-model="Useremail" />
          <input type="password" placeholder="Password" v-model="Password" />
          <button type="button" @click="login">Log In</button>
        </form>
      </div>
    </article>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "signin",
  data: () => {
    return {
      signUp: false,
      Username: "",
      Useremail: "",
      Password: "",
    };
  },
  methods: {
    create() {
      var user = {
        Usermail: this.Useremail,
        Username: this.Username,
        Password: this.Password,
      };
      axios.post("http://localhost:3000/signup", user);
    },
    login() {
      var user = {
        Usermail: this.Useremail,
        Password: this.Password,
      };
      axios
        .post("http://localhost:3000/signin", user)
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            console.log(response.data);
            document.cookie = `username=${response.data.user._id},email=${response.data.user.Usermail}`;
            this.Useremail = "";
            this.Password = "";
            window.location.replace("/user");
          }
        })
        .catch((error) => {
          this.useremail = "";
          this.password = "";
          alert("your informations are wrong please check your inputs");
          console.log(error);
        });
      // if(user.data){
      //                 document.cookie = `username=${user.data._id},${user.data.useremail}`
      //                 this.Useremail = '';
      //                 this.Password = '';
      //                 window.location.replace('/user')
      //             } else {
      //                 this.useremail = '';
      //                 this.password = '';
      //                 alert("your informations are wrong please check your inputs")
      //             }
    },
  },
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
form.sign-up {
  height: 110%;
  width: 50%;
}
form.sign-in {
  height: 100%;
  width: 54%;
}
#app {
  font-family: Tahoma;
  font-size: 1rem;
  color: #222;
  background-image: url("https://www.teahub.io/photos/full/6-63475_fast-food-background-hd.jpg");
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
}

.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #ebac02, rgb(204, 204, 204));

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }
  .container.sign-up-active {
    width: 1133px;
    height: 646px;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #f1ad46, #f8b101);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2 {
  margin: 0;
}

p {
  margin: 20px 0 30px;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  border-radius: 20px;
  border: 1px solid #f8b101;
  background-color: #f3b008;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #f8b600, #ccc);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #f8b101;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}

/* Youtube Link */
#yt_link {
  position: absolute;
  right: 0;
  left: 0;
  bottom: -200px;
  display: block;
  width: 160px;
  text-align: center;
  color: red;
  font-size: 15px;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  animation: showYtLink 1.5s ease 3s forwards;
}

@keyframes showYtLink {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 20px;
  }
}
</style>
