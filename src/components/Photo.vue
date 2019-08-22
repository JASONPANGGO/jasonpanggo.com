<template>
  <div class="container" @click="select">
    <img :src="set" :style="{opacity:opacity}">
  </div>
</template>

<script>
import VueEvent from './VueEvent'

export default {
  name: "Photo",
  props: {
    img: String
  },
  data() {
    return {
      src: this.img,
      set:'',
      opacity:0
    };
  },
  mounted() {
    this.loadImg()
  },
  methods:{
    loadImg(){
      var img = new Image();
      img.src = this.src;
      img.onload = ()=> {
        this.set = this.src;
        this.opacity = 1;
      }
    },
    select(){
      VueEvent.$emit('transportIMG',this.src)
    }
    
  }
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 400px;
  margin: 50px;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  cursor: pointer;
}
img {
  min-width: 400px;
  height: 100%;
  transition: 0.3s all;
}


@media(max-width: 480px){
  .container{
    height: auto;
  }

  img{
    width: 100%;
    height: auto;
    margin-top: 10px;
  } 
}

/* .container {
  width: 100vw;
  height: 100vh;
 background: radial-gradient(circle at 100vw 0, rgb(36,53,81), rgb(9,9,9));
} */
</style>


