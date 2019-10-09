<template>
    <div>
        <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline">
            <el-form-item label="用户名称">
                <el-input v-model="formInline.user" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="">根据用户名查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="findall">查询所有用户信息</el-button>
            </el-form-item>
        </el-form>
        <el-table
                :data="userList"
                border
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="用户ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="role_id"
                    label="用户角色名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="用户名称">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="用户密码">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="邮箱号">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="手机号">
            </el-table-column>
            <el-table-column
                    prop="wechatid"
                    label="微信号">
            </el-table-column>
            <el-table-column
                    prop="accounttype"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import testApi from '@/api/test'
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                userList:[]
            }
        },
        methods: {
            findall(){
                testApi.getList().then(response=>{
                    this.userList=response.data
                })
            },
        }
    }
</script>
