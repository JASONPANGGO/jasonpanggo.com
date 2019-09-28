<template>
  <div class="container" @click="drawnow">
    <svg
      class="star"
      v-for="(item, index) in stars"
      :key="index"
      :style="{left:item.left+'px',top:item.top+'px'}"
      xmlns="http://www.w3.org/2000/svg"
      id="main-svg"
      width="50px"
      height="50px"
      viewBox="-50 -50 100 100"
    >
      <polygon id="star" points="0 -10 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2" fill="#fff" />
    </svg>
    <svg width="300 " height="200" class="sig">
      <path
        :class="{draw:draw}"
        stroke="#fff"
        d="m134.44848,114.06783c0.80406,-0.86981 1.85266,-2.25596 1.20609,-5.21884c-0.41308,-1.89292 -5.03109,-5.20746 -10.05074,-6.08864c-4.76206,-0.83596 -10.44499,0.70251 -16.88525,6.08864c-5.17767,4.3302 -9.68192,11.3699 -7.23653,17.39612c2.5242,6.22046 11.35784,11.05034 20.10148,15.2216c7.73356,3.68939 13.9453,4.75224 15.27713,7.82825c0.34105,0.78768 -0.79039,1.52193 -5.22639,1.73961c-8.43395,0.41385 -16.57147,2.05409 -23.31772,0.86981c-3.76474,-0.66089 -4.54592,-2.50343 -2.81421,-6.52354c2.17461,-5.04828 7.96579,-10.59384 14.07104,-13.91689c7.55033,-4.10959 17.23948,-7.60035 23.31772,-9.13296c5.98933,-1.51019 8.44262,-1.30471 8.44262,1.73961c0,3.91413 -1.62983,9.38096 -5.62842,16.09141c-4.05163,6.79946 -4.87521,13.82069 -8.44262,16.09141c-0.69299,0.4411 -0.98879,-0.45817 -0.80406,-1.30471c0.61962,-2.83937 2.52605,-6.63126 6.43248,-8.69806c3.42617,-1.8127 7.23653,-2.60942 9.64871,-2.60942c0.80406,0 1.46942,1.21143 2.01015,3.47922c0.80953,3.39518 1.49234,5.64575 3.61827,6.08864c1.5791,0.32897 5.20641,-0.4611 7.63856,-2.60942c1.99397,-1.76126 2.89425,-3.5073 3.21624,-5.65374c0.20364,-1.35753 -0.54075,-1.77496 -2.41218,-0.86981c-1.83508,0.88757 -2.81118,2.52921 -3.21624,6.08864c-0.19649,1.72658 -0.11494,4.00618 0.80406,5.21883c0.72091,0.95128 1.62878,1.26351 4.82436,0.86981c5.3293,-0.65657 10.45277,-3.91413 16.08119,-6.52354c5.62842,-2.60942 6.26595,-5.39898 6.8345,-4.78393c0.28427,0.30752 0.4456,2.28349 -0.40203,5.21883c-0.53608,1.85647 -2.01015,3.04432 -2.01015,2.60942c0,-2.17451 1.09974,-4.83954 4.0203,-7.82825c2.10604,-2.1552 4.69878,-3.74321 7.23653,-3.91413c2.046,-0.13779 3.51989,2.66683 4.42233,4.34903c1.45512,2.71247 2.66035,4.81704 2.81421,5.21883c0.21758,0.56823 1.22552,0.73651 3.21624,0.4349c2.89853,-0.43915 5.92161,-3.78671 10.8548,-5.65374c2.76263,-1.04555 5.25235,-2.08793 7.23653,-1.73961c1.25491,0.2203 1.40184,0.90482 2.41218,1.73961c1.15196,0.95181 4.0203,2.60942 7.23653,2.60942c3.21624,0 5.28708,0.24588 6.03045,-0.86981c0.47015,-0.70562 0.09432,-0.8036 0.40203,0c0.43516,1.13646 1.60812,1.73961 4.82436,1.73961c3.21624,0 7.23653,-1.30471 10.45277,-2.60942l1.60812,-0.86981l0.80406,0l0.40203,0"
        id="svg_15"
        stroke-width="1.5"
        fill="none"
      />
    </svg>

    <div class="cake" v-if="cake" :class="{fadeIn:cake}">
      <div class="velas">
        <div class="fuego"></div>
        <div class="fuego"></div>
        <div class="fuego"></div>
        <div class="fuego"></div>
        <div class="fuego"></div>
      </div>
      <div class="cobertura"></div>
      <div class="bizcocho"></div>
      <h1>Happy Birthday</h1>
    </div>
    <h2 id='1' v-if="display[0]"  :class="{fadeIn:display[0]}">希望张雯雯</h2>
    <h2 id="2" v-if="display[1]" :class="{fadeIn:display[1]}">早日实现</h2>
    <h2 id="3" v-if="display[2]" :class="{fadeIn:display[2]}">睡眠自由</h2>
    <img v-show="display[3]" :class="{fadeIn:display[3]}" style="margin-top:30px" width="180" src="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/111.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "HBDTOSheron",
  data() {
    return {
      draw: true,
      stars: [
        {
          left: 400,
          top: 500
        },
        {
          left: 400,
          top: 500
        },
        {
          left: 400,
          top: 500
        },
        {
          left: 400,
          top: 500
        },
        {
          left: 400,
          top: 500
        },
        {
          left: 400,
          top: 500
        }
      ],
      display:[false,false,false,false],
      cake: false,
      count:0
    };
  },
  mounted() {
    this.twinkle(); 
  },
  methods: {
    twinkle() {
      let width = window.innerWidth - 100;
      let height = window.innerHeight - 100;
      setInterval(() => {
        for (let i in this.stars) {
          let left = Math.random() * width;
          let top = Math.random() * height;
          this.stars[i].left = left;
          this.stars[i].top = top;
        }
      }, 1000);
      setInterval(() => {}, 500);
    },
    drawnow() {
      this.draw = !this.draw;
      if(this.count == 0){
          this.cake = true;
          this.count = 1;
      }else if(this.count == 1){
          this.display[0] = true;
          this.count = 2
      }else if(this.count == 2){
          this.display[1] = true;
          this.count = 3
      }else if(this.count == 3){
          this.display[2] = true;
          this.count = 4
      }else if(this.count == 4){
          this.display[3] = true;
          this.count = 5
      }
      
    }
  }
};
</script>

