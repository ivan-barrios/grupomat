import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "grupomat",
  description: "Soluciones y estrategias de marketing para Real Estate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-nexa bg-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
