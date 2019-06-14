<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <transition name="fade-down">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      footage: "Jason Pang @Copyright All Rights Reserved"
    };
  }
};

// canvas
</script>

<style>
html,body{
  cursor: url("https://jasonpanggo.com:8080/img/cursor.png"),auto;
  overflow-x: hidden;
}
a{
  /* cursor: url("https://jasonpanggo.com:8080/img/cursor-pointer.png"),auto; */
}
::selection {
  background: #ff9632;
  color: #000;
  color: #fff;
}
body {
  margin: 0;
}

.sm i{
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.sm a{
  color: #aaaaaa;
  transition: color 0.3s;
}

.sm a:hover{
  color: black;
  transition: 0.3s ease-in-out;
}


/* 滑动切换动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  /* will-change: transform; */
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

/* 淡入淡出切换动画 */
.fade-up-enter-active,
.fade-up-leave-active,
.fade-down-enter-active,
.fade-down-enter-active{
  transition:  all 500ms;
}

.fade-up-enter{
  opacity: 1;
  /* transform: scale(0.5); */
  overflow: hidden;
}
.fade-up-leave-active{
  opacity: 0;
  transform: scale(1.5);
  overflow: hidden;
}
.fade-down-enter{
  opacity: 0;
  /* transform: scale(0.5); */

}
.fade-down-leave-active{
  opacity: 0;
  /* transform: scale(0.5); */

}
</style>
