import "../styles/globals.css";

import React, { ReactNode } from "react";

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
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
