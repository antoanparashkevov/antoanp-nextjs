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
                  content='Expert Web-Development Services! Let’s Create an Astonishing-Looking Website For Your Business'
              />
              <meta name='viewport'  content='initial-scale=1.0, width=device-width'/>
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Fragment>
  )
}
