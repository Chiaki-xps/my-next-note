// i18n 国际化
import { match } from "@formatjs/intl-localematcher";
// negotiator npm 包：HTTP内容协商的解析工具
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { locales, defaultLocale } from "@/config.js";

// 匹配最后一个点后面的内容，比如 a.jpg 返回 .jpg。在路径里，一般都是
// 前置知识：如果 url 为 http://1.1.1.1/./a.jpg 则返回 http://1.1.1.1/a.jpg
const publicFile = /\.(.*)$/;
// 排除文件
const excludeFile = ["logo.svg"];

function getLocale(request) {
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };

  // 这里不能直接传入 request，有更简单的写法欢迎评论留言
  // Negotiator 是 HTTP内容协商的解析工具，可以解析请求头中的 accept-language 字段，返回一个数组，数组中是用户可能使用的语言列表
  const languages = new Negotiator({ headers }).languages();

  // match 函数：匹配 languages 数组中的语言，返回一个语言代码
  // locales 数组：用户可能使用的语言列表
  // defaultLocale 默认语言
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  // 获取请求路径
  const { pathname } = request.nextUrl;

  // 判断请求路径中是否已存在语言，已存在语言则跳过
  const pathnameHasLocale = locales.some(
    // startsWith 判断是否以指定字符串开头
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 如果是 public 文件，不重定向
  if (
    publicFile.test(pathname) &&
    // substr 从 1 开始截取，因为 pathname 的第一个字符是 /
    excludeFile.indexOf(pathname.substr(1)) == -1
  )
    // 如果请求的是public下的logo.svg，则不重定向
    return;

  // 获取匹配的 locale
  const locale = getLocale(request);
  // console.log("🚀 ~ middleware ~ locale:", locale); zh

  // 这里修改 path，后续拿到的 pathname 就是 最新的
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // 默认语言不重定向
  if (locale == defaultLocale) {
    return NextResponse.rewrite(request.nextUrl);
  }
  // 重定向，如 /products 重定向到 /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
