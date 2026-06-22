import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wedding Events | Wedding Editorial",
  description:
    "Studio lập kế hoạch cưới cao cấp với tinh thần editorial tối giản, riêng tư và giàu cảm xúc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(()=>{try{const k='elegance-theme';const s=localStorage.getItem(k);const t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch{}})();",
          }}
        />
        {children}
      </body>
    </html>
  );
}
