import React from "react";

export default function InterAVid() {
  return (
    <section className="inter-a-video">
      <span className="backdrop"></span>
      <div className="sect-heading">
        we are <br />
        <span>Inter-A</span>
      </div>
      <div className="card">
        <iframe
          src="https://www.youtube.com/embed/PMM-CGm-ViY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <style jsx>{`
        section {
          max-width: 1400px;
          position: relative;
          margin-inline: auto;
        }
        .backdrop {
          background-color: inherit;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -100vw;
          right: -100vw;
          z-index: -1;
        }
      `}</style>
    </section>
  );
}
