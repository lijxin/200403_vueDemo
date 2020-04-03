/*
    入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'

new Vue({
    el: '#app',
    render: h => h(App),
    router
})