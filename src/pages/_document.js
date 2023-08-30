import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/*React portals*/}
        <div id='backdrop' />
        <div id='overlays' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
