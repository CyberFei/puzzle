## 0.1.0
- 核心代码编写

## 0.1.1
- 修复缓存问题，通过生成 map.js，用于索引文件

## 0.1.3
- 梳理首页加载逻辑

## 0.2.0
### 使用新的缓存方式
- 缓存不再依赖文件名及 map.js 实现
- 模块支持配置 version，用于缓存问题

### 支持分布式
- 模块支持配置 host，用于更加灵活的部署方式，实现效果如图
![demo](https://raw.githubusercontent.com/CyberFei/pic/master/B32FDD4E-9986-4A32-99F8-BC5334584C2C.png)

### 代码优化
- 删除无用代码
