import "./globals.css";
import { Playfair_Display, Great_Vibes } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${playfair.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
