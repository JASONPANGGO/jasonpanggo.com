<template>
  <div class="container">
    <Menu bg="5"></Menu>
    <div class="mainContainer">
      <Letschat />
      <Management />
      <Game2048 />
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import Foot from "../components/Foot";
import Management from "../components/Management";
import Letschat from "../components/Letschat";
import Game2048 from '../components/2048';
import axios from "axios";

export default {
  name: "Frontend",
  components: {
    Menu,
    Foot,
    Management,
    Letschat,
    Game2048
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    async getTest() {
      await axios.get("/api/users/test").then(res => {
        console.log(res);
      });
    },
    async getUsers() {
      await axios.get("/api/users/list").then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.mainContainer {
  width: 100vw;
  /* height: 100vh; */
  margin-top: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



/* socket.io */

/* socket.io */
</style>


