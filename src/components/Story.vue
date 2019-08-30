<template>
    <div class="main">
        <h3>
            <b><i>This</i></b> is the story of my life
        </h3>
        <div class="container">
            <div class="left">
                <img id="toolbox" src="./../assets/toolbox.png" alt="">
                <img id="mouse" src="./../assets/mouse.png" alt="">
                <img id="nes" src="./../assets/nes.svg" alt="">
            </div>
            <div class="right">
                <p>
                    I always dream of having video games and 
                    computers and all sorts of technology
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.component('Story', {
    
})
</script>

<style lang="less">
    .full {
        width: 100%;
    }
    .left {
        // padding-top: 150px;
        width: 100%;
        // background-color: snow;
        img {
            display: inline;
            width: 150px;
            position: relative;
        }
        #toolbox {
            width: 10vw;
            top: 200px;
            left: -15vw;
            // left: 20vw;
            transform: rotate(-15deg);
        }
        #nes {
            width: 20vw;
            left: 5vw;
        }
        #mouse {
            left: 5vw;
            width: 15vw;
            // top: 25vh;
            // left: 65vw;
        }
    }
    .right {
        width: 60vw;
        border-radius: 50px;
        padding: 25px;
        height: 200px;
        background-color: snow;
        position: absolute;
        left: 20vw;
        top: 43vh;
        z-index: -1;
    }
    .container {
        width: 100%;
    }
    .main {
        text-align: center;
        width: 100%;
        height: 1000px;
    }
</style>
