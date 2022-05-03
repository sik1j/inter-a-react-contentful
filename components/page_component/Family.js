import React from "react";

export default function Family({ familySect }) {
  return (
    <section className="family-sect">
      <span className="backdrop"></span>
      <div>
        <div className="hero-text">
          <div className="subheading">think of us as a</div> Family
        </div>
        <div className="hero-paragraph">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vel id
            amet purus amet rhoncus, libero accumsan. Nisl nec quis arcu
            pharetra diam amet. Viverra lectus mauris erat cursus lacus. Risus
            morbi pulvinar odio nec. In nisl mattis orci lacus, velit dictum
            etiam est. Nullam proin senectus vitae tortor habitant. Sed posuere
            congue sed ut eget tincidunt enim, tellus. Sollicitudin tincidunt eu
            fringilla adipiscing urna cras purus, nunc volutpat. */}
          {familySect}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="image of inter-a students"
      />
      <style jsx>{`
        section {
          max-width: 1400px;
          position: relative;
          margin-inline: auto;
         overflow: hidden;

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
