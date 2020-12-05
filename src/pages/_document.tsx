import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  /**
   * <Head/> should be kept clear / empty.
   * @see https://github.com/vercel/next.js/blob/master/errors/no-document-title.md
   * @see https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md
   */

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
