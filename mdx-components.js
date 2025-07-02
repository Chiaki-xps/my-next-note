import ComponentA from "./app/mdx/local/a";

// mdx-components.js
export function useMDXComponents(components) {
  console.log("🚀 ~ useMDXComponents ~ components:", components);
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6 border-b pb-2">{children}</h1>
    ),
    // 配置了 ComponentA ，子mdx页面就不需要重复导入
    ComponentA,
  };
}
