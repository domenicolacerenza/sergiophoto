import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mouse from "@/components/Mouse";

export const metadata: Metadata = {
  title: "Sergio Zizzi Photography | Fotografo di interni in Puglia",
  description: "Fotografo professionista in Puglia, fotografia di interni, architettura e paesaggio per masserie, B&B, trulli, strutture ricettive e social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120-precomposed.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Sergio Zizzi Photography | Fotografo di interni in Puglia</title>

        <meta name="description" content="Fotografo professionista in Puglia, fotografia di interni, architettura e paesaggio per masserie, B&B, trulli, strutture ricettive e social media." />

        <meta name="keywords" content="fotografo interni Puglia, fotografia architettura Puglia, fotografia masserie, fotografo Ostuni, trulli, B&B, Salento, Valle d'Itria" />

        <meta name="author" content="Sergio Zizzi" />
      </head>
      <body>
        <Header />
        <Mouse></Mouse>

        <main className=" min-h-[80vh] ">
          {children}

        </main>

        <Footer />
      </body>
    </html>
  );
}
