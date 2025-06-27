// 接口: /api/revalidatePath?path=xxx
// 参数: path - 需要重新验证的路径
// 参数: tag - 需要重新验证的标签
// 作用：重新验证路径接口

// 例子: /api/revalidatePath?path=/dataFetch/serverComponent
import { revalidatePath } from "next/cache";

export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    // 重新验证路径。path为/dataFetch/serverComponent
    // 重新验证路径后，会重新请求数据，并缓存数据，所以再刷新 /dataFetch/serverComponent 页面得到的是新结果
    revalidatePath(path);
    return Response.json({ revalidated: true, now: Date.now() });
  }
  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
