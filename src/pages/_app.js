import { Fragment } from "react";
import Head from 'next/head';

import '@/styles/globals.scss'

//layout component
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
      <Fragment>
          <Head>
              <title>Expert Web-Development Services</title>
              <meta 
                  name='description' 
                  content="Let's Create Your Dream-Looking Website"
              />
              <meta name='viewport'  content='initial-scale=1.0, width=device-width'/>
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Fragment>
  )
}
