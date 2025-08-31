import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import MainPage from "../components/MainPage"
import PolPage from "../components/PolPage"
import NewsPage from "../components/NewsPage"
import NoticePage from "../components/NoticePage"
import VisionPage from "../components/VisionPage"

const router=new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes:[{
        path:"/",
        component:MainPage
    },{
        path:"/pol",
        component:PolPage
    },{
        path:"/news",
        component:NewsPage
    },{
        path:"/notice",
        component:NoticePage
    },{
        path:"/vision",
        component:VisionPage
    }]
})
export default router