import type { Metadata } from "next";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReactQueryProvider from "./utils/ReactQueryProvider";

export const metadata: Metadata = {
  title: "White Feather's Jewellery",
  description: "This is the official site of White Feather's Jewellery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
