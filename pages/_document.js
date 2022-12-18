import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <meta
          name="description"
          content="I am Miki, a tattoo artist in Ankh tattoo studio. I was born and raised in Hong Kong, and I moved to Vancouver since 2005. From an early age, I have always been passionate about art, drawing and designing. While working in the studio as brows artist, I got a chance to learning tattoo under mentorship of Nancy Liang. With the experience working in detail with machine, I was fascinated and extremely interested in the fine-line tattoo style, which create incredibly detailed minimalistic tattoo. Continuing advancing in past 3 years, I found my passion in micro-realistic style and love working on small dainty tattoo with incredible details and with color as highlight brightening up the piece. I also like to play with geometric design to create perfect line and shape on body."
        ></meta>
        <meta
          name="description"
          content="326 W 5th Ave, Vancouver BC Studio #12 @ The Beaumont"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
