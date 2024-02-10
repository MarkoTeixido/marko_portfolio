import Head from "next/head";
import Navbar from "@/components/Navbar";
import ProjectPreviewLayout from "@/components/ProjectPreviewLayout";
import AboutCard from "@/components/AboutCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio build with next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="WYIp1wRnskkmMmMrItvDHtsH-RaVuEzVkutBaDHhF70" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main>
        <AboutCard />
        <ProjectPreviewLayout />
      </main>
      <Footer />
    </>
  );
}
