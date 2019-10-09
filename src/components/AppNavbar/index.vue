<template>
    <div class="navbar">
        <!--default-active  ：默认选中的菜单
            router="true"  true表示开启路由模式，开启之后，index值代表的就是路由地址
        -->
        <el-menu
                :router="true"
                default-active="/"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>应用性能中心</span>
                </template>
                <el-menu-item index="/a">
                    <i class="el-icon-menu"></i>
                    <span slot="title">四川农村信用社应用墙</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>自定义仪表盘</span>
                </template>
                <el-menu-item index="/b">
                    <i class="el-icon-menu"></i>
                    <span slot="title">基础设施</span>
                </el-menu-item>
                <el-menu-item index="/bb">
                    <i class="el-icon-menu"></i>
                    <span slot="title">指标统计</span>
                </el-menu-item>
                <el-menu-item index="/bbb">
                    <i class="el-icon-menu"></i>
                    <span slot="title">db2日志视图</span>
                </el-menu-item>
                <el-menu-item index="/bbbb">
                    <i class="el-icon-menu"></i>
                    <span slot="title">运维日志</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>巡检及报表</span>
                </template>
                <el-submenu index="3-1">
                    <template slot="title">新一代电子银行</template>
                    <el-menu-item index="/a">
                        <i class="el-icon-menu"></i>
                        <span slot="title">能力中心</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3-2">
                    <template slot="title">特色业务平台</template>
                    <el-menu-item index="/aa">
                        <i class="el-icon-menu"></i>
                        <span slot="title">基础平台，特色业务</span>
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/d">
                <i class="el-icon-menu"></i>
                <span slot="title">日志搜索</span>
            </el-menu-item>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>后台管理</span>
                </template>
                <el-submenu index="5-1">
                    <template slot="title">数据管理</template>
                    <el-menu-item index="/host">
                        <i class="el-icon-menu"></i>
                        <span slot="title">主机设备</span>
                    </el-menu-item>
                    <el-menu-item index="/aa">
                        <i class="el-icon-menu"></i>
                        <span slot="title">日志设备</span>
                    </el-menu-item>
                    <el-menu-item index="/aaa">
                        <i class="el-icon-menu"></i>
                        <span slot="title">查看日志</span>
                    </el-menu-item>
                    <el-menu-item index="/aaaa">
                        <i class="el-icon-menu"></i>
                        <span slot="title">数据资源管理</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5-2">
                    <template slot="title">任务管理</template>
                    <el-menu-item index="/warn">
                        <i class="el-icon-menu"></i>
                        <span slot="title">统计及告警</span>
                    </el-menu-item>
                    <el-menu-item index="/bb">
                        <i class="el-icon-menu"></i>
                        <span slot="title">仪表盘管理</span>
                    </el-menu-item>
                    <el-menu-item index="/bbb">
                        <i class="el-icon-menu"></i>
                        <span slot="title">应用墙管理</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5-3">
                    <template slot="title">资源管理</template>
                    <el-menu-item index="/hardware">
                        <i class="el-icon-menu"></i>
                        <span slot="title">硬件资产</span>
                    </el-menu-item>
                    <el-menu-item index="/cc">
                        <i class="el-icon-menu"></i>
                        <span slot="title">应用资产</span>
                    </el-menu-item>
                    <el-menu-item index="/ccc">
                        <i class="el-icon-menu"></i>
                        <span slot="title">脚本模板</span>
                    </el-menu-item>
                    <el-menu-item index="/cccc">
                        <i class="el-icon-menu"></i>
                        <span slot="title">清洗规则</span>
                    </el-menu-item>
                    <el-menu-item index="/ccccc">
                        <i class="el-icon-menu"></i>
                        <span slot="title">告警配置</span>
                    </el-menu-item>
                    <el-menu-item index="/cccccc">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统字典</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5-4">
                    <template slot="title">Agent系统</template>
                    <el-menu-item index="/monitor">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Agent系统监控</span>
                    </el-menu-item>
                    <el-menu-item index="/dd">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Agent管理</span>
                    </el-menu-item>
                    <el-menu-item index="/ddd">
                        <i class="el-icon-menu"></i>
                        <span slot="title">指标实时获取</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5-5">
                    <template slot="title">系统管理</template>
                    <el-menu-item index="/usersystem">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统用户</span>
                    </el-menu-item>
                    <el-menu-item index="/ee">
                        <i class="el-icon-menu"></i>
                        <span slot="title">权限管理</span>
                    </el-menu-item>
                    <el-menu-item index="/eee">
                        <i class="el-icon-menu"></i>
                        <span slot="title">登录系统</span>
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style scoped>
    .el-menu{
        border-right: none;
    }
</style>
