import React from "react";
import Link from "next/link";

export default function HeroLanding({ heroSubText }) {
  return (
    <section className="hero-landing">
      <div className="watermark">Today</div>
      <div className="hero-flex">
        <div className="hero-text">
          <div className="subheading">{"Tomorrow's Leaders"}</div>Today
        </div>
        <div className="btn-hero">
          <div className="hero-paragraph">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim */}
            {heroSubText}
          </div>
          <div className="btn-border">
            <Link href={"/apply"}>
              <a
                className=".btn"
                style={{
                  color: "#61892F",
                  textDecoration: "none",
                }}
              >
                <span className="cursor-pointer hover:text-u-off-white ease-out duration-200">
                  Apply
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          max-width: 1400px;
          margin-inline: auto;
        }
      `}</style>
    </section>
  );
}
