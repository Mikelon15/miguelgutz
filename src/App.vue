<template>
  <div class="main">
      <link href="https://fonts.googleapis.com/css?family=B612+Mono|Exo+2&display=swap" rel="stylesheet">
      <!-- <Story /> -->
      <div class="name">
        <h1>
          Miguel Gutierrez
        </h1>
      </div>
      <div class="links">
          <ul>
              <li class="noselect"><a>about me</a></li>
              <li class="noselect"><a>projects</a></li>
              <li class="noselect"><a>projects</a></li>
          </ul>
      </div>
      <div class="description">
        <p> I am a web developer </p>
        <!-- <p> I'm a web developer. Building interfaces to give users a better experience through functionality, speed, and user-friendliness. </p> -->
      </div>
      <div class="image">
          <!-- <img src="./assets/prof2.jpg" alt="my coffee"> -->
      </div>
  </div>
</template>

<script>
import { Story } from './components/Story';

export default {
  name: 'app',
  components: { }
}
</script>

<style lang="less">
body {
  color: rgb(102, 7, 7);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.main {
  // display: inline-grid;
  // justify-items: center;
  // grid-auto-flow: row;
  width: 100%;
  background-image: url('/img/prof2.4434352c.jpg');
}

.name {
  display: grid;
}
.links {
  display: grid;
}
.image {
  display: grid;
}

.links {
  width: 100%;
  >ul {
    padding: 0;
    display: flex;
    justify-content: center;
    >li {
      list-style: none;
      width: 20%;
      display: inline-block;
      text-align: center;
      margin: 0 10px;
      padding: 5px 15px;
      box-shadow: 3px 3px 0px 1px orangered;
      transition: box-shadow 0.15s ease-in-out;
      z-index: 100;
    }
  }
}

.image {
  width: 100%;
  >img{
    border-radius: 15px;
    width: 100%;
  }
}

.name>h1 {
    text-transform: uppercase;
    padding: 10px;
    font-size: 32px;
    z-index: 1;
    display: inline-block;
    text-align: center;
}

body {
    font-family: 'Exo 2', sans-serif;
    background-color: rgb(255, 244, 223);
    overflow-x: hidden;
}

.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media only screen and (max-width: 600px) {

  .links>ul>li:hover {
        cursor: pointer;
        padding: 5px 10px;
        // box-shadow: 4px 3px 0px 2px rgb(189, 0, 0);
  }
}


@media only screen and (min-width: 800px) {
  .name {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    >h1 {
      width: 60%
    }
  }
  .links>ul {
    justify-content: flex-end;
    padding-right: 2%;
    >li {
      width: 15%;
    }
  }
  .image {
    width: 110%;
    margin-left: -5%;
    margin-top: -20%;
  }
}

@media only screen and (min-width: 1000px) {
  .name {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    >h1 {
      width: 60%;
    }
  }
  .links>ul {
    display: block;
    margin-right: 7%;
    padding: 0;
    >li {
      background: none;
      border: none;
      box-shadow: none;
      text-align: right;
      width: 100%;
      margin: 5px;
      border-radius: 5px;

      >a {
        border-radius: 5px;
        padding: 5px 100px;
        width: 25%;
        border: solid 1px gray;
      }
    }
  }
  .links>ul>li>a:hover {
    cursor: pointer;
    padding: 5px 100px;
    // box-shadow: 4px 3px 0px 2px rgb(189, 0, 0);
  }
  .image {
    margin-top: -20%;
    width: 100%;
    margin-left: 0;
    img {
      width: 70%;
    }
  }
}
</style>
