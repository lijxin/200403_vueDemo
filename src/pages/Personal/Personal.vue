<template>
    <div class="login">
        <Header title="个人中心"></Header>
        <router-link to="/login">
            <div>登录</div>
        </router-link>
    </div>
</template>

<script>
    import Header from "../../components/Header/Header";
    export default {
        components: {
            Header
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .login
        width 100%
</style>
 