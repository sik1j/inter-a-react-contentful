import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, pages }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <Nav
        isNavOpen={isNavOpen}
        setIsNavOpen={(bool) => setIsNavOpen(bool)}
        pages={pages}
      />
      {children}
      <Footer />
      <style jsx>{`
        div {
          overflow-x: hidden;
          ${isNavOpen ? "overflow-y: hidden; height: 100vh;" : ""}
        }
      `}</style>
    </div>
  );
}
