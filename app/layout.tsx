import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consulta Tabela FIPE",
  description: "Aplicação para consultar preços de veículos na Tabela FIPE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 text-gray-900`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Cabeçalho */}
          <header className="bg-red-700 text-white py-4 shadow-md">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-2xl font-bold">
                🚗 <span className="text-yellow-400">Consulta Tabela FIPE</span>
              </h1>
            </div>
          </header>

          {/* Conteúdo principal */}
          <main className="flex-1 w-full max-w-6xl mx-auto p-4">
            {children}
          </main>

          {/* Rodapé */}
          <footer className="bg-gray-800 text-white py-4">
            <div className="text-center text-sm">
              Desenvolvido por Paloma Andrade © 2025
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
