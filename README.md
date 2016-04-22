# webpack 例子说明

其中包含两个示例：

- like-sample-amd: 使用 webpack 构建类似 sample-amd 的项目
- use-devServer: 使用 webpack-dev-server 进行开发调试

## like-sample-amd

本例希望能够通过 webpack 构建类似 [sample-amd]() 的项目，期望满足以下需求：

- 页面可以引入公共的 html 片段
- JS 模块使用 AMD 规范开发，并且遵循其模块加载机制
- JS 包文件的依赖最终都应该合并为一个包
- 最终产出的 CSS 文件应该是独立的文件
- 最终产出的 JS/CSS 包文件引用脚本自动添加到对应的页面
- sass/scss 文件自动编译产出 css
- JS/CSS 各模块间公共部分模块统一打包成一个 common 包，并且页面自动添加引用
- 对 css 图标进行 sprite 处理，可以分组处理且自动计算位置，生成代码
- 开发过程中对代码进行校验
- 完成开发后对代码进行压缩优化
- 对静态文件进行版本处理
- multiple publicPath。能够对不同的文件类型或指定的文件引用进行路径替换，比如 cdn。


以上的需求点除了 `sprite` 和 `multiple publicPath` 大都能满足。

sprite 处理现有的资源找不到理想的 plugin 或 loader。在本例中使用的是 [webpack-spritesmith]() 插件，它对所有图片进行处理后生成独立的代码，而不是根据现有的代码生成并替换，还需手动引用。

对于 `multiple publicPath` 并不支持，如果希望通过 webpack 对引用路径进行处理，只能通过 `publicPath` 属性进行设置，但是只能设置一个。网上的一些解决方法大都通过不优雅的 hack 手段完成，可以参考 [Multiple URLs for publicPath to allow multiple CDN subdomains](https://github.com/webpack/webpack/issues/1261) 和 [Multiple publicPath](https://github.com/webpack/webpack/issues/2183#issuecomment-212377326)。


### 执行构建

该例提供了 dev 和 prod 两个阶段，prod 相对于 dev 会对代码进行压缩。

安装依赖：
依赖的模块包含用到的 plugin 和 loader。

```bash
npm install

```


dev:

```bash
npm run dev

```

prod:

```bash
npm run prod

```


## use-devServer

本示例通过 webpack-dev-server 对项目打包生成的资源提供 web 服务，支持修改模块浏览器自动刷新。并提供 [Hot Module Replacement](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html) 支持，即模块热替换。


### 执行构建

安装依赖：
依赖的模块包含用到的 plugin 和 loader。

```bash
npm install

```

dev:

构建结果存放在内存中，在项目目录里查看不到。打开 [http://localhost:8080](http://localhost:8080) 查看效果。

```bash
npm run dev

```


build:

构建结果会创建一个 build 目录，目录下的文件即为打包结果。

```bash
npm run build

```
