<template>
    <div class="footer_menu">
        <span class="footer_item" :class="{on: '/home' === $route.path}" @click="goTo('/home')">
            <span class="item_icon">
                <i class="iconfont icon-index-copy"></i>
            </span>
            <span>首页</span>
        </span>
        <span class="footer_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-soushuo"></i>
            </span>
            <span>搜索</span>
        </span>
        <span class="footer_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
            </span>
            <span>订单</span>
        </span>
        <span class="footer_item" :class="{on: '/personal' === $route.path}" @click="goTo('/personal')">
            <span class="item_icon">
                <i class="iconfont icon-xiaoren"></i>
            </span>
            <span>个人</span>
        </span>
    </div>
</template>

<script>
import golbal from "../../api/golbal";
export default {
    data() {
        return {
        }
    },
    methods: {
        goTo(path){
            this.$router.replace(path)
            // if(path == '/personal'){
            //     golbal.setIsShow(false)
            //     console.log(golbal.isShow)
            //     console.log(this.isShow)
            // }
        }
    },
    components: {
 
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .footer_menu
        position fixed
        z-index 100
        left 0
        bottom 0
        background #fff
        width 100%
        height 50px
        display flex
        border-top 1px solid #eee
        .footer_item
            display flex
            flex 1
            text-align center
            flex-direction column
            justify-content center
            text-decoration none
            color gray
            font-size 12px
            .item_icon
                margin-bottom 4px
        .on
            color green
</style>
 