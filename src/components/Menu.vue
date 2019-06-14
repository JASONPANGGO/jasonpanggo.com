<template>
  <nav :style="{background: '0%' +bgY+ '% / 100% 400% no-repeat ' +'url('+bgURL+')'}" ref="menu">
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
      bgY: 50
    };
  },
  mounted() {
    this.setBg();
    this.bgScroll();
  },

  destroyed() {
    // window.removeEventListener(this.bgScroll);
  },
  methods: {
    bgScroll() {
      this.bgScroll = window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        this.bgY = 50 - scrollTop * 0.1;
      });
    },
    setBg() {
      this.bgURL = assets[`bg${this.bg}`];
    }
  }
};
</script>

<style scoped>
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-right: 50px;
  transition: 0.3s all;
}
.menu-route a:hover {
  color: rgba(255, 255, 255, 0.6);
}
</style>


