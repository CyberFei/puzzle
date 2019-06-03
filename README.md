# 基于 Webpack4 的可插拔式微前端架构 - Puzzle

演示地址

![](C:\Users\耿飞\Downloads\logo_400x400.png)

## 什么是 Puzzle

Puzzle 是基于 Vue 和 Webpack4 实现的一种项目结构；业务模块可以像拼图一样与架构模块组合，形成不同的系统，而这一切都是可以在**生产环境**热插拔的；这意味着你可以随时向你的系统添加新的功能模块，甚至改版整个系统，而不需要停掉它。



## 特点

- 核心：支持生产环境模块热插拔

- 支持业务模块的灵活组合

- 基座作为基座模块，也支持多个并存（这意味着你可以很轻松的进行灰度测试）

  

## 如何做到的

1. 将基座/业务模块以`umd`模块的方式用 `webpack` 打包出来
2. 通过 [LoadJS](https://github.com/muicss/loadjs) 对这些模块进行挂载，会在 `window` 对象上附加该模块对象
3. 通过动态路由的方式将该对象加载到架构中



## 运行项目

### 开发环境

安装依赖

```bash
npm install
```

构建第三方依赖

```bash
npm run dll
```

运行

```bash
npm start
```



### 生产环境
安装依赖

```bash
npm install
```

构建第三方依赖

```bash
npm run dll
```

构建，在这步你可以选择需要打包的基座模块和业务模块方便进行灵活组合

```bash
npm run build
```



### 热插拔相关

通过下列操作打包出的模块，可以直接新增到生产环境或者替换生产环境对应应模块

#### 单独打包架构

```
npm run core
```

#### 单独打包基座模块

```bash
npm run frame --name="xxx"
```

#### 单独打包业务模块

```bash
npm run puzzle --name="xxx"
```




## 代码结构

### 开发环境结构

### 生产环境结构



