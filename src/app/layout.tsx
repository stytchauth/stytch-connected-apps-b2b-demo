import type { Metadata } from "next";
import "./globals.css";
import {Provider} from "@/components/Provider";

export const metadata: Metadata = {
    title: "Stytch B2B Demo",
    description: "Stytch B2B Connected Apps Demo",
    openGraph: {
        title: "Stytch B2B Demo",
        description: "Explore the power of Stytch's B2B Connected Apps with our demo application.",
        url: "https://stytchb2bdemo.com",
        siteName: "Stytch B2B Demo",
        images: [
            {
                url: "https://stytchb2bdemo.com/og.png",
                width: 1088,
                height: 828,
                alt: "ChatGPT wants to access your account",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@stytchauth",
        title: "Stytch B2B Demo",
        description: "Explore the power of Stytch's B2B Connected Apps with our demo application.",
        images: [
            "https:///stytchb2bdemo.com/og.png",
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}
