// 使用这种随机的方式模拟数据改变
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getPost(id) {
  try {
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
  } catch (error) {
    console.warn("Failed to fetch post, using fallback data:", error.message);

    // 返回一个默认的帖子数据
    return {
      id: id,
      title: `Fallback Post ${id}`,
      body: "This is fallback content when the API is unavailable.",
    };
  }
}

// 生成初始的静态路径
export async function generateStaticParams() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 10,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    // 只预渲染前10个页面
    return posts.slice(0, 10).map((post) => ({
      id: String(post.id),
    }));
  } catch (error) {
    console.warn(
      "Failed to fetch posts for static generation, using fallback:",
      error.message
    );

    // 如果API请求失败，返回一些默认的静态路径
    return Array.from({ length: 10 }, (_, i) => ({
      id: String(i + 1),
    }));
  }
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
