import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import HeroLanding from "../components/page_component/HeroLanding";
import InterAVid from "../components/page_component/InterAVid";
import Family from "../components/page_component/Family";
import Features from "../components/page_component/Features";

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

  return (
    <div>
      <HeroLanding heroSubText={heroSubText} />
      <InterAVid />
      <Family familySect={familySect} />
      <Features sectTexts={{ cpp, fieldTrip, peStudioArts, service }} />
    </div>
  );
}
