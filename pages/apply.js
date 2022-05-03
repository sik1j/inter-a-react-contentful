import React from "react";
import { createClient } from "contentful";
import Layout from "../components/Layout";

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
      <div>apply</div>
    </Layout>
  );
}
