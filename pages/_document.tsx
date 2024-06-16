// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Place your Google Tag just below the <head> tag */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-L1P87QD4MS`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-L1P87QD4MS', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* Other meta tags, title, etc. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
