# webpack 使用例子

## Question

1.  样式文件是否只能够内嵌到 page？
    【可以通过 extract-text-webpack-plugin 导出合成一个样式文件】

2. 是否可以引用打包好的样式包文件？
    【导出样式文件包后可以直接引用】

3. sass 如何处理 ？
    【通过 sass-loader 对 sass 进行编译】

4. 如何使用 ( style | css | file | url ...)-loader？了解其他 loader 具有哪些功能？
5. entry 只能指定 js 文件吗？
6. 如何进行 debug? js 和 css 分别如何进行？
7. webpack-dev-server 具备哪些功能？提供哪些方便？
8. 了解其他配置属性及功能。
9. 如何加载html片段？【html-webpack-plugin】
10. 如何对sass 进行编译并且导出 css文件？【sass-loader 结合 extract-text-webpack-plugin】
11. 如何对sass/css 用到的图片进行 sprite？
12. html-webpack-plugin： 如何去掉多余的 js 文件？ js 文件怎样指定位置插入？
13. 如何添加 cnd 路径？如何针对不同文件添加对应的 CND 路径？