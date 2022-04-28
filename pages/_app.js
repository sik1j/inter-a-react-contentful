import Layout from "../components/Layout";
import "../styles/globals.css";
import { createClient } from "contentful";

MyApp.getInitialProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "navPage" });
  return { pages: res.items };
};

function MyApp({ Component, pageProps, pages }) {
  return (
    <Layout pages={pages}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
