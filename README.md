# AMovie
[AMovie](https://movie.anodejsfun.top/) 是一款使用 [VueSSR](https://ssr.vuejs.org/) + [ElementUI](http://element-cn.eleme.io/#/zh-CN) + [Egg.js](https://eggjs.org/) 进行开发的电影网站，感谢[豆瓣电影](https://movie.douban.com/)提供的 [API](https://developers.douban.com/wiki/?title=movie_v2)。

### 开发
使用 webpack-dev-middleware 对 SSR 内容进行热编译并写入内存（不需要频繁写入磁盘）。
```bash
$ npm run dev
```

### 部署
本地调用命令 npm run build 把 SSR 内容写入磁盘，最后打包 tar.gzip 上传服务器即可。
```bash
$ npm start
$ npm stop
```

### 截图预览
#### Mobile:

![Mobile Screenshot](./screenshots/mobile.jpg?raw=true "Mobile Screenshot")

#### Destop:

![Destop Screenshot](./screenshots/destop.jpg?raw=true "Destop Screenshot")
