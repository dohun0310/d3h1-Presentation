import { Noto_Sans_KR } from "next/font/google";

import { ThemeProvider } from "@/theme";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
  title: "d3h1 Presentation",
  description: "웹 기반의 발표 자료",
  openGraph: {
    type: "website",
    url: "https://pt.d3h1.com",
    title: "d3h1 Presentation",
    description: "웹 기반의 발표 자료",
    siteName: "d3h1 Presentation",
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://pt.d3h1.com",
    title: "d3h1 Presentation",
    description: "웹 기반의 발표 자료",
    images: [{
      url: "/opengraph.png",
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={noto_sans_kr.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
