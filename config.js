/* 站点外部服务配置
 *
 * Giscus 留言板需要你在 GitHub 上准备好这三步，然后把值填进来：
 *   1. 建一个 public 仓库（比如 otarin-site），仓库 Settings → Features 里勾上 Discussions
 *   2. 到 https://github.com/apps/giscus 安装到该仓库
 *   3. 打开 https://giscus.app/zh-CN ，填仓库名，它会给你 repoId / category / categoryId 三个值
 *
 * 填好后留言板自动启用；空着就先显示一句提示，不会报错。
 */
window.SITE = {
  giscus: {
    repo: "",          // 例如 "YourName/otarin-site"
    repoId: "",        // 例如 "R_kgDOxxxxxxx"
    category: "General",
    categoryId: "",    // 例如 "DIC_kwDOxxxxxxx"
    mapping: "pathname" // 每个页面一套评论：pathname
  }
};
