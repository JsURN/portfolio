import type { Metadata } from "next";

import { AnimatedBackground } from "~/components/animated-background";
import { ThemeProvider } from "~/components/theme-provider";
import { themeInitScript } from "~/lib/theme";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "JS — Portfólio de desenvolvimento",
    template: "%s | JS",
  },
  description:
    "Portfólio de desenvolvimento web com foco em experiências claras, funcionais e cuidadosas.",
  keywords: [
    "desenvolvimento web",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "JS" }],
  creator: "JS",
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
