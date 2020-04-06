<template>
    <div>
        <router-view/>
        <Footer v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import Footer from "./components/Footer/Footer"
    import {reqDataNull} from './api'

    export default {
        async mounted () {
             const result = await reqDataNull   
             console.log(result)
        },

        components: {
            Footer
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 
</style>