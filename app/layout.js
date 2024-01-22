import "./globals.css";

export const metadata = {
  title: "grupomat",
  description: "Soluciones y estrategias de marketing para Real Estate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-nexa bg-black">{children}</body>
    </html>
  );
}
