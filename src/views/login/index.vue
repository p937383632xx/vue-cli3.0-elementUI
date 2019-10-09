<template>
    <div class="login-container">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
            <h2 class="login-title">后台管理系统登录</h2>
            <el-form-item label="账号" prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                   username:'',
                   password:''
                },
                rules:{
                    username: [
                        { required: true, message: '账号不能为空', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                      // 提交表单给后台验证是否正确
                    } else {

                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        }
    }
</script>

<style scoped>
    .login-form{
        width: 350px;
        /*上下间隙160px,自动居中*/
        margin: 260px auto;
        background-color: rgba(255,255,255,0.6);
        padding: 30px;
        /*设置圆角*/
        border-radius: 20px;
    }
    .login-container{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../../assets/123456.jpg");
        background-size: 100%;
    }
    .login-title{
        text-align: center;
    }
</style>