import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Carta Oficial a Etecsa - Feu de la Facultad de Ingeniería Informática",
  description:
    "Carta de la FEU de la Facultad de Ingeniería Informática de la Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE) ante los cambios de las políticas de uso de Etecsa",
  keywords: [
    "carta oficial",
    "CUJAE",
    "Facultad de Ingeniería Informática",
    "Universidad Tecnológica de La Habana",
    "José Antonio Echeverría",
    "FEU",
    "Federación Estudiantil Universitaria",
    "documento oficial",
    "universidad cubana",
  ],
  authors: [
    {
      name: "Facultad de Ingeniería Informática",
      url: "https://fii.cujae.edu.cu",
    },
  ],
  creator: "Facultad de Ingeniería Informática - CUJAE",
  publisher: "Universidad Tecnológica de La Habana José Antonio Echeverría",
  applicationName: "Carta Oficial FII-CUJAE",
  generator: "Next.js",
  category: "education",
  classification: "official document system",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Carta Oficial - Facultad de Ingeniería Informática",
    description:
      "Carta de la FEU de la Facultad de Ingeniería Informática de la Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE) ante los cambios de las políticas de uso de Etecsa",
    url: "https://carta-feu-fii.vercel.app",
    siteName: "Carta Oficial FII-CUJAE",
    locale: "es_CU",
    type: "website",
    images: [
      {
        url: "/logo-orqui.png",
        width: 512,
        height: 512,
        alt: "Mascota de la Facultad de Ingeniería Informática",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Carta Oficial - Facultad de Ingeniería Informática",
    description:
      "Carta de la FEU de la Facultad de Ingeniería Informática de la Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE) ante los cambios de las políticas de uso de Etecsa",
    images: ["/logo-orqui.png"],
  },
  icons: {
    icon: "/logo-orqui.png",
    apple: "/logo-orqui.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    institution:
      "Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE)",
    faculty: "Facultad de Ingeniería Informática",
    department: "Federación Estudiantil Universitaria",
    country: "Cuba",
    city: "La Habana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
