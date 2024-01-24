import { useLocale } from "next-intl";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export const metadata = {
  title: "grupomat",
  description: "Soluciones y estrategias de marketing para Real Estate.",
};

export default function RootLayout({ children }) {
  const locale = useLocale();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="font-nexa bg-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
