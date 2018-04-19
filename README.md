# AMovie
AMovie 是一款使用 VueSSR + ElementUI + Egg.js 进行开发的软件，感谢豆瓣电影提供的 API。

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
