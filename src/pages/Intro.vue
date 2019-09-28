<template>
  <div class="center-container">
    <div class="intro" ref="followTarget" :style="{transform:rotate}">
      <div class="nameImg">
        <img
          :src="nameImg"
          oncontextmenu="return false;"
          onselectstart="return false;"
        >
      </div>
      <div class="motto">{{motto}}</div>
      <div class="linkto">
        <router-link
          :to="{path:'/'+item.path}"
          v-for="(item,index) in link"
          :key="index"
          class="link"
        >
          <img :src="item.img" class="logo">
          {{item.name}}
        </router-link>
      </div>
    </div>
    <div class="foot">
    <div class="contact">
      <span class="sm">
        <a href="https://weibo.cn/u/2395251203">
          <i class="fa fa-weibo fa-2x"></i>
        </a>
        <a href>
          <i class="fa fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/JASONPANGGO">
          <i class="fa fa-github fa-2x"></i>
        </a>
      </span>
    </div>
    {{footage}}
  </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
var assets = require("../assets")
export default {
  name: "Intro",
  data() {
    return {
      name: "JASON PANG",
      nameImg: assets.signature,
      link: [
        {
          path: "frontend",
          img: require("../assets/code.png"),
          name: "Frontend Projects"
        },
        {
          path: "photography",
          img: require("../assets/photography.png"),
          name: "Photography"
        },
        {
          path: "design",
          img: require("../assets/design.png"),
          name: "Design and Muse"
        }
      ],
      motto: "Design, Code, & Photography",
      rotate: "",
      b: "beta",
      g: "gamma",
      footage: "Jason Pang @Copyright All Rights Reserved"
    };
  },
  mounted() {
    this.background();
    this.followMouse();
  },
  methods: {
    background() {
      document.addEventListener(
        "touchmove",
        function(e) {
          e.preventDefault();
        },
        { passive: false }
      );
      var c = document.getElementsByTagName("canvas")[0],
        x = c.getContext("2d"),
        pr =  window.devicePixelRatio || 1,
        w = window.innerWidth,
        h = window.innerHeight,
        f = 90,
        q,
        m = Math,
        r = 0,
        u = m.PI * 2,
        v = m.cos,
        z = m.random;
      c.width = w * pr;
      c.height = h * pr;
      x.scale(pr, pr);
      x.globalAlpha = 0.6;
      function i() {
        x.clearRect(0, 0, w, h);
        q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
        while (q[1].x < w + f) d(q[0], q[1]);
      }
      function d(i, j) {
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        var k = j.x + (z() * 2 - 0.25) * f,
          n = y(j.y);
        x.lineTo(k, n);
        x.closePath();
        r -= u / -50;
        x.fillStyle =
          "#" +
          (
            ((v(r) * 127 + 128) << 16) |
            ((v(r + u / 3) * 127 + 128) << 8) |
            (v(r + (u / 3) * 2) * 127 + 128)
          ).toString(16);
        x.fill();
        q[0] = q[1];
        q[1] = { x: k, y: n };
      }
      function y(p) {
        var t = p + (z() * 2 - 1.1) * f;
        return t > h || t < 0 ? y(p) : t;
      }
      document.onclick = i;
      i();
    },
    followMouse() {
      let centerX = window.screen.width / 2;
      let centerY = window.screen.height / 2;
      let maxRotate = 30;
      // 陀螺仪
      window.addEventListener("deviceorientation", e => {
        this.b = e.beta;
        this.g = e.gamma;

        let rotateX = (this.b / 90) * 60;
        let rotateY = (this.g / 90) * -60;
        this.rotate = ` perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      // 鼠标
      if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.addEventListener("mousemove", e => {
          let deltaX = e.clientX - centerX;
          let deltaY = e.clientY - centerY;

          let rotateX = (deltaX / 500) * maxRotate;
          let rotateY = (deltaY / 500) * -maxRotate;

          this.rotate = ` perspective(500px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-container {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intro {
  transform-style: preserve-3d;
  width: 500px;
  height: 300px;
  text-align: center;
}
.name {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
  text-align: center;
}
.nameImg img {
  margin-top: -70px;
  width: 100%;
  transition: 0.3s;
  cursor: pointer;
}
.nameImg img:hover {
  transform: skew(20px)
}

.motto,
.link {
  font-family: "Segoe UI";
  font-size: 1rem;
  letter-spacing: 2px;
  color: #aaaaaa;
  text-align: center;
  height: 20px;
  text-decoration: none;
}

.link {
  color: #686868;
  display: block;
  margin-top: 10px;
  text-decoration: none;
  width: fit-content;
  transition: 0.3s;
}

.link:hover {
  color: black;
}

.link::after {
  display: block;
  content: "";
  width: 0;
  height: 1px;
  margin-left: 1.3rem;
  margin-top: 2px;
  background-color: black;
  transition: 0.3s ease-in-out;
}
.link:hover::after {
  width: 90%;
}

.linkto {
  margin-top: 70px;
  position: relative;
  left: 50%;
  margin-left: -100px;
}

.logo {
  vertical-align: middle;
  width: 1rem;
  height: 1rem;
}

img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

canvas {
  position: fixed;
  z-index: -10;
}

.foot {
  position: absolute;
  font-family: sans-serif;
  font-size: 12px;
  color: #bbbbbb;
  bottom: 5px;
  width: 100%;
  text-align: center;
}
</style>
