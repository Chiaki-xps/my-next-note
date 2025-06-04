// 使用这种随机的方式模拟数据改变
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`,
    {
      next: {
        revalidate: 100, // 每10秒重新验证数据
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// 生成初始的静态路径
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  });
  const posts = await res.json();

  // 只预渲染前10个页面
  return posts.slice(0, 10).map((post) => ({
    id: String(post.id),
  }));
}

export default async function BlogPost({ params }) {
  // 先等待 params 对象
  const { id } = await params;
  const post = await getPost(id);

  return (
    <>
      <h1>ISR Demo</h1>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  );
}
