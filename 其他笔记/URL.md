# JavaScript 中的 `new URL()` 方法

`new URL()` 是 JavaScript 中用于解析和操作 URL 的构造函数，它提供了一种简单的方式来处理 URL 字符串。

可以简单理解成，把一个 url 字符串，处理成一个 url 对象。通过属性、方法获取/处理内容。

## 基本用法

```javascript
const url = new URL(urlString[, baseURLstring]);
```

- `urlString`: 要解析的 URL 字符串
- `baseURLstring` (可选): 如果第一个参数是相对 URL，则需要提供基础 URL

## 示例

### 解析绝对 URL

```javascript
const url = new URL("https://www.example.com/path?query=123#fragment");
console.log(url.href); // "https://www.example.com/path?query=123#fragment"
console.log(url.protocol); // "https:"
console.log(url.host); // "www.example.com"
console.log(url.pathname); // "/path"
console.log(url.search); // "?query=123"
console.log(url.hash); // "#fragment"
```

### 解析相对 URL

```javascript
const baseUrl = "https://www.example.com/base/";
const relativeUrl = new URL("path/to/resource", baseUrl);
console.log(relativeUrl.href); // "https://www.example.com/base/path/to/resource"
```

## URL 对象的属性

URL 对象提供了许多有用的属性：

- `href`: 完整的 URL 字符串
- `protocol`: 协议 (如 "https:")
- `host`: 主机名和端口号
- `hostname`: 主机名
- `port`: 端口号
- `pathname`: 路径部分
- `search`: 查询字符串（包括开头的 ?）
- `searchParams`: 提供查询参数操作方法的 `URLSearchParams` 对象
- `hash`: 片段标识符（包括开头的 #）
- `origin`: 只读属性，返回协议、主机名和端口号

## 修改 URL

```javascript
const url = new URL("https://example.com");
url.protocol = "http:";
url.hostname = "newExample.com";
url.pathname = "/newPath";
url.searchParams.set("key", "value");

console.log(url.href); // "http://newExample.com/newPath?key=value"
```

## URLSearchParams 对象

`searchParams` 属性返回一个 `URLSearchParams` 对象，可以方便地操作查询参数：

```javascript
const url = new URL("https://example.com/?a=1&b=2");

// 获取参数
console.log(url.searchParams.get("a")); // "1"

// 设置参数
url.searchParams.set("c", "3");

// 删除参数
url.searchParams.delete("b");

// 转换为字符串
console.log(url.searchParams.toString()); // "a=1&c=3"
```

## 注意事项

1. 如果 URL 无效，会抛出 `TypeError`
2. 在 Node.js 中同样可用（从 v10.0.0 开始完全支持）
3. 相比于传统的字符串操作，`URL` 对象提供了更安全、更方便的 URL 处理方法

## encodeURIComponent 和 decodeURIComponent

- encodeURIComponent 的作用主要是对 URI 组件中出现的非标准字符转成 UTF-8，比如空格转成 %20
- decodeURIComponent 就是用来解码

# 笔试

## 如何处理 url 字符串

```js
function getQueryParams(urlString) {
  try {
    const url = new URL(urlString);
    const params = {};

    // URLSearchParams 是一个Map结构
    // 使用 URLSearchParams 遍历所有参数
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  } catch (e) {
    console.error("Invalid URL", e);
    return {};
  }
}

// 使用示例
const url = "https://example.com/?name=John&age=30&city=New+York";
const queryParams = getQueryParams(url);
console.log(queryParams);
// 输出: { name: "John", age: "30", city: "New York" }
```
