import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="noindex" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap"></link>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <script src="https://kit.fontawesome.com/739bbc2f39.js" crossOrigin="anonymous"></script>
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap"
            />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"></link>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
