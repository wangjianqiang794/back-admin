<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside /></el-aside>
    <el-container>
      <el-header><common-header/></el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from '../components/CommonHeader.vue';
export default {
  name: "Main",
  components: { CommonAside, CommonHeader },
};
</script>

<style scoped lang="scss">
.el-aside>div {
  height: 100%;
}
.el-header {
  background: #333;
  color: white;
}
.el-main {
  padding-top: 0;
  background-color: aliceblue;
}
</style>
