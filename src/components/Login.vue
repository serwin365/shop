<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form ref="loginFormref" :model="loginForm" :rules="loginFormRules">
        <el-form-item class="login_form" prop="username">
          <el-input placeholder="请输入用户名"
          prefix-icon="el-icon-user-solid"
          v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <el-form-item class="login_form" prop="password">
          <el-input placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          type="password"
          v-model="loginForm.password">
          </el-input>
        </el-form-item>
        <el-form-item class="login_button">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resrtForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormref.validate((vaewe) => {
        console.log(vaewe)
      })
    },
    resrtForm () {
      console.log(this)
      this.$refs.loginFormref.resetFields()
    }
  }
}
</script>

<style class="less" scoped>
  .login_container {
    background-color: rgb(63, 97, 97);
    height: 100%;
    padding-top: 300px;
  }
  .login_box {
    width: 500px;
    height: 400px;
    margin: auto;
    background-color: rgb(240, 240, 240);
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .avatar_box {
    width: 100%;
    height: 50%;
    text-align: center;
  }
  .login_form {
    width: 60%;
    margin: 17px auto;
  }
  .login_button{
    margin-top: 20px;
    text-align: center;
  }
</style>
