<template>
<div class="container">
    <Menu bg='5'></Menu>
    <div class="mainContainer">
        <div class="title">LET'S CHAT</div>
        <iframe src="http://jasonpanggo.com:3100/" frameborder="0" class="project"></iframe>
    </div>
    <Foot></Foot>
</div>    
</template>
<script>
import Menu from './Menu'
import Foot from './Foot'
export default {
    name:'Frontend',
    components:{
        Menu,Foot
    }
}
</script>
<style scoped>
.mainContainer{
    width: 100vw;
    height: 100vh;
    margin-top: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title{
    font-size: 20px;
    font-family: 'Segoe UI';
    margin-bottom: 10px;
}

.project{
    width: 50vw;
    height: 20vw;
    border: 1px solid #eeeeee
}
</style>


