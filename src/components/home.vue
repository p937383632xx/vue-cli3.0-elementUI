<template>
    <div>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>

<script>
    // 导入布局组件
    import AppHeader from './AppHeader'
    import AppNavbar from './AppNavbar'
    import AppMain from './AppMain'

    export default {
        components: {AppHeader, AppNavbar, AppMain}
    }
</script>
<style scoped>
   /*头部区域*/
    .header{
        position: absolute;/*绝对位置*/
        line-height: 60px;
        top: 0px;/*到顶部距离*/
        left: 0px;/*到左侧距离*/
        right: 0px;/*到右侧距离*/
        background-color: darkslategrey;
    }
   .navbar{
       position: absolute;/*绝对位置*/
       width: 280px;
       top: 59px;
       left: 0px;
       bottom: 0px;/*到底部的距离*/
       overflow-y: auto;
       background-color: #545c64;
   }
   .main{
       position: absolute;/*绝对位置*/
       top: 59px;
       left: 280px;
       right: 0px;
       bottom: 0px;/*到底部的距离*/
       padding: 10px;
       overflow-y: auto;
       background-color: white;
   }

</style>