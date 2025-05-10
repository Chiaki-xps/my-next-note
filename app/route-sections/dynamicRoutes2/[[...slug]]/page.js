// app/shop/[...]/page.js
export default function Page({ params }) {
  return (
    <div>
      <p>[[...slug]] 即使是没有动态路由也能匹配</p>
      My Shop: {JSON.stringify(params)}
    </div>
  );
}
