import React from "react";
import Layout from "../components/Layout";
import img from "next/image";
import { createClient } from "contentful";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "/styles/Page.module.css";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "navPage" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({ content_type: "navPage" });

  const { items } = await client.getEntries({
    content_type: "navPage",
    "fields.slug": params.slug,
  });

  if (items.length === 0) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { page: items[0], res },
    revalidate: 1,
  };
};

function page({ page, res }) {
  console.log(res.items, page);
  if (!page) return <div>Loading</div>;
  const { title, content } = page.fields;

  const Bold = ({ children }) => <p className="bold">{children}</p>;

  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const H1 = ({ children }) => (
    <h1 className="doc-h1 sect-heading">{children}</h1>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => (
        // <div className="h2-wrapper">
        <h2 className="doc-h2">{children}</h2>
        // </div>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="doc-h3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="doc-h4">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="doc-h5">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="doc-h6">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="doc-p">{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img className="doc-img" src={node.data.target.fields.file.url} />
      ),
    },
    renderText: (text) => text.replace("!", "?"),
  };

  console.log(page);
  return (
    <Layout pages={res.items}>
      <div className="text-white">
        <div className="doc-title">{title}</div>
        <div className="doc-wrapper">
          {documentToReactComponents(content, options)}
        </div>
        <style jsx>
          {`
            .title {
              text-align: center;
              width: 100vw;
              margin-top: 2rem;
              margin-bottom: -2rem;
              background-color: blue;
            }
            .doc-wrapper {
              max-width: 1000px;
              width: 70%;
              margin-inline: auto;
            }
            .center {
              max-width: 820px;
            }
            .text-white {
              color: white;
            }

            @media (max-width: 768px) {
              .doc-wrapper {
                width: 90%;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

export default page;
