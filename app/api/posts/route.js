import { NextResponse } from "next/server";

export async function POST(request) {
  const article = await request.json();

  return NextResponse.json(
    {
      message: "/api/posts 接口响应成功",
      data: article,
    },
    { status: 201 }
  );
}
