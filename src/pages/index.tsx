import Head from "next/head";
import Navbar from "@/components/Navbar";
import ProjectPreviewLayout from "@/components/ProjectPreviewLayout";
import AboutCard from "@/components/AboutCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="es" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Marko Teixido's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="WYIp1wRnskkmMmMrItvDHtsH-RaVuEzVkutBaDHhF70" />
        <link rel="icon" href="/IconsSVG/brandingIcon.svg" />
        <title>Portfolio</title>
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
