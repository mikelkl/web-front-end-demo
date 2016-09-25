### 使用http模块创建Web服务器

##### Web服务器的功能
- 接受HTTP请求（GET、POST、UPDATE、DELETE、PUT、PATCH）
- 处理HTTP请求（自己处理，或请求别的程序处理）
- 做出响应（返回页面、文件、各类数据等）

##### 常见的Web服务器架构
- Nginx&nbsp;/&nbsp;Apache：负责接受HTTP请求，确定谁来处理请求，并返回请求的结果
- php-fpm&nbsp;/&nbsp;php模块：处理分配给自己的请求，并将处理结果返回给分配者

##### 常见请求种类
- 请求文件：包括静态文件（网页、图片、前端JavaScript文件、css文件……），及由程序处理得到的文件
- 完成特定的操作：如登陆、获取特定数据等

##### Node.js的Web服务器
- 不依赖其它特定的Web服务器软件（如Apache、Nginx、IIS……）
- Node.js代码处理请求的逻辑
- Node.js代码负责Web服务器的各种“配置”

使用Node.js核心模块http创建Web服务器

### 使用Express创建Web服务器

##### 简单的Express服务器
##### 静态文件服务
静态文件范围：
- 网页
- 纯文本
- 图片
- 前端JavaScript代码
- CSS样式表文件
- 媒体文件
- 字体文件

##### 路由
- 将不同的请求，分配给相应的处理函数
- 区分：路径、请求方法

三种路由方法：
- path
- Router
- route


##### 中间件
- Connect：Node.js的中间件框架
- 分层处理
- 每层实现一个功能

### 创建TCP服务器
- 使用net模块创建TCP服务器
- 使用telnet连接TCP服务器
- 使用net创建TCP客户端
