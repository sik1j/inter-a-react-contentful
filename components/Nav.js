import React, { useState } from "react";
import Link from "next/link";

function Nav({ isNavOpen, setIsNavOpen, pages }) {
  let burgerClass = !isNavOpen ? "burger" : "burger toggle";

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderLinks = () => {
    console.log(pages);
    return pages.map((page) => (
      <li key={page.sys.id}>
        <Link href={page.fields.slug}>
          <a>{page.fields.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <header>
      <nav id="nav">
        <div className="logo-bg">
          <Link href={"/"}>Inter-A</Link>
        </div>
        <ul className="nav-links slide">{renderLinks()}</ul>
        <div onClick={handleNavClick} className={burgerClass}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <style jsx>{`
        .slide {
          /* animation: ${isNavOpen ? "slidein" : "slideout"} 750ms forwards
            cubic-bezier(0.34, 1.56, 0.64, 1); */

          animation: ${isNavOpen ? "slidein" : "slideout"} 350ms forwards
            ease-in-out;
        }
        @keyframes slidein {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-5%);
          }
        }
        @keyframes slideout {
          from {
            transform: translateX(-5%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </header>
  );
}

export default Nav;