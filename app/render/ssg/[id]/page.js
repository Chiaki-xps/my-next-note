// /pages/post/[id].js
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache", // SSG mode - fetch at build time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// This function generates all the static paths at build time
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.id);

  return (
    <>
      <h1>SSG</h1>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  );
}
