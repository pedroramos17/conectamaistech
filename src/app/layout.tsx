import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Conecta Mais Tech",
  description:
    "Conecta Mais Tech loja especializada em eletrônicos, acessórios e muito mais. Manutenção de celulares, notebooks, desktops e videogames. São Paulo região Grande São Paulo entrega para todo o Brasil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
