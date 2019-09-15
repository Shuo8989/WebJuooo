//首页
import Home from '../views/home/Home'
//剧院
import Theatre from "../views/theatre/Theatre"
//票夹
import Eticket from "../views/eticket/Eticket"
//我的
import Myjuooo from "../views/myjuooo/Myjuooo.js"

export default[
    {
        to:'/',
        path:'/',
        context:'首页',
        component:Home,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:true,
            isLogin:false
        }
    },
    {
        to:'/theatre/theatreList',
        path:'/theatre/theatreList',
        context:'剧院',
        component:Theatre,
        meta:{
            title:'聚橙网',
            isButton:true,
            isLogin:false
        }
    },
    {
        to:'/eticket/list',
        path:'/eticket/list',
        context:'票夹',
        component:Eticket,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {
        to:'/myjuooo/myjuooo',
        path:'/myjuooo/myjuooo',
        context:'票夹',
        component:Myjuooo,
        meta:{
            title:'聚橙网',
            isButton:true,
            isLogin:true
        }
    }
]