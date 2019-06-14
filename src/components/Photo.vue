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
</style>


