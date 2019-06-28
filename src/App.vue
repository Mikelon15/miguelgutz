<template>
  <div class="main">
      <link href="https://fonts.googleapis.com/css?family=B612+Mono|Exo+2&display=swap" rel="stylesheet">
      
      <div class="name">
        <h1>
          Miguel Gutierrez
        </h1>
      </div>
      <div class="links">
          <ul>
              <li class="noselect"><a>my story</a></li>
              <li class="noselect"><a>projects</a></li>
              <li class="noselect"><a>drip</a></li>
          </ul>
      </div>
      <div class="image">
          <img src="./assets/desert-coffee2.png" alt="my coffee">
          <!-- <div class="laptop"></div> -->
      </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: { }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  display: inline-grid;
  justify-items: center;
  grid-auto-flow: row;
  width: 100%;
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
      background-color: white;
      border: solid 1px lightgray;
      border-radius: 5px;
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
    width: 100%;
  }
}

.name>h1 {
    text-transform: uppercase;
    border: 1px solid black;
    padding: 10px;
    font-size: 32px;
    background-color: snow;
    box-shadow: 15px 15px 0px 3px orangered;
    z-index: 1;
    display: inline-block;
    text-align: center;
}

body {
    font-family: 'Exo 2', sans-serif;
    background-color: rgb(254, 235, 200);
    color: rgb(45, 45, 45);
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
  .name>h1 {
    background-color: white;
  }

  .links>ul>li:hover {
        background-color: #fcfcfc;
        cursor: pointer;
        color: black;
        padding: 5px 10px;
        box-shadow: 4px 3px 0px 2px rgb(189, 0, 0);
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
    padding-right: 15%;
    >li {
      width: 15%;
    }
  }
  .image {
    width: 110%;
    margin-left: -5%;
    margin-top: -20%;
  }
  
  // .links>ul>li:hover {
  //       background-color: #fcfcfc;
  //       cursor: pointer;
  //       color: black;
  //       padding: 5px 10px;
  //       box-shadow: 4px 3px 0px 2px rgb(189, 0, 0);
  // }
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
        padding: 5px 30px;
        width: 25%;
        border: solid 1px gray;
        background-color: white;
      }
    }
  }
  .links>ul>li>a:hover {
    background-color: #fcfcfc;
    cursor: pointer;
    color: black;
    padding: 5px 30px;
    box-shadow: 4px 3px 0px 2px rgb(189, 0, 0);
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

// img {
//     /* background-color: transparent; */
//     /* object-fit: contain; */
//     /* width: 100%; */
//     position: absolute;
//     ;
//     top: 25%;
//     width: 100%;
//     /* background-color: violet; */
//     /* background-blend-mode: color; */
//     background: lightyellow;
// }

// .image {
//     width: 50%;
//     max-width: 500px;
//     /* height: 25%; */
//     position: absolute;
//     display: inline;
//     top: 10%;
//     left: 5%;
// }

// .links {
//     position: absolute;
//     top: 25%;
//     right: 25%;
//     width: 20%;
// }

// ul,
// li {
//     list-style: none;
// }

// li {
//     background-color: white;
//     margin: 15px 0;
//     padding: 5px 15px;
//     width: 100%;
//     box-shadow: 3px 3px 0px 1px orangered;
//     transition: box-shadow 0.15s ease-in-out;
//     border-radius: 3px;
// }

// li:hover {
  //     background-color: rgb(250, 249, 249);
    // cursor: pointer;
    // color: black;
    // box-shadow: 4px 3px 0px 2px rgb(189, 0, 0);
// }

// .laptop {
//     width: 35%;
//     height: 90px;
//     position: absolute;
//     background-color: transparent;
//     z-index: 1;
//     left: 52%;
//     margin-top: 75%;
// }

// .laptop:hover {
//     background-blend-mode: darken;
//     background-color: rgba(255, 106, 106, 0.1);
// }

</style>
