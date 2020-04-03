<template>
    <div class="main" v-show="$route.name != 'footer'">
        <i class="iconfont icon-arrow-left" @click="back()"></i>
        <div class="loginTitle">饱了么</div>
        <div class="loginMenu">
            <span @click="pl()" :class="{'selectSpan' : menuIdx == 0}">短信登录</span>
            <span @click="cl()" :class="{'selectSpan' : menuIdx == 1}">密码登录</span>
        </div>
        <input type="text" placeholder="手机号" class="phone" name="" id="">
        <input type="text" placeholder="验证码" class="code" name="" id="">
        <div class="tips">温馨提示：这是一句很温馨的提示。</div>
        <button class="loginBtn">登录</button>
        <div class="about">关于你们</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuIdx: 0
        }
    },
    components: {
        
    },
    // mounted () {
    //     console.log($('.about').text())
    //     $('.footer_menu').hide()
    // },
    methods: {
        pl(){
            this.menuIdx = 0
            console.log(this.menuIdx)
        },
        cl(){
            this.menuIdx = 1
            console.log(this.menuIdx)
        },
        back(){
            this.$router.back()
            // $('.footer_menu').show()
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .main
        display flex
        position relative
        justify-content center
        flex-direction column
        align-items center
        padding 50px 20px 0
        i
            position absolute
            top 10px
            left 10px
        .loginTitle
            font-size 48px
            color green
        .loginMenu
            margin 12px 0 8px
            font-size 16px
            display flex
            justify-content space-around
            width 180px
            span 
                font-size 12px
            .selectSpan
                color green
                text-decoration underline
        .phone, .code
            margin-bottom 8px
            box-sizing border-box
            padding 10px
            width 210px
        .tips
            font-size 10px
            color #999
        .loginBtn
            background yellowgreen 
            color white
            margin 24px 0 10px
            border-radius 5px
            width 200px
            height 40px
        .about
            font-size 8px
            color #999
</style>
