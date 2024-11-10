"use client"

import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import BasicLayout from "@/Layout/BasicLayout";
import {Provider} from "react-redux";
import store from "@/stores";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <AntdRegistry>
          <Provider store={store}>
              <BasicLayout>
                  {children}
              </BasicLayout>
          </Provider>
      </AntdRegistry>
      </body>
    </html>
  );
}
