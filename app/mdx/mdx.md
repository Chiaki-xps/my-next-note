+  [MDX](https://mdxjs.com/) 是 Markdown 的超集，不仅支持 Markdown 本身，还支持在 Markdown 文档中插入 JSX 代码，还可以导入（import）组件，添加交互内容。
+ MDX 可以看作是一种融合了 markdown 和 JSX 的格式
+ Next.js 既可以支持本地的 MDX 内容，也可以支持服务端动态获取 MDX 文件。Next.js 插件会将 markdown 和 React 组件转换为 HTML

## 1. 本地 MDX

本地使用  MDX 需要借助 `@next/mdx`这个包，它从本地文件中获取数据，能够处理 markdown 和 MDX。你需要在 `/pages` 或者`/app` 目录下创建一个以 `.mdx`为扩展名的页面文件

```shell
// 渲染 MDX 相关包
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

+ 当你使用 @next/mdx ，并且配置中启用了 `providerImportSource` 选项（或者默认行为），就会项目根目录中查找  `mdx-components.js` 

+ 件名 `mdx-components.js` 是固定的。

+ Next.js 的 MDX 插件在编译时：

  1. 会自动注入以下代码到每个 MDX 文件：

     ```js
     import { useMDXComponents } from 'mdx-components.js'
     ```

  2. 依赖这个文件提供组件运行时上下文

+ 配置文件 mdx-components.js

```js
// 可以把mdx-components.js 看出公共配置文件，配置了各种标签的公共样式内容
// 同时可以全局导入组件，这样其他地方就不需要重复导入
import ComponentA from "./app/mdx/a";

// mdx-components.js
export function useMDXComponents(components) {
  console.log("🚀 ~ useMDXComponents ~ components:", components);
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6 border-b pb-2">{children}</h1>
    ),
    ComponentA,
  };
}

```

## 2. 远程 MDX

+ 常用的远程MDX包
  + [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support)
  + [contentlayer](https://www.contentlayer.dev/)
+ 使用外部内容的时候要注意，因为 MDX 会编译成 JavaScript，并且在服务端执行。所以你应该从信任的地方获取 MDX 内容，否则可能导致“远程代码执行”（remote code execution，简写：RCE，让攻击者直接向后台服务器远程注入操作系统命令或者代码，从而控制后台系统）

