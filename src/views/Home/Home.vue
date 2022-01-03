<template>
  <div>
    <!-- 这是Home 得组件 -->
  <el-row class="home" :gutter="20">
 <el-col :span="8" style="margin-top:20px">
   <el-card shadow="hover">
     <div class="user">
       <img :src="userImg">
       <div class="userInfo">
         <p class="name">Admin</p>
         <p class="access">超级管理员</p>
       </div>
     </div>
     <div class="login-info">
       <p>上次登录事件：<span>2021-8-19</span></p>
       <p>上次登录地点：<span>北京</span></p>
     </div>
   </el-card>
 </el-col>
 <el-col :span="16"></el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userImg: require('../../assets/images/user.jpg')
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>