<template>
  <div class="project-container">
    <div class="title">2048</div>
    <div class="project">
      <div class="gameBoard">
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
      <div class="control">
        <div class="con">score: {{score}}</div>
        <el-tag type="info">{{status}}</el-tag>
        <el-button
          class="restart"
          v-for="(dir, index) in control"
          :key="index"
          @click="move(dir)"
          type="info"
          icon="el-icon-refresh-right"
          circle
        >
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game2048",
  data() {
    return {
      square: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      control: ["restart"],
      colorRadtio: 3,
      score: 0,
      status: ""
    };
  },
  computed: {
    backgroundColor() {
      return function(num) {
        num = num / 2;
        return `rgb(${255 - num * this.colorRadtio},${255 -
          num * this.colorRadtio},${255 - num * this.colorRadtio})`;
      };
    },
    fontColor() {
      return function(num) {
        num = num / 2;
        return `rgb(${num * this.colorRadtio},${num * this.colorRadtio},${num *
          this.colorRadtio})`;
      };
    }
  },
  mounted() {
    this.randomFill();
    document.onkeydown = e => {
      e.preventDefault();
      let key = e.keyCode;
      switch (key) {
        case 37:
          this.move("left");
          break;
        case 38:
          this.move("up");
          break;
        case 39:
          this.move("right");
          break;
        case 40:
          this.move("down");
          break;
        default:
          break;
      }
    };
  },
  methods: {
    move(dir) {
      let dataThis = this;
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
              dataThis.score += row[i];
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
        } else if (!_s.some(row => row.indexOf(0) !== -1)) {
          dataThis.status = "GAME OVER";
        }
      }

      /**
       * 方向判断
       */
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
          diffSquare.call(this, rotate(push(rotate(this.square, true)), false));
          break;
        case "up":
          diffSquare.call(this, rotate(push(rotate(this.square, false)), true));
          break;
        default:
          this.status = "TRY TO MAKE A 2048";
          this.square = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
          ];
          this.randomFill();
          break;
      }
    },
    /**
     * 每一次移动之后随机生成1或2个方块2
     */
    randomFill() {
      for (let i = 0; i < Math.round(Math.random()) + 1; i++) {
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
};
</script>

<style scoped>
@import "../css/project.css";
.project {
  border: none;
  height: 500px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
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
  width: 400px;
  height: 40px;
  margin: 10px;
  display: flex;
  justify-content:space-between;
    align-items: center;
}
.control i {
  font-size: 1.5em;
  line-height: 1em;
}
.con {
  line-height: 1.2em;
  text-align: center;
  margin: 10px;
  font-size: 1.2em;
  color: rgb(10, 10, 10);
}
.cell0 {
  opacity: 0;
}
.restart {
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>