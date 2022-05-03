import { createClient } from "contentful";
import React from "react";
import Layout from "../../components/Layout";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "navPage" });
  return {
    props: { pages: res.items },
    revalidate: 1,
  };
};

export default function apply({ pages }) {
  return (
    <Layout pages={pages}>
      <div className="container-box">
        <div>
          <span className="guide">Contact Form</span>
          <form
            action="https://formsubmit.co/karkisikij2@gmail.com"
            method="POST"
          >
            <div className="cols">
              <div>
                <div className="flex">
                  <label htmlFor="">First Name</label>
                  <input
                    name="first-name"
                    type="text"
                    placeholder="first name.."
                  />
                </div>
                <div className="flex">
                  <label htmlFor="">Last Name</label>
                  <input
                    name="last-name"
                    type="text"
                    placeholder="last name.."
                  />
                </div>
              </div>
              <div>
                <div className="flex">
                  <label htmlFor="">Student Name</label>
                  <input
                    name="student-name"
                    type="text"
                    placeholder="student name.."
                  />
                </div>
                <div className="flex">
                  <label htmlFor="">Student Grade</label>
                  <input
                    name="student-grade"
                    type="number"
                    placeholder="student grade.."
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                id=""
                placeholder="enter your message.."
              ></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
        <style jsx>{`
          label {
            margin-bottom: 0.2rem;
          }
          textarea {
            height: 200px;
            padding-left: 0.3rem;
            padding-top: 0.3rem;
          }
          .button {
            color: white;
            cursor: pointer;
            font-size: 18px;
            border: none;
            border-radius: 20px;
            background-color: #90d136;
            padding: 0.5em 1em;
            display: block;
            margin-inline: auto;
          }
          .cols {
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 600px) {
            .cols {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          .flex {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
          }
          .guide {
            font-size: 20px;
            padding-bottom: 1rem;
            display: inline-block;
            color: #61892f;
            font-weight: 500;
          }
          .container-box {
            max-width: 600px;
            width: 90%;
            background-color: white;
            margin-inline: auto;
            padding: 48px 40px 36px 40px;
            border-radius: 10px;
            margin-block: 4rem;
            box-shadow: rgba(0, 0, 0, 0.712) 0px 0px 20px;
          }
        `}</style>
      </div>
    </Layout>
  );
}
