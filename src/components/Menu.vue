<template>
  <nav
    class="fullscreen"
    :style="{background: '0%' +bgY+ '% / 100% 400% no-repeat ' +'url('+bgURL+')', opacity:opacity}"
    ref="menu"
  >
    <div class="menu-name">
      <router-link to="/">
        <img :src="nameImg">
      </router-link>
    </div>

    <div class="menu-route">
      <router-link to="/">HOME</router-link>
      <router-link to="/frontend">FRONTEND</router-link>
      <router-link to="/photography">PHOTOGRAPHY</router-link>
      <router-link to="/design">MUSE</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>
    <div
      class="arrow"
      :style="{opacity:arrow,transform:'translateY('+arrow*2+'0px)'}"
      @click="scroll"
    >
      <i class="fa fa-angle-down fa-4x" aria-hidden="true"></i>
    </div>
  </nav>
</template>
<script>
var assets = require("../assets");
export default {
  name: "Menu",
  props: {
    bg: String
  },
  data() {
    return {
      nameImg: assets.signatureWhite,
      bgURL: "",
      bgY: 50,
      arrow: "1",
      opacity:0
    };
  },
  mounted() {
    this.setBg();
    this.bgScroll();
    this.controlArrow();
    this.loadImg();
  },
  methods: {
    loadImg(){
      var img = new Image();
      img.src = this.bgURL;
      img.onload = ()=> {
        this.set = this.src;
        this.opacity = 1;
      }
    },
    bgScroll() {
      this.bgScroll = window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        this.bgY = 50 - scrollTop * 0.25;
      });
    },
    setBg() {
      this.bgURL = assets[`bg${this.bg}`];
    },
    controlArrow() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          this.arrow = "0";
        } else {
          this.arrow = "1";
        }
      });
    },
    scroll() {
      var height = document.documentElement.clientHeight;
      document.documentElement.scrollTop = height;
    }
  }
};
</script>

<style scoped>
@media (min-width: 960px) {
  .fullscreen {
    width: 100vw;
    height: 100vh;
    background-size: 100% !important;
  }
  .menu-route {
    right: 50px;
  }
}

a {
  color: white;
  text-decoration: none;
}
nav {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 230px;
}

.menu-name {
  margin-left: 100px;
  margin-top: 60px;
  width: 200px;
  float: left;
}
.menu-name img {
  width: 100%;
}
.menu-route {
  letter-spacing: 2px;
  float: right;
  margin-top: 80px;
  margin-right: 100px;
}
.menu-route a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-right: 50px;
  transition: 0.3s all;
}
.menu-route a:hover {
  color: rgba(255, 255, 255, 0.6);
}

.arrow {
  position: absolute;
  bottom: 20px;
  display: block;
  width: 100vw;
  text-align: center;
  color: white;
  transition: 0.3s all;
  cursor: pointer;
}

.fa-angle-down{
    transition: 0.3s;
}

.fa-angle-down:hover{
  transform: translateY(-20px);
}

@media (max-width: 960px) {
  nav {
    height: 100vh;
    background-size: 400% 100% !important;
    background-position-y: 0 !important;
    justify-content: center;
  }
  .menu-name {
    position: relative;
    margin: 0;
    margin-top: 100px;
    width: 100vw;
    text-align: center;
  }
  .menu-name img {
    width: 50vw;
  }
  .menu-route {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 80px auto;
    width: 100vw;
  }
  .menu-route a {
    margin-right: 0;
    line-height: 2rem;
  }
  .arrow {
    position: absolute;
    bottom: 20px;
    width: 100vw;
    text-align: center;
    display: block;
    color: white;
  }
}
</style>


