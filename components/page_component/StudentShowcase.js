import Link from "next/link";

const StudentShowcase = ({ text, img }) => {
  return (
    <section>
      <div className="content">
        <div className="title">
          student of the <br />
          <span className="title-span">MONTH</span>
        </div>
        <div className="img-center">
          <img src={img} alt="An image of an inter-a student" />
        </div>
        <div className="hero-paragraph no-padding desc-text">
          {text}
          <br />
          <Link href={"/student-of-the-month"}>
            <a>Read more </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        a {
          position: relative;
          top: 2rem;
          font-weight: 500;
        }
        .img-center {
          display: grid;
          place-items: center;
        }
        .no-padding {
          padding: 0;
        }

        .desc-text {
          padding-top: 2rem;
          max-width: 1200px;
        margin-inline: auto;
        }

        .title {
          color: white;
          font-family: "Spartan", sans-serif;
          font-size: 32px;
          letter-spacing -2.88px;
          text-align: center;
        }
        .title-span {
          font-size: 56px;
          font-family: 'Righteous', serif;
          letter-spacing: 0.14em;
        }
        section {
          background-color: #90d136;
          padding-block: 6rem;
        }
        @media (min-width: 622px) {
          .title {
            font-size: 40px;
          }
          .title-span {
            font-size: 80px;
          }
        }
        @media (min-width: 1000px) {
          .title {
            font-size: 48px;
          }
          .title-span {
            font-size: 96px;
          }
        }
      `}</style>
    </section>
  );
};
export default StudentShowcase;