<style scoped>
.fadeIn{
    animation: fadeIn 1s;
}
@keyframes fadeIn {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.container {
  width: 100vw;
  height: 100vh;
  /* background: radial-gradient(circle at 100vw 0, rgb(36, 53, 81), rgb(9, 9, 9)); */
  background: radial-gradient(
    circle at 100vw 0,
    rgb(36, 53, 81) 0%,
    rgb(61, 0, 0) 50%,
    rgb(9, 9, 9) 100%
  );
  background-size: 300% 300%;
  animation: shimmer 5s linear alternate-reverse infinite;
  overflow: hidden;
  transition: 2s;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

@keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}

.star {
  position: absolute;
  animation: twinkle 1s reverse infinite;
}
.sig {
  position: absolute;
  top: 70vh;
  left: 50%;
  margin-left: -50vw;
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
.st0 {
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
}
.draw {
  stroke-dasharray: 1124;
  animation: draw 2s alternate-reverse infinite;
}

@keyframes draw {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1124;
  }
}

@import url(https://fonts.googleapis.com/css?family=Lato:300italic);

html,
body {
  height: 100%;
}
body {
  background: #a27bcc;

  background: radial-gradient(ellipse at center, #a27bcc 0%, #6c5299 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a27bcc', endColorstr='#6c5299', GradientType=1);
}
/* ============================================== POSITION
*/
.cake {
  position: absolute;
  top: 66%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  transition: 0.5s ease-in-out;
}
/* ============================================== BASE
*/
.cake:after {
  background: #ebe3e1;
  border-radius: 100px;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 2px;
}
/* ============================================== Candle
*/
.velas {
  background: #ffffff;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2.5px;
  margin-top: -8.333333333333334px;
  width: 5px;
  height: 16.666666666666668px;
}
.velas:after,
.velas:before {
  background: rgba(255, 0, 0, 0.4);
  content: "";
  position: absolute;
  width: 100%;
  height: 2.2222222222222223px;
}
.velas:after {
  top: 25%;
  left: 0;
}
.velas:before {
  top: 45%;
  left: 0;
}
/* ============================================== Fire
*/
.fuego {
  border-radius: 100%;
  box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
  position: absolute;
  top: -12px;
  left: 50%;
  margin-left: -3.3333333333333335px;
  width: 6.666666666666667px;
  height: 12.5px;
}
.fuego:nth-child(1) {
  -webkit-animation: fuego 2s infinite;
}
.fuego:nth-child(2) {
  -webkit-animation: fuego 1.5s infinite;
}
.fuego:nth-child(3) {
  -webkit-animation: fuego 1s infinite;
}
.fuego:nth-child(4) {
  -webkit-animation: fuego 0.5s infinite;
}
.fuego:nth-child(5) {
  -webkit-animation: fuego 0.2s infinite;
}
/* ============================================== Animation Fire
*/
@keyframes fuego {
  0% {
    background: rgba(254, 248, 97, 0.5);
    -webkit-transform: translateY(0) scale(1);
  }
  50% {
    background: rgba(255, 50, 0, 0.1);
    -webkit-transform: translateY(-20px) scale(0);
  }
  100% {
    background: rgba(254, 248, 97, 0.5);
    -webkit-transform: translateY(0) scale(1);
  }
}
/* ============================================== Frosting
*/
.cobertura {
  background: #ece7e3;
  border-radius: 50px;
  position: absolute;
  top: 60%;
  left: 50%;
  margin-left: -27.77777777777778px;
  margin-top: -5px;
  width: 55.55555555555556px;
  height: 12.5px;
  z-index: 10;
}
.cobertura:after,
.cobertura:before {
  background: #ece7e3;
  border-radius: 100px;
  content: "";
  position: absolute;
  width: 5px;
  height: 10px;
}
.cobertura:after {
  top: 6.666666666666667px;
  right: 14.285714285714286px;
}
.cobertura:before {
  top: 10px;
  right: 9.090909090909092px;
}
/* ============================================== BIZCOCHO
*/
.bizcocho {
  background: #6d3826;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
  width: 50px;
  height: 33.333333333333336px;
}
.bizcocho:after,
.bizcocho:before {
  background: rgba(236, 231, 227, 0.6);
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
}
.bizcocho:after {
  top: 30%;
  left: 0;
}
.bizcocho:before {
  top: 60%;
  left: 0;
}
/* ============================================== TEXT
*/
h1,
p {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
h1 {
  /* color: #6c5299; */
  width: 40vw;
  margin-left: calc(50px - 20vw);
  color: white;
  font-size: 1em;
  margin-top: 6.8em;
}
p {
  color: rgba(236, 231, 227, 0.6);
  font-size: 0.8em;
  line-height: 2em;
}

h2 {
  width: 100vw;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  font-size: 18px;
  transition: 0.5s ease-in-out;
}

img{
  transition: 0.5s ease-in-out;
}
</style>