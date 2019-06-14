<template>
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
</template>
<script>
export default {
  name: "Foot",
  data() {
    return {
      footage: "Jason Pang @Copyright All Rights Reserved"
    };
  }
};
</script>
<style scoped>
.foot{
  /* position: relative; */
  font-family: sans-serif;
  font-size: 12px;
  color: white;
  bottom: 5px;
  width: 100%;
  height: 140px;
  background-color: black;
  text-align: center;
  margin: 0;
  padding-top: 80px;
}
.contact{

}
.foot a{
  color: white;
}

.sm:hover a{
  color: gray;
}

.foot a:hover{
  color: white;
}
</style>


