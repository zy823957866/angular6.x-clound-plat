
这里采用淘宝镜像安装，如果没有，网上查下也比较简单！

1.全局安装angular/cli
  cnpm install @angular/cli

2.全局安装typescript
  cnpm install -g typescript

3.安装依赖包
  cnpm install

4.运行项目
  ng serve  --open


====================
#创建路由
====================
1.ng generate module app-routing/app-routing --flat -module=app
  注释：--flat把这个文件放进了src/app中，而不是单独的目录中.--module=app告诉cli把它注册到AppModule
       的imports的数组中。

2.创建组件
  ng generate component login