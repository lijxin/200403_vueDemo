<template>
    <header class="head">
        <slot name="left"></slot>
        <span class="title">{{title}}</span>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title:　String
    },
    components: {

    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .head
        width 100%
        height 50px
        align-items center
        display flex
        background-color green
        color white
        box-sizing border-box
        padding 0 10px
        .search
            flex 1
        .title
            flex 10
            text-align center
        .login
            flex 3
</style>
