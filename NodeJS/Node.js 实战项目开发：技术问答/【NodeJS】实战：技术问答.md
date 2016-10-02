### Web 与 Node.js 相关技术介绍

##### Web应用的基本组件
- GUI(浏览器、HTTP客户端)
- Web服务器(Node.js service)
    - 请求
    - 业务逻辑
    - 连接数据库
- 数据库(SQLite、LevelDB、Redis等)

##### expressjs框架

### expressjs 的配置与路由
- 使用BSON存储数据
- 支持相对丰富的查询操作
- 支持索引
- 副本集
- 分片
- 无模式
- 部署简单方便

### expressjs 与HTML
- 使用expressjs返回HTML内容
- 模板渲染
    - 模板
        - 用途：复用HTML组件，简化开发流程
        - 比喻：模具
    - 渲染/生成
        - 用途："生成"最终的HTML内容
        - 比喻：拷饼干
- 使用app.set来设置express实例所使用的模板引擎
- 前后端共用模板

### 模组化
- 如何设计API
    - 不要让用户使用关键字new
    - 保持简介
    - 不要轻易的输出接口
- 开放UI接口
    - 抽象主题
        - 用途：可以让使用者自定义主题
        - 方法：css
- 发布到NPM
    - npm publish

