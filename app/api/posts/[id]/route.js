import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = await params;

  return NextResponse.json({
    message: `/api/posts/${id} 接口响应成`,
  });
}
