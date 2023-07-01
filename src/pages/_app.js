import { Fragment } from "react";
import Head from 'next/head';

import '@/styles/globals.scss'

//layout component
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
      <Fragment>
          <Head>
              <title>Business Web Applications</title>
              <meta 
                  name='description' 
                  content='Find out the best business solution for you by making a web application of your choise with the latest technologies'/>
              <meta name='viewport'  content='initial-scale=1.0, width=device-width'/>
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Fragment>
  )
}
