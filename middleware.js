import { createI18nMiddleware } from "next-international/middleware";

const I18Middleware = createI18nMiddleware({
  locales: ["en", "es"],
  defaultLocale: "es",
});

export function middleware(request) {
  return I18Middleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
