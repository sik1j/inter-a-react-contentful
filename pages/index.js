import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import HeroLanding from "../components/page_component/HeroLanding";
import InterAVid from "../components/page_component/InterAVid";
import Family from "../components/page_component/Family";
import Features from "../components/page_component/Features";
import Layout from "../components/Layout";
import StudentShowcase from "../components/page_component/StudentShowcase";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries();

  return {
    props: { pages: response.items },
    revalidate: 1,
  };
};

export default function Home({ pages, otherEntry }) {
  let landingPageObj;
  let navLinksArr = [];
  for (let i = 0; i < pages.length; i++) {
    let obj = pages[i];
    if (obj.sys.contentType.sys.id == "landingPage") {
      landingPageObj = obj;
    } else {
      navLinksArr.push(obj);
    }
  }
  console.log(navLinksArr, landingPageObj);
  const {
    heroSubText,
    familySect,
    cpp,
    fieldTrip,
    isApplicationTime,
    peStudioArts,
    service,
  } = landingPageObj.fields;
  console.log(heroSubText);

  return (
    <div>
      <Layout pages={navLinksArr}>
        <HeroLanding heroSubText={heroSubText} />
        <StudentShowcase />
        <InterAVid />
        <Family familySect={familySect} />
        <Features sectTexts={{ cpp, fieldTrip, peStudioArts, service }} />
      </Layout>
    </div>
  );
}
