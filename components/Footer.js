import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faPaw, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="decorative-line"></div>
      <ul className="ftr-links">
        <li className="link1">Mobile App</li>
        <li className="link2">Community</li>
        <li className="logo-bg logo">
          <Link href="/">Inter-A</Link>
        </li>
        <li className="link3">Blog</li>
        <li className="link4">Resources</li>
      </ul>
      <div className="social-links icons">
        <a
          target="_blank"
          href="https://www.facebook.com/social.intera/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/social_intera/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a target="_blank" href="http://www.sd36.bc.ca" rel="noreferrer">
          <FontAwesomeIcon icon={faSchool} />
        </a>
        <a
          target="_blank"
          href="https://www.surreyschools.ca/schools/queene/Pages/default.aspx"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faPaw} />
        </a>
        <a className="to-top" href="#nav">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
      <style jsx>{`
        footer {
          padding-top: 3rem;
        }
        li {
          list-style: none;
          justify-self: center;
          margin-top: 1.5rem;
        }
        li:first-child {
          justify-self: start;
        }
        li:last-child {
          justify-self: end;
        }
        ul {
          display: grid;
          row-gap: 1rem;
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            "logo logo logo logo"
            "link1 link2 link3 link4";
          color: white;
        }
        @media (min-width: 900px) {
          ul {
            font-size: 1.1rem;
          }
        }
        @media (max-width: 600px) {
          .decorative-line {
            margin-bottom: 1rem !important;
          }
          .icons {
            gap: 0.5rem !important;
          }
          .icons > * {
            background-color: blue;
            transform: scale(0.85);
          }
        }
        @media (max-width: 520px) {
          .to-top {
            position: static !important;
          }
        }
        .logo {
          grid-area: logo;
          justify-self: center;
          color: black;
          margin-top: 0;
        }
        .icons {
          margin-top: 1.5rem;
          position: relative;
          margin-bottom: 1rem;
        }
        .icons > * {
          background-color: white;
          display: grid;
          place-content: center;
          border-radius: 100%;
          font-size: 1.5rem;
          color: #61892f;
          margin-top: 1rem;
        }
        .to-top {
          position: absolute;
          right: 0;
          font-size: 2rem !important;
          scroll-behavior: smooth !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
