<template>
<div class="container">
    <Menu bg='3'></Menu>
    <div class="mainContainer">
        <Photo></Photo>
        <Photo></Photo>
        <Photo></Photo>
        <Photo></Photo>
        <Photo></Photo>
        <Photo></Photo>
    </div>
    <Foot></Foot>
</div>    
</template>
<script>
import Menu from './Menu'
import Photo from './Photo'
import Foot from './Foot'
export default {
    name:'Design',
    components:{
        Menu,Photo,Foot
    }
}
</script>
<style scoped>
.mainContainer{
  display: flex;
  flex-flow: wrap;
  margin: auto;
  margin-top: 230px;
  margin-bottom: 0px;
  justify-content: center;
}
</style>


