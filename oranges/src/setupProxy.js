const proxy=require('http-proxy-middleware');
module.exports=app=>{
    app.use(proxy("/Apijcw",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/Apijcw":""
        }
    }))
    app.use(proxy("/Mjcw",{
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/Mjcw":""
        }
    }))
}