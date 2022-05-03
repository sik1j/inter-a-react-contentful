import React from "react";

export default function Features({ sectTexts }) {
  const { cpp, peStudioArts, service, fieldTrip } = sectTexts;

  return (
    <section className="features-sect">
      <span className="backdrop"></span>
      <div className="sect-heading">
        what makes us <br />
        <span>DIFFERENT</span>
      </div>
      <div className="card-flex">
        <div className="card">
          <iframe
            src="https://www.youtube.com/embed/xdseYXZJX6s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-text">
          <div className="heading">CPP</div>
          <div className="text">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "} */}
            {cpp}
          </div>
        </div>
      </div>
      <div className="card-flex">
        <div className="card">
          <iframe
            src="https://www.youtube.com/embed/UkK_2bzZWH8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-text">
          <div className="heading">PE & Studio Arts</div>
          <div className="text">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "} */}
            {peStudioArts}
          </div>
        </div>
      </div>
      <div className="card-flex">
        <div className="card">
          <iframe
            src="https://www.youtube.com/embed/-0E0QF9TMY8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-text">
          <div className="heading">Service</div>
          <div className="text">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "} */}
            {service}
          </div>
        </div>
      </div>
      <div className="card-flex">
        <div className="card">
          <iframe
            src="https://www.youtube.com/embed/seGyl6WXOf4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-text">
          <div className="heading">Field Trips</div>
          <div className="text">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel{" "} */}
            {fieldTrip}
          </div>
        </div>
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
