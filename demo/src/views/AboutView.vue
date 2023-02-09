<template>
  <div id="box">
    <div class="left">
      <el-button type="primary" @click="all">获取denlu表的全部数据</el-button>
      <h2>-----------------------------------</h2>
      <el-input v-model="id" placeholder="请输入id" class="input"></el-input>
      <el-button type="danger" @click="del">删除</el-button>
      <el-button type="primary" @click="get">查询</el-button>
      <h2>-----------------------------------</h2>
      <el-input v-model="id" placeholder="请输入id" class="input"></el-input>
      <el-input
        v-model="name"
        placeholder="请输入姓名"
        class="input"
      ></el-input>
      <el-input
        v-model="address"
        placeholder="请输入地址"
        class="input"
      ></el-input>
      <el-input v-model="tel" placeholder="请输入电话" class="input"></el-input>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button type="primary" @click="update">修改</el-button>
    </div>
    <div class="right">
      <table class="hovertable">
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>家庭住址</th>
          <th>联系电话</th>
        </tr>
        <!-- <tr v-for="(item, index) in denlu"  v-bind:key="index"> -->
        <tr>
          <td>{{ denlu.id }}</td>
          <td>{{ denlu.name }}</td>
          <td>{{ denlu.address }}</td>
          <td>{{ denlu.tel }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      name: "",
      address: "",
      tel: "",
      denlu:{
      id: "",
      name: "",
      address: "",
      tel: "",
      }
      
    };
  },
  methods: {
    all() {
      //查找denlu表全部数据
      axios
        .get("http://localhost:3000/list/all")
        .then((res) => {
          console.log(res.data[0]);
          this.denlu.id = res.data[0].ID;
          this.denlu.name = res.data[0].姓名;
          this.denlu.address = res.data[0].家庭住址;
          this.denlu.tel = res.data[0].联系电话;
          console.log(this.denlu.id);
          console.log(this.denlu.name);
          console.log(this.denlu.address);
          console.log(this.denlu.tel);
        })
        .catch((err) => {
          console.log("获取数据失败" + err);
        });
    },
    del() {
      //删除操作
      axios
        .get("http://127.0.0.1:3000/list/del", {
          params: {
            id: this.id,
          },
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.status == 200) {
            this.all();
          } else {
            this.$message({
              message: "删除失败",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },
    get() {
      //查询操作
      axios
        .get("http://127.0.0.1:3000/list/get", {
          params: {
            id: this.id,
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.denlu = res.data;
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },
    add() {
      //添加操作
      axios
        .get("http://127.0.0.1:3000/list/add", {
          params: {
            id: this.id,
            name: this.name,
            address: this.address,
            tel: this.tel,
          },
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.status == 200) {
            this.all();
          } else {
            this.$message({
              message: "添加失败",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },
    update() {
      //修改操作
      axios
        .get("http://127.0.0.1:3000/list/update", {
          params: {
            id: this.id,
            name: this.name,
            address: this.address,
            tel: this.tel,
          },
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.status == 200) {
            this.all();
          } else {
            this.$message({
              message: "修改失败",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },
  },
};
</script>
