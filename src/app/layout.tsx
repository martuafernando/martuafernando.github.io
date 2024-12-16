import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID

  if (process.env.NODE_ENV !== 'production' && !googleAnalyticsId) {
    console.warn("Google Analytics ID is not exists")
  }

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} overflow-x-hidden`}>{children}</body>
      { googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} /> }
    </html>
  );
}
