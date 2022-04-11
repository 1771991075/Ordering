let path = require('path')
module.exports = {  
    devServer: {
        open: true,
        host: 'localhost',
        port: '7999',
	/* 	disableHostCheck:true, */
		// 用来做跨域使用
		proxy: {
		    '/api/nodejs': {
				// 访问目标端口地址(专门处理支付宝支付的请求nodejs服务器)
		        target: 'http://localhost:3000', // 要请求nodejs 后端的地址		      
		        changeOrigin: true,
		        pathRewrite: {
		            '^/api/nodejs': '/api'
		        }
		    },
			'/api/myboot': {
				// 访问目标端口地址(请求是从java tomcat服务器获取数据)
				// 8888是java的端口号
			    target: 'http://localhost:8999', // 要请求springboot后端地址		      
			    changeOrigin: true,
			    pathRewrite: {
			        '^/api/myboot': '/api'
			    }
			}
			
		}						//解决跨域问题
    
    },
	configureWebpack:(config)=>{
		config.resolve = {
			extensions:['.js','.json','.vue'],
			alias:{
				'@':path.resolve(__dirname,'./src')
			}		
			
		}		
	}
};
