<template>
  <div class="project-container">
    <div class="title">MANAGEMENT SYSTEM - COFFEE BREW LOG</div>
    <div class="project" id="system">
      <el-menu
        :default-active="activeIndex"
        id="system-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item>
          <b>咖啡冲煮日记 BREW LOG</b>
        </el-menu-item>
        <el-menu-item index="1">每天一杯</el-menu-item>
        <el-menu-item index="2">数据记录</el-menu-item>
        <el-submenu index="3">
          <template slot="title">咖啡分类</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
      <el-scrollbar style="height: 100%;" class="system-scrollbar">
        <div class="system-main">
          <!-- 滚动条 -->
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in 10" :key="item">
              <el-card id="system-card" shadow="hover">
                <img
                  class="card-img"
                  src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                />
                <div class="card-content">
                  <span>expresso</span>
                  <div class="card-more">
                    <time>{{new Date().toString()}}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Management",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style scoped>
@import "../css/project.css";
#system {
  width: 70vw;
  height: 600px;
  overflow: hidden;
}
#system-menu {
}
.system-main {
  margin: 30px;
}
#system-card {
  margin-top: 20px;
}
.system-scrollbar {
  overflow-x: hidden;
}
.card-img {
  width: 100%;
  display: block;
}
.card-content {
  padding: 14px;
  font-size: 18px;
}
.card-more {
  margin-top: 14px;
  font-size: 14px;
  color: #aaaaaa;
}
</style>