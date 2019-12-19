<template>
  <div class="project-container">
    <el-dialog
      title="Submit your score!"
      :visible.sync="dialogVisible"
      width="30%"
      :fullscreen="mobileSize"
    >
      <el-form>
        Your Score:
        <el-tag type="info">{{score}}</el-tag>
        <el-form-item label="Your Name:">
          <el-input v-model="name" placeholder="please type in your nickname..." />
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">cancel</el-button>
        <el-button type="primary" @click="submit">submit</el-button>
      </span>
    </el-dialog>

    <div class="title"></div>

    <div class="project">
      <div class="control" :class="{mobileSize: mobileSize}">
        <el-tag type="info" id="scoreTag">{{score}}</el-tag>
        <div class="plus" :class="{fadeUp: plus}">+{{plus}}</div>

        <el-tag type="danger" v-if="lose" class="status">GAME OVER</el-tag>

        <el-tag type="info" v-if="!lose" class="status">MAKE 2048</el-tag>

        <el-button @click="toggleRank" class="control-button rankListButton" type="info" circle>
          <i class="el-icon-medal-1"></i>
        </el-button>
        <el-button class="control-button" @click="move('restart')" type="info" icon circle>
          <i class="el-icon-refresh-right"></i>
        </el-button>
      </div>
      <div
        class="gameBoard"
        @touchstart="startSlide"
        @touchend="endSlide"
        :class="{mobileSize: mobileSize}"
      >
        <div class="row" v-for="(row, i) in square" :key="i">
          <div
            class="cell"
            :class="{cell0: cell==0}"
            v-for="(cell, j) in row"
            :key="j"
            :style="{backgroundColor:backgroundColor(cell),color:fontColor(cell)}"
          >{{cell ? cell : ''}}</div>
        </div>
      </div>
      <div class="msg">{{msg}}</div>
      <div class="rankListCover" v-if="rankList" @click="toggleRank">
        <div class="rankList">
          <div class="user" v-for="(user, index) in users" :key="index">
            <div>{{index+1}}. {{user.name}}</div>
            <div>{{user.score}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Game2048",
  data() {
    return {
      name: "",
      square: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      control: ["restart"],
      colorRadtio1: 10,
      colorRadtio2: 10,
      colorRadtio3: 0,
      score: 0,
      lose: false,
      plus: "",
      msg: "press the key ←,↑,→,↓ on keyboard to make movement.",
      startX: null,
      startY: null,
      mobileSize: false,
      timer: null,  
      users: [],
      dialogVisible: false,
      dialogWidth: "30%",
      rankList: false,
      ip: "",
      latitude: "",
      longitude: ""
    };
  },
  computed: {
    backgroundColor() {
      return function(num) {
        num = Math.log2(num);
        return `rgb(${255 - num * this.colorRadtio1},${255 -
          num * this.colorRadtio2},${255 - num * this.colorRadtio3})`;
      };
    },
    fontColor() {
      return function(num) {
        num = Math.log2(num);
        return `rgb(${num * this.colorRadtio1},${num *
          this.colorRadtio2},${num * this.colorRadtio3})`;
      };
    }
  },
  mounted() {
    this.randomFill();
    document.onkeydown = e => {
      let key = e.keyCode;
      switch (key) {
        case 37:
          e.preventDefault();
          this.move("left");
          break;
        case 38:
          e.preventDefault();
          this.move("up");
          break;
        case 39:
          e.preventDefault();
          this.move("right");
          break;
        case 40:
          e.preventDefault();
          this.move("down");
          break;
        default:
          break;
      }
    };
    if (window.navigator.userAgent.search(/Android|iPhone/g) !== -1) {
      console.log("移动端");
      this.mobileSize = true;
      this.dialogWidth = "100%";
    } else {
      console.log("PC端");
    }

    this.getRankList();
    this.getIp();
  },
  methods: {
    getlocationpoint() {
      let dataThis = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          dataThis.latitude = position.coords.latitude; //获取纬度
          dataThis.longitude = position.coords.longitude; //获取经度
        });
      } else {
        alert("不支持定位功能");
      }
    },
    onInput(e) {
      console.log(e);
      this.nameInput = e;
    },
    toggleRank() {
      if (!this.rankList) this.getRankList();
      this.rankList = !this.rankList;
    },
    getIp() {
      axios.get("https://jasonpanggo.com/getIP").then(e => {
        this.ip = e.data;
      });
    },
    submit() {
      axios
        .post("https://jasonpanggo.com/game2048/submit", {
          name: this.name,
          score: this.score,
          location: this.ip
        })
        .then(res => {
          if (res.data == "ok") {
            this.dialogVisible = false;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    getRankList() {
      axios
        .get("https://jasonpanggo.com/game2048/list")
        .then(res => {
          console.log(res);
          let data = res.data;
          data.sort((a, b) => b.score - a.score);
          console.log(data);
          this.users = res.data;
        })
        .catch(err => {
          if (err) console.error(err);
        });
    },
    startSlide(e) {
      e.preventDefault();
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    endSlide(e) {
      e.preventDefault();
      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      let deltaX = endX - this.startX;
      let deltaY = endY - this.startY;
      console.log(deltaX, deltaY);
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) this.move("right");
        else this.move("left");
      } else if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) this.move("down");
        else this.move("up");
      }
    },
    move(dir) {
      let dataThis = this;
      let plusScore = 0;
      /**
       * 一次向左移动的操作
       * @param {Array} sqaure
       */
      function push(square) {
        let output = [];
        square.forEach(row => {
          let r = [];
          row = row.filter(e => e !== 0);
          for (let i in row) {
            if (i !== 0 && row[i] == row[i - 1]) {
              plusScore += row[i];
              r.pop();
              r.push(row[i] * 2);
              row[i] = NaN;
            } else {
              r.push(row[i]);
            }
          }
          while (r.length < 4) r.push(0);
          output.push(r);
        });
        return output;
      }

      /**
       * 旋转二维数组矩阵
       * @param {Array} square 矩阵
       * @param {Boolean} clockwise 顺逆时针
       */
      function rotate(square, clockwise) {
        let output = [[], [], [], []];
        for (let i = 0; i < square.length; i++) {
          for (let j = 0; j < square.length; j++) {
            if (clockwise) output[j][square.length - i - 1] = square[i][j];
            else output[square.length - j - 1][i] = square[i][j];
          }
        }
        return output;
      }

      /**
       * 通过diff移动前后的矩阵判断是否更新data以及是否random
       */
      function diffSquare(_s) {
        if (_s.toString() !== this.square.toString()) {
          this.square = _s;
          this.randomFill();
        }
      }

      /**
       * 判断还是否可以继续游戏
       * @param {Array} arr
       */
      function checkLose(arr) {
        if (!arr.some(row => row.indexOf(0) !== -1)) {
          for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
              if (j + 1 < arr[i].length) {
                if (arr[i][j] == arr[i][j + 1]) return false;
              }
              if (i + 1 < arr.length) {
                if (arr[i][j] == arr[i + 1][j]) return false;
              }
            }
          }
          return true;
        } else {
          return false;
        }
      }

      /**
       * 方向判断
       */
      // 还没输就可以继续移动
      if (!this.lose) {
        switch (dir) {
          case "left":
            diffSquare.call(this, push(this.square));
            break;
          case "right":
            diffSquare.call(
              this,
              rotate(
                rotate(push(rotate(rotate(this.square, true), true)), false),
                false
              )
            );
            break;
          case "down":
            diffSquare.call(
              this,
              rotate(push(rotate(this.square, true)), false)
            );
            break;
          case "up":
            diffSquare.call(
              this,
              rotate(push(rotate(this.square, false)), true)
            );
            break;
          default:
            break;
        }

        if (dataThis.timer) {
          dataThis.plus = "";
          clearTimeout(dataThis.timer);
        }
        dataThis.score += plusScore;
        dataThis.plus = plusScore;
        dataThis.timer = setTimeout(() => {
          dataThis.plus = "";
        }, 500);
      }
      if (dir == "restart") {
        this.lose = false;
        this.score = 0;
        this.plus = "";
        this.square = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.randomFill();
      }

      if (checkLose(this.square)) {
        this.dialogVisible = true;
        this.lose = true;
      }
    },
    /**
     * 每一次移动之后随机生成1或2个方块2
     */
    randomFill() {
      for (let i = 0; i < Math.round(Math.random()) + 1; i++) {
        if (this.square.some(row => row.indexOf(0) !== -1)) {
          let randomX = [];
          for (let i = 0; i < this.square.length; i++) {
            if (this.square[i].indexOf(0) !== -1) {
              randomX.push(i);
            }
          }
          let x = Math.floor(Math.random() * randomX.length);
          let randomY = [];
          this.square[randomX[x]].forEach((e, i) => {
            if (e == 0) randomY.push(i);
          });
          let y = Math.floor(Math.random() * randomY.length);
          this.square[randomX[x]][randomY[y]] = 2;
        }
      }
    }
  }
};
</script>

