import Document, { Head, Main, NextScript } from "next/document";
import { config } from "../config/config";

const GA_TRACKING_ID = config.gaTrackingId;
export default class MyDocument extends Document {
  static getInitialProps = Document.getInitialProps

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/icons/favicon.ico" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond|Roboto|Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content={config.css.primaryColor} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/icon_32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/static/icons/icon_48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="/static/icons/icon_128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/static/icons/icon_256.png"
          />
          <meta name="apple-mobile-web-app-title" content={config.siteName} />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/icons/icon_180.png"
          />
          <meta
            name="msapplication-TileColor"
            content={config.css.primaryColor}
          />
          <meta
            name="msapplication-TileImage"
            content="/static/icons/icon_150.png"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
