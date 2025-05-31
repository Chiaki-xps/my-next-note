"use client";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return <p>Your Data: {data.title}</p>;
}
