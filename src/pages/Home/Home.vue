<template>
    <section class="home">
        <Header title="这是一个地址">
            <span class="search" slot="left">
                <i class="iconfont icon-soushuo"></i>
            </span>
            <span class="login" slot="right">登录/注册</span>
        </Header>
        <nav class="home_nav">
            <div class='swiper-container'>
                <div class='swiper-wrapper'>
                    <div class='swiper-slide'>
                        <div class="navItem" v-for="nav in navs_1">
                            <div>
                                <!-- <img :src="nav.img" /> -->
                                <img src="./img/nav/1.jpg">
                                {{nav.name}}
                            </div>
                        </div>
                    </div>
                    <div class='swiper-slide'>
                        <div class="navItem" v-for="nav in navs_2">
                            <div>
                                <img src="./img/nav/1.jpg">
                                {{nav.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class='swiper-pagination'></div>
            </div>
        </nav>
        <div class="home_shop_list">
            <div class="home_shop_head">附近商家</div>
            <ShopList></ShopList>
        </div>
    </section>
</template>

<script>
    import 'swiper/css/swiper.css';
    import Swiper from "swiper";

    import Header from "../../components/Header/Header";
    import ShopList from "../../components/ShopList/ShopList"

    export default {
        data(){
            return {
                navs_1: [
                    {name: '菜单1'},
                    {name: '菜单2'},
                    {name: '菜单3'},
                    {name: '菜单4'},
                    {name: '菜单5'},
                    {name: '菜单6'},
                    {name: '菜单7'},
                    {name: '菜单8'},
                ],
                navs_2: [
                    {name: '菜单9'},
                    {name: '菜单10'},
                    {name: '菜单11'},
                    {name: '菜单12'},
                    {name: '菜单13'},
                    {name: '菜单14'},
                    {name: '菜单15'},
                    {name: '菜单16'},
                ]
            }
        },
        mounted () {
            // for(var i = 0; i < this.shops_1.length; i++){
            //     this.shops_1[i].img = require('./img/shop/1.jpg')
            // }
            new Swiper ('.swiper-container', {
                observer: true,
                observerParents: true,
                loop: true,
                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        },
        components: {
            Header,
            ShopList
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .home
        width 100%
        .home_nav
            .swiper-slide
                height 200px
                padding-top 10px
                .navItem
                    display inline-block
                    width 25%
                    div
                        display flex
                        flex-direction column
                        align-items center
                        height 85px
                        text-align center
                        img 
                            width 60px
                            height 60px
                            display block
        // .home_shop_list
        //     display flex
</style>
