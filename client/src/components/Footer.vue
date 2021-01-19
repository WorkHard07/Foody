<template>
  <footer>
    <div class="content">
      <div class="container">
        <h1>About US</h1>
        <p>
          Foody is dedicated to connect restorers to their clients and to allow
          them to respond effectively to orders
          //aaaaaa
        </p>
        <div class="nav">
          <router-link to="/contactus">
            <h8 class="btn"> contact us </h8></router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
footer {
  
  padding-bottom: 30px;
  left: 0;
  bottom: 0;
  width: 80%;
  font-family: 'Gloria Hallelujah', cursive;
}
.content {
  position: absolute;
  top: 1200px;
  left: 100px;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 94%;
  max-width: 800px;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
}

.content {
  position: relative;
  padding: 25px;
  color: #b00b13;
  font-weight: 80;
  letter-spacing: 0.4px;
  line-height: 30px;
  font-family: "Lucida Console", "Courier New", monospace;
}

.content p {
  font-weight: 80;
  color: #b00b13;
  letter-spacing: 0.4px;
  font-size: 1.18em;
  line-height: 25px;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
}

.nav {
  max-width: 350px;
  padding: 20px 0;
  margin: 0 auto;
}

.btn {
  padding: 15px 30px;
  border-radius: 50px;
  background-color: #c90c15;
  font-family: "Lucida Console", "Courier New", monospace;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.5s ease 0s;
  font-weight: bold;

  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.btn:hover {
  background-color: #9e0404;
  font-family: "Lucida Console", "Courier New", monospace;
}
</style>
