export default async function Page() {
  // 请求会在服务端执行，并将渲染后的 HTML 发送给客户端
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await res.json()).slice(0, 10);
  // 这是一个服务端组件,log只会在命令行打印,不会在浏览器打印
  console.log(data);
  return (
    <ul>
      {data.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}
