import { Html, Head, Main, NextScript } from "next/document";
import GoogleTagManager from "../hooks/GoogleTagManager";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/img/ankh_fav_icon.png"></link>
        {/* Josefin Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Fineline tattoo is subtle, delicate, and thin-line tattoo. Unlike traditional tattoos, which create thicker and bolder design, fine-line tattoos are created by just a single tattoo needle or combinations of small needles. This style of tattoo allows artist to create soft, tiny and minimalistic tattoos with intricately detailed design by using ultra-thin line incorporating with color, shading, and texture. It’s a growing trend in past decade to make delicate hidden tattoos, with super skinny lines and minimalist designs."
        ></meta>
        <GoogleTagManager />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
