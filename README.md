# 基于 Webpack4 的可插拔式微前端架构 - Puzzle

演示环境：[PuzzleDemo](http://demo.mxsg.fun/puzzle/#/home) [备用地址](https://shuva.cn/demo/puzzle/#/home)

![Puzzle Logo](https://raw.githubusercontent.com/CyberFei/pic/master/logo_400x400.png)


## 什么是 Puzzle

Puzzle 是基于 Vue 和 Webpack4 实现的一种项目结构；业务模块可以像拼图一样与架构模块组合，形成不同的系统，而这一切都是可以在**生产环境热插拔**的；这意味着你可以随时向你的系统添加新的功能模块，甚至改版整个系统，而不需要替换掉整个项目。

此外当多个项目使用此架构开发，即使模块是由不同的项目打包出来的，也可以在生成环境进行快速组合，模块可以非常简单的进行复用。



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

前端项目根据后端菜单请求进行模块加载，如本项目中后端请求返回格式为（数据来自阿里云）：

```javascript
[
  {
    id: "elastic",
    name: "弹性计算",
    leaf: false,
    children: [
      {
        id: "ecs",
        name: "云服务器 ECS",
        leaf: true,
        page: "/ecs",
        puzzle: "elastic"
      },
      // ...
    ],
    icon: "aperture",
    puzzle: "elastic"
  },
  {
    id: "database",
    name: "数据库",
    leaf: false,
    children: [
    	// ...
    ],
    icon: "aperture",
    puzzle: "database"
  },
  // ...
]
```

规定以第一级目录为模块目录（这里看自己的需求可以对项目进行修改）

固模块 ID 为 elastic、database 等，系统会在生产环境对所有子系统的入口文件进行请求，尝试加载模块，并生成路由；

所以通过不同用户的不同**业务模块**返回结果，可以进行不同模块的加载，从而进行权限控制；

同理通过不同用户的不同**基座模块**返回结果，可以进行不同基座的加载，从而进行灰度测试等操作（目前系统所用基座是写在public/config.js中，固此条仅作参考，项目本身可以自由发挥）；



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

通过上述操作打包出的模块，可以直接新增到生产环境或者替换生产环境对应应模块




## 代码结构

### 开发环境结构

![dev](https://github.com/CyberFei/pic/raw/master/puzzle/dev.png)

#### config

此文件夹内包含webpack所有打包配置文件

#### public

config.js：项目配置，用于生产环境配置

index.html：HTML 模版

#### src -> core

架构代码

#### src -> frames

基座模块代码，多个基座模块并列放置

#### src -> puzzles

业务模块代码，多个业务模块并列放置

#### static

主要用于放置静态资源，将会直接复制到生产环境static文件夹

#### static -> dll

由`npm run dll`生成的第三方库和公共代码等



### 生产环境结构

生产环境代码按照一定结构放置，可以自由升级替换对应模块

![prod](https://github.com/CyberFei/pic/raw/master/puzzle/prod.png)

#### core

由 `npm run core` 生成的架构代码

#### frames

由 `npm run frame` 生成的基座模块代码

#### puzzles

由 `npm run puzzle` 生成的业务模块代码

#### static

静态资源，包含打包生成的第三方库和公共代码等



### PS

此架构仅作为日常工作的一个总结，具体业务场景，可以进行修改，基座模块等可以进行自由发挥；业务模块返回的信息也可以按照需求增加；只要各个模块遵循一定标准，并在core中进行统一处理，均可以达到可插拔的效果。



具体可以看项目代码，方便的话可以给个star

