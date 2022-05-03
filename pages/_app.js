import Layout from "../components/Layout";
import "../styles/globals.css";
import { createClient } from "contentful";

// MyApp.getInitialProps = async () => {
//   const client = createClient({
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//     space: process.env.CONTENTFUL_SPACE_ID,
//   });

//   const res = await client.getEntries({ content_type: "navPage" });
//   return { pages: res.items };
// };

// function MyApp({ Component, pageProps, pages }) {
function MyApp({ Component, pageProps }) {
  return (
    // <Layout pages={pages}>
    <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp;
