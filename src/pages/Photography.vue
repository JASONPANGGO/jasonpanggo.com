<template>
  <div class="container">
    <Display :img="selected"></Display>
    <Menu bg="1"></Menu>
    <div class="mainContainer">
      <div class="title">TORONTO BLUE</div>
      <div class="album">
        <Photo img="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/1547818958183.jpg"></Photo>
        <Photo img="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/1547557774048.jpg"></Photo>
        <Photo img="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/1547695503527.jpg"></Photo>
        <Photo img="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/1548554120458.jpg"></Photo>
        <Photo img="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/1547557789894.jpg"></Photo>
        <Photo img="https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/1549071947851.jpg"></Photo>
      </div>
      <div class="title">ROOFTOP</div>
      <div class="album">
        <Photo img='https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/mmexport1517247376558-01.jpg'></Photo>
        <Photo img='https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/mmexport1516349604041-01.jpg'></Photo>
        <Photo img='https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/mmexport1517246708233-01.jpg'></Photo>
        <Photo img='https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180305095213.jpg'></Photo>
        <Photo img='https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/IMG_6957-01.jpg'></Photo>
        <Photo img='https://jasonpanggo-1256320333.cos.ap-shanghai.myqcloud.com/532067330437981822.jpg'></Photo>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import Photo from "../components/Photo";
import Foot from "../components/Foot";
import Display from "../components/Display";
export default {
  name: "Photography",
  components: {
    Menu,
    Photo,
    Foot,
    Display
  },
  data() {
    return {
      footage: "Jason Pang @Copyright All Rights Reserved",
      selected: ""
    };
  }
};
</script>
<style scoped>
.mainContainer {
  margin-top: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100vh;
}
.album {
  display: flex;
  flex-flow: wrap;
  margin-bottom: 0px;
  justify-content: center;
}
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 50px;
  margin-bottom: 10px;
}
@media (max-width: 480px) {
  .mainContainer{
    margin-top: 100vh;
  }
}
</style>


