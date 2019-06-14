<template>
  <div class="container">
    <Menu bg="4"></Menu>
    <div class="mainContainer">
      <div class="title">WHO AM I?</div>
      <div class="myPhoto">
        <img :src="myphoto1">
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nulla voluptates earum deleniti id nam excepturi repellat totam eveniet doloribus illum officia, minima vel, modi iste sit accusantium saepe dolor!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam, aperiam expedita obcaecati maxime officiis voluptates esse quod ut delectus repudiandae? Earum saepe rem deserunt obcaecati dolorum. Itaque, laborum fugit!
        </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam deserunt atque eligendi perferendis, consequuntur repellat voluptate quasi iste assumenda dolor explicabo, ratione adipisci suscipit quas ullam velit voluptas maiores possimus?
      </div>
      <div class="myPhoto">
        <img :src="myphoto2">
      </div>
      <div class="contact">
          <h4>Contact</h4>
        Email: jason_pang@126.com
        <br>Ins: thejasonpangtheory
        <br>Github: jasonpanggo
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Menu from "./Menu";
// import Photo from './Photo'
import Foot from "./Foot";
var assets = require("../assets");
export default {
  name: "About",
  components: {
    Menu,
    Foot
  },
  data() {
    return {
      footage: "Jason Pang @Copyright All Rights Reserved",
      myphoto1: assets.myPhoto1,
      myphoto2: assets.myPhoto2
    };
  }
};
</script>
<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  /* flex-flow: wrap; */
  min-height: 800px;
  margin: auto;
  margin-top: 230px;
  margin-bottom: 0px;
  align-items: center;
}
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
  /* font-weight: bold; */
  margin-top: 100px;
  margin-bottom: 50px;
  color: rgb(0,0,0,0.8)
}
.content {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 60%;
  color: rgb(0,0,0,0.6)
}
.myPhoto {
  width: 60%;
}
.myPhoto img {
  width: 100%;
}
.contact{
    margin-top: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(0,0,0,0.6);
    margin-bottom: 50px;
    line-height: 30px;
}
</style>