# dumi-monorepo

基于 dumi+pnpm 的 monorepo 最佳实践

## 项目介绍

使用 pnpm workspace 进行多包管理，项目 packages 中包含三个包：@wode673/components 、@wode673/hooks 、@wode673/utils。其中 components 依赖 uitls。

项目搭建流程文章记录：[基于 dumi+pnpm 的 monorepo 最佳实践](https://ata.alibaba-inc.com/articles/259705?spm=ata.25287382.0.0.45435efejPJDBq)

## 开发命令

```bash
# 下载依赖
$ pnpm install

# 启动服务
$ pnpm start

# 构建站点
$ pnpm build

# 手动部署github静态站点
$ pnpm run deploy
```

## LICENSE

MIT
