import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Grupo Mat - Potenciamos tu Marca Inmobiliaria",
  description: "Soluciones y estrategias de marketing para Real Estate.",
  "og:url": "grupomatagency.com",
  "og:image":
    "https://www.grupomatagency.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FgrupomatLogo.0ec2d56b.png&w=256&q=75",
  "og:type": "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-nexa bg-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
