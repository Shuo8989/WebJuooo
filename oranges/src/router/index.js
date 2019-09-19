//首页
import Home from '../views/home/Home'
//剧院
import Theatre from '../views/theatre/Theatre'
//剧院列表信息
import TheatreList from '../components/Theatre/TheatreList';
//表演详情
import ShowDetail from '../components/Theatre/ShowDetail';
//票夹
import Eticket from '../views/eticket/Eticket'
//我的
import Myjuooo from '../views/myjuooo/Myjuooo.js'
import Mysecurity from "../components/Myjuooo/Mysecurity";
import ChangeLoginPsw from '../components/Myjuooo/ChangeLoginPsw'
import ChangePayPsw from '../components/Myjuooo/ChangePayPsw'
import MyRealName from '../components/Myjuooo/MyRealName'
import Mymoney from '../components/Myjuooo/Mymoney'
import Myintegral from '../components/Myjuooo/Myintegral'
import CouponExchange from '../components/Myjuooo/CouponExchange'
import MyOrderList from '../components/Myjuooo/MyOrderList'
import Cardproduct from  '../components/Myjuooo/Cardproduct'
import Myaddress from '../components/Myjuooo/Myaddress'
import Feedback from '../components/Myjuooo/Feedback'
//登陆注册(完成)
import Login from '../views/Login/Login'
import ResetPassword from '../views/Login/ResetPassword'
import Verify from '../views/Login/Verify'
import SetPassword from '../views/Login/SetPassword'

//演出
import Vocalconcert from '../components/Show/Vocal_concert'

//vip+会员
import Vip from '../views/Vip/Vip.js'
//橙PLUS卡
import VipPlus from '../views/VipPlus/VipPlus.js'
//购买新卡
import VipCard from '../views/VipCard/VipCard.js'
export default[
    {//首页
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
    {//剧院
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
    {//剧院列表
        to:'/theatre/index',
        path:'/theatre/index',
        context:'剧院列表信息',
        component:TheatreList,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:false
        }
    },
    {//表演详情
        to:'/ticket',
        path:'/ticket', 
        context:'演出详情',
        component:ShowDetail,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:false
        }
    },
    {//票夹
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
    {//我的
        to:'/myjuooo/myjuooo',
        path:'/myjuooo/myjuooo',
        context:'我的',
        component:Myjuooo,
        meta:{
            title:'聚橙网',
            isButton:true,
            isLogin:true
        }
    },
    {//我的-设置
        to:'/Myjuooo/mysecurity',
        path:'/Myjuooo/mysecurity',
        context:'设置',
        component:Mysecurity,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-修改密码
        to:'/Myjuooo/changeLoginPsw',
        path:'/Myjuooo/changeLoginPsw',
        context:'修改密码',
        component:ChangeLoginPsw,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-支付密码
        to:'/Myjuooo/payPsw/type/set',
        path:'/Myjuooo/payPsw/type/set',
        context:'支付密码',
        component:ChangePayPsw,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-实名认证
        to:'/Myjuooo/myRealNameCertification',
        path:'/Myjuooo/myRealNameCertification',
        context:'实名认证',
        component:MyRealName,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-余额
        to:'/Myjuooo/mymoney',
        path:'/Myjuooo/mymoney',
        context:'我的余额',
        component:Mymoney,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-积分
        to:'/Myjuooo/myintegral',
        path:'/Myjuooo/myintegral',
        context:'我的积分',
        component:Myintegral,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-优惠券
        to:'/Myjuooo/couponExchange',
        path:'/Myjuooo/couponExchange',
        context:'我的优惠券',
        component:CouponExchange,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-订单
        to:'/my/myOrderList',
        path:'/my/myOrderList',
        context:'我的订单',
        component:MyOrderList,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-卡包
        to:'/Cardproduct/index',
        path:'/Cardproduct/index',
        context:'我的卡包',
        component:Cardproduct,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-地址
        to:'/myjuooo/myaddress',
        path:'/myjuooo/myaddress',
        context:'我的地址',
        component:Myaddress,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },
    {//我的-意见反馈
        to:'/feedback/index',
        path:'/feedback/index',
        context:'意见反馈',
        component:Feedback,
        exact:true,
        meta:{
            title:'聚橙网',
            isButton:false,
            isLogin:true
        }
    },

    {//密码登录和验证码登陆注册
        to:'/passport/login',
        path:'/passport/login',
        context:'欢迎来到聚橙网',
        component:Login,
        exact:true,
        meta:{
            title:'登录',
            isButton:false,
            isLogin:false
        }
    },
    {//找回密码
        to:'/Passport/resetPassword',
        path:'/Passport/resetPassword',
        context:'找回密码',
        component:ResetPassword,
        exact:true,
        meta:{
            title:'登录',
            isButton:false,
            isLogin:true
        }
    },
    {//输入验证码
        path:'/Passport/verify',
        context:'输入验证码',
        component:Verify,
        exact:true,
        meta:{
            title:'登录',
            isButton:false,
            isLogin:true
        }
    },
    {//设置新密码
        path:'/passport/setPassword',
        context:'设置新密码',
        component:SetPassword,
        exact:true,
        meta:{
            title:'登录',
            isButton:false,
            isLogin:true,
        }  
    },
    { //VIP界面
        to: '/vip/index/1',
        path: '/vip/index/1',
        context: 'VIP+会员',
        component: Vip,
        exact: true,
        meta: {
            title: 'VIP',
            isButton: false,
            isLogin: false,
        }
    },
    { //会员橙卡界面
        to: '/plus/index',
        path: '/plus/index',
        context: '橙PLUS卡',
        component: VipPlus,
        exact: true,
        meta: {
            title: '橙PLUS卡',
            isButton: false,
            isLogin: false,
        }
    },
    {//购买新卡界面  
        to: '/Cardproduct/index',
        path: '/Cardproduct/index',
        context: '购买新卡',
        component: VipCard,
        exact: true,
        meta: {
            title: '橙PLUS卡',
            isButton: false,
            isLogin: false,
        }
    },
    {
        path:'/show/showsLibrary',
        context:'演唱会',
        component:Vocalconcert,
        exact:true,
        meta:{
            title:'演出',
            isFooter:false,
            isLogin:false
        }
    }
]