<template>
    <div class="header">
        <a href="#/">
            <img class="logo" src="../../assets/1111.jpg">
            <span class="comcony">后台管理系统</span>
        </a>
        <el-dropdown class="menu" trigger="click">
            <span class="el-dropdown-link">
            用户名：<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-fold">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<style>
    .logo{
        vertical-align: middle;
        padding: 0px 10px 0px 40px;
    }
    .comcony{
        position: absolute;
        color: azure;
    }
    .menu{
        float: right;
        margin-right: 40px;
    }
    .el-dropdown-link{
        color: white;
        cursor: pointer;/*将鼠标箭头改为小手*/
    }
</style>