# 御宅 · OTARIN

个人站：小说《由谎言开始的魔法少女生活》、魔界设定集、地图、画廊、歌单、日志、游戏、留言。

纯静态站点，无构建步骤，直接托管即可。

## 结构

```
index.html     单页应用（hash 路由）
data.js        小说正文 / 设定 / 画廊 / 日志
music.js       歌单（游戏 BGM + 原创 BGM）
lyrics.js      歌词（宅萌泪真）
config.js      外部服务配置（Giscus 留言板）
assets/        图片、音乐、背景视频
```

## 本地预览

```
python -m http.server 8777
```

或任意静态服务器，根目录指向本文件夹。
