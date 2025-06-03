// 使用 app router 的写法
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // SSG mode - fetch once at build time
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// 使用 getStaticProps 的写法（Page Router方式）
// export default function Blog({ posts }) {
//     return (
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     )
//   }

//   export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()
//     return {
//       props: {
//         posts,
//       },
//     }
//   }
