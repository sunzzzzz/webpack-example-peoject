# webpack-example-peoject
webpack 配置初始化demo
npm install 组件 --save-dev 会把组件依赖插入package.json
babel loader用于将es6转换为es5，因为并非所有浏览器都支持es6语法

webpack 安装
  全局安装 npm install -g webpack
  项目需要有package.json npm init 配置后就有

1.项目中新建文件夹app,app下新建sub.js,index.js
  sub.js：
 function generateText(){
    var ele =document.createElement('p');
    ele.innerHTML = 'hello world webpack';
    return ele;
}
module.exports = generateText;

index.js:
var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);


2.安装webpack包
   npm install webpack --save-dev

3.安装webpack-dev-server用于热更新
  npm install webpack-dev-server --save-dev

4.安装html-webpack-plugin 用于生成index.html文件
  npm install html-webpack-plugin --save-dev

5.根目录下新建webpack.config.js文件
  var webpack = require('webpack');
  var path = require('path');
  var ROOT_PATH = path.resolve(__dirname);//路径解析，根据根目录，注意dirname前面是两条横线
  var APP_PATH  = path.resolve(ROOT_PATH,'app/index.js');//声明webpack的入口文件为index.js
  var BUILD_PATH = path.resolve(ROOT_PATH,'build')//声明webpack出口文件目录为build目录
  module.exports = {
    entry:APP_PATH,    //入口
    output:{
        path:BUILD_PATH, 
        filename:"bundle.js"  //打包后的js统一为bundle.js
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react init html'  //生成html。自己声明title
        }),
     ],
    devServer:{
        historyApiFallback:true,    //webpack-dev-server配置
        inline:true
    }
}

6.package.json =>  
  "scripts": {
    "start": "webpack-dev-server --inline"
  }, 
7.webpack打包
  命令:webpack => build下生成bundle.js和index.html文件
 
8.热更新:
  命令:npm start => chrome输入地址：http://localhost:8080 =>出现index.html,修改sub.js =>浏览器随之  更新无需重新加载
  
   
  


  
  



