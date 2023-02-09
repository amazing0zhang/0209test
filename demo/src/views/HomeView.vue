<template>
  <div id="main">
    <el-container>
      <el-header>
        <div class="logo" >
          <img src="../assets/HomeView1.jpg">  <!-- 此处请提前准备好图片 -->
        </div>
        <div class="user">
          {{username}}
        </div>
      </el-header>
      <el-main>main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'Main',
    data() {
      return{
        username: ''
      }
    },
    created() {  //页面创建时，把路由传递来的用户名赋值给data中的username，这样就可以在页面显示用户名了（效果见首页的右上角）
      this.username = this.$route.query.name;
    }
  }
</script>
