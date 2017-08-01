# webpack-example-peoject
webpack 配置初始化demo
webpack 安装
  全局安装 npm install -g webpack
  项目需要有package.json npm init 配置后就有

  项目新建app目录，app目录新建greeter.js,main.js，main.js作为入口
   新建build目录存放打包后的js文件bundle.js
   新建public目录存放html文件	新建index.html
   greeter.js 
      module.exports = function(){
    var greet = document.createElement("div");
    greet.textContent = "hello webpack config js";
    return greet;
    } 

  main.js
    var greeter = require('./greeter');
    document.getElementById("root").appendChild(greeter());

  index.html
    <!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>webpack pack</title>
</head>

<body>
    <div id="root">

    </div>
    <script src="../build/bundle.js"></script>
</body>
</html>

 webpack打包命令:webpack 入口文件 出口文件 exp:webpack app/main.js build/bundle.js


npm install 组件 --save-dev 会把组件依赖插入package.json
babel loader用于将es6转换为es5，因为并非所有浏览器都支持es6语法
