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
import Menu from '../components/Menu'
import Photo from '../components/Photo'
import Foot from '../components/Foot'
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

@media (max-width: 480px) {
  .mainContainer{
    margin-top: 100vh;
  }
}
</style>


