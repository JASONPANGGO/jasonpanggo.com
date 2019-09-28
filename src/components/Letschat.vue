<template>
  <div class="project-container">
    <div class="title">LET'S CHAT</div>
    <div class="project">
      <ul id="messages"></ul>
      <form action>
        <input id="m" autocomplete="off" />
        <button>Send</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
    name:'Letschat'
}
</script>

<style scoped>
@import "../css/project.css";
</style>