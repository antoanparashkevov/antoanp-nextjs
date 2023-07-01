import '@/styles/globals.scss'

//layout component
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
