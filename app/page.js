import Image from "next/image";
import Head from "next/head";

export default function Haus() {
  return (
    <>
      <Head>
        <title>HAUS® Brand Guidelines</title>
      </Head>
      <div className="container">
        {/* Left Section */}
        <div className="left">
          <div className="top-left">BRAND GUIDELINES</div>
          <h1 className="title">ALTARO CREATION®</h1>
          <p className="description">
            GUIDELINES THAT FIT THE CREATIVE TEAM THROUGH DESIGN DIRECTIONS AND HAUS EVENTS, CLOTHING, AND IMAGES
          </p>
          <div className="est">
            <span className="estBox">EST</span>
            <span className="estYear">2021</span>
          </div>
          <p className="japanese-text">クリエイティブチームのスタジオ・ガイドライン</p>
          <p className="footer-text">© STUDIO LAB - LOS ANGELES</p>
        </div>

        {/* Right Section */}
        <div className="right">
          <Image src="/ivan.jpg" alt="Model" width={400} height={500} className="image" />
        </div>
      </div>

      {/* Tattoo Section */}
      <div className="tattoo-section">
        <h2 className="section-title">TATTOOS</h2>
        <div className="tattoo-gallery">
          <Image src="/tattoo1.jpg" alt="Tattoo 1" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo2.jpg" alt="Tattoo 2" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo3.jfif" alt="Tattoo 3" width={300} height={400} className="tattoo-image" />
        </div>
      </div>
    </>
  );
}
