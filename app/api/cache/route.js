// 接口: /api/cache
// 作用：测试打包环境下和开发环境下，分别是否会发生缓存

export async function GET() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  const data = await res.json();
  return Response.json({ data });
}
