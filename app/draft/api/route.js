// draftMode 是一个异步函数
import { draftMode } from "next/headers";

export async function GET(request) {
  const draft = await draftMode();
  draft.enable();
  return new Response("Draft mode is enabled");
}