<style scoped>
@import "../css/project.css";
.project {
  margin-top: 0;
  border: none;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: left;
}
.gameBoard {
  width: 400px;
  height: 400px;
  padding: 10px 15px;
  background-color: #eeeeee;
  border-radius: 10px;
  border: 3px solid #dddddd;
  margin: 10px;
  font-size: 2em;
}
.row {
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cell {
  width: 90px;
  height: 90px;
  background-color: #cccccc;
  border: 2px solid #bbbbbb;
  border-radius: 5px;
  text-align: center;
  line-height: 90px;
  transition: 0.5s;
}
.cell::selection {
  background-color: transparent;
  color: black;
}
.control {
  width: 420px;
  height: 40px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.control i {
  font-size: 1.5em;
  line-height: 1em;
}
.con {
  display: flex;
  text-align: center;
  margin: 10px;
  font-size: 1.2em;
  color: rgb(10, 10, 10);
  font-size: 0.8em;
}
#scoreTag {
  position: absolute;
  left: 0;
}
.cell0 {
  opacity: 0;
}
.control-button {
  position: absolute;
  max-width: 40px;
  max-height: 40px;
  text-align: center;
  font-size: 1em;
  display: flex;
  justify-content: center;
  right: 0;
}
.rankListButton {
  right: 50px;
}
.control-button i::before {
  display: block !important;
  transform: translateY(-4px) !important;
}
.plus {
  font-size: 0.7em;
  opacity: 0;
  margin-left: 50px;
}
.fadeUp {
  animation: 0.5s fade;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  10% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
.msg {
  font-size: 12px;
  color: #bbbbbb;
}
.mobileSize {
  transform: scale(0.8);
}
.rankListCover {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rankList {
  width: 200px;
  height: 400px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 5px;
  right: 50%;
  margin-right: -100px;
  transition: 0.5s all;
  overflow: scroll;
  overflow-x: hidden;
}
.rankList .user {
  width: 100%;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  justify-content: space-between;
}
.status {
  position: absolute;
  left: 50%;
  width: 100px;
  text-align: center;
  margin-left: -50px;
}
.system-scrollbar {
  overflow-x: hidden;
}
el-button:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
</style>