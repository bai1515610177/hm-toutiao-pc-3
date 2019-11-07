<template>
  <!-- 全屏容器 -->
  <div class="container-login">
    <!-- 卡片容器 -->
    <el-card class="box-card">
      <!-- logo -->
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <!-- :model="form" 属性绑定 表单的数据对象-->
      <!-- Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。 -->
      <!-- status-icon属性为输入框添加了表示校验结果的反馈图标 -->
      <el-form :model="loginForm" :rules="loginRules" status-icon ref='loginForm'>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:68%;margin-right:5px"
          ></el-input>
          <el-button style="width:30%;">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click='login'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号
    const checkMobile = (rule, value, callback) => {
      // 判断value是否符合手机号格式
      // 第一位 1 第二位 3-9 9位数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式有误'))
      }
    }
    return {
      // 表单数据
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 验证规则
      loginRules: {
        mobile: [
          // required是否必填，如不设置，则会根据校验规则自动生成boolean—false
          // trigger触发的事件
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 手机号采用自定义校验
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 整体校验-登录
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 发axios请求
          this.$http.post('authorizations', this.loginForm).then(res => {
            // 成功,跳转
            console.log(0)

            this.$router.push('/')
          }).catch(() => {
            // 失败，提示
            this.$message.error('手机号或验证码有误')
          })
        }
      })
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
