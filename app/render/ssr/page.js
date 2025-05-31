/**
 * 在老版本的nextJs中，会使用getServerSideProps来获取数据。新版本已经不再推荐使用了
 */
// export default function Page({ data }) {
//   return <p>{JSON.stringify(data)}</p>
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//   const data = await res.json()

//   return { props: { data } }
// }

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store", // SSR mode - fetch on every request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
