<template>
  <div id="building">
    <div class="denglukuang">
      登录
      <el-input
        id="zh"
        placeholder="请输入账号"
        v-model="inputusername"
        clearable
      ></el-input>
      <el-input
        id="mm"
        placeholder="请输入密码"
        v-model="inputpsw"
        show-password
      ></el-input>
      <div id="btn">
        <el-button id="dl" type="primary" @click="denglu">登录</el-button>
        <el-button id="zc" type="primary" @click="zhuce">注册</el-button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      inputusername: "",
      inputpsw: "",
    };
  },
  methods: {
    zhuce: function () {
      this.$router.replace({ name: "zhuce" });
    },

    denglu(){
			// 控制台输出登录信息
			console.log('已进入登录事件')
			this.$Axios({
				url: '/users/login',
				method: 'post',
				data: {
					username: this.form.name,
					password: this.form.password,
					type: this.form.type
				},
				success: (result) => {
					if (result === '用户名或者账号输入错误') {
						this.$message.error('用户名或者账号输入错误')
						this.form.name = ''
						this.form.password = ''
					} else {
						window.localStorage.setItem('token', result.jwt_token)
						if (this.form.type === 1) this.$router.push('/admin/student')
					}
				},
				error: (err) => {
					console.log(err)
				}
			})
		},








  },




};
</script>



<style >
#zh,
#mm {
  color: rgb(0, 0, 0);
  height: 50px;
  background-color: rgb(255, 255, 255);
}

#dl {
  float: left;
}

#zc {
  float: right;
}
#btn {
  margin-top: 20px;
}
</style>>
<style scoped>
.denglukuang {
  border: 10px;
  color: white;
  width: 400px;
  font-size: 5ch;
  margin: auto;
  margin-top: 260px;
  text-align: center;
}

#building {
  background: url("../assets/login.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>