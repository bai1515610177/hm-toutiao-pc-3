<template>
  <!-- 全屏容器 -->
  <div class="container-login">
    <!-- 卡片容器 -->
    <el-card class="box-card">
      <!-- logo -->
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <el-form :model="LoginForm">
        <el-form-item>
          <el-input v-model="LoginForm.moblie" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="LoginForm.code"
            placeholder="请输入验证码"
            style="width:68%;margin-right:5px"
          ></el-input>
          <el-button style="width:30%;">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据
      LoginForm: {
        moblie: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang='less'>
.container-login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: pink url("../../assets/login_bg.jpg") no-repeat center / cover;
  .box-card {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>
