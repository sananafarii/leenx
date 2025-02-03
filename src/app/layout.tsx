import "../styles/globals.css";

import React, { ReactNode } from "react";
import { outfit } from "./fonts";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Leenx Agency</title>
        <meta
          name="description"
          content="Leenx Agency - Web Design and Development"
        />
      </head>
      <body className={outfit.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
