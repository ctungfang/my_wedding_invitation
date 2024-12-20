import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Wedding = dynamic(() => import("@/components/Wedding"), { ssr: false });
const EInvitation = dynamic(() => import("@/components/EInvitation"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(() => import("@/components/CongratulatoryMoney"), { ssr: false });
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Susan❤Charles 邀請您參加婚禮" name="Title" />
        <meta
          content="2024年12月31日 星期二 晚上18:30"
          name="Description"
        />
        <meta content="2024年12月31日 星期二 晚上18:30" name="Keyword" />
        <meta property="og:title" content="Susan❤Charles 邀請您參加婚禮" />
        <meta
          property="og:description"
          content="2024年12月31日 星期二 晚上18:30"
        />
        <meta
          property="og:url"
          content="https://my-wedding-invitation-five.vercel.app/"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Susan❤Charles 邀請您參加婚禮</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Wedding data={JsonData} />
        <EInvitation data={JsonData} />
        <Gallery />
        <Location data={JsonData} />
        <CongratulatoryMoney data={JsonData} />
        <Share data={JsonData} />
        <Footer>Copyright © 2024 Charles Tung Fang</Footer>
      </main>
    </>
  );
}
