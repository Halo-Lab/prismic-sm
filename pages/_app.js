import { createClient } from '../prismicio'
import "../styles/index.scss";
import Link from 'next/link'
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

export default function App({ Component, pageProps }) {
  const {pageTitle, pageDescription, google_analytics_id} = pageProps.data;

  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content={pageDescription} />
        <title>{pageTitle}</title>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google_analytics_id}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />      

      </Head>    
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Layout data={pageProps.data.slices}>
            <Component {...pageProps} />
          </Layout>
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

App.getInitialProps = async () => {
  let pageProps = {};
  const client = createClient()
  try {
    let page = await client.getByUID('layout', 'layout');    
    pageProps["data"] = page.data;    
  } catch (error) {}
  return { pageProps };
};
