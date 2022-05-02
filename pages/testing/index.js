import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({ content_type: "landingPage" });

  return {
    props: { pages: response.items },
    revalidate: 1,
  };
};

export default function Home({ pages }) {
  console.log(pages);
  const {
    heroSubText,
    familySect,
    cpp,
    fieldTrip,
    isApplicationTime,
    peStudioArts,
    service,
  } = pages[0].fields;
  console.log(heroSubText);

  return <div>Page</div>;
}
