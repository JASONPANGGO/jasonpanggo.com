<template>
    <div class="display" :style="{display:display}" @click="hide"><img :src="src"></div>
</template>
<script>
import VueEvent from './VueEvent'

export default {
  name:'Display',
  props:{
    img:String
  },
  data(){
    return{
      src:'',
      display:'none'
    }
  },
  mounted(){
    this.receiveIMG()
  },
  methods:{
    receiveIMG(){
      VueEvent.$on('transportIMG',(src)=>{
        this.src = src;
        this.display = 'flex';
      })
    },
    hide(){
      this.display = 'none';
    }
  }
}
</script>
<style scoped>
.display{
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.9);
  display: none;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
}
.display img{
  max-width: 50vw;
  height: 100%;
  max-height: 70vh;
}


</style>


