<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <div class="foot">
      <div class="contact">
        <span class="sm">
          <a href="https://weibo.cn/u/2395251203">
          <i class="fa fa-weibo fa-2x"></i>
          </a>
          <a href="">
          <i class="fa fa-instagram fa-2x"></i>
          </a>
          <a href="https://github.com/JASONPANGGO">
          <i class="fa fa-github fa-2x"></i>
          </a>
        </span>
      </div>
      {{footage}}
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      footage: "Jason Pang @CopyrightAll Rights Reserved"
    };
  }
};

// canvas
</script>

<style>
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


.foot {
  font-size: 12px;
  color: #bbbbbb;
  position: fixed;
  bottom: 5px;
  width: 100%;
  text-align: center;
}


</style>
