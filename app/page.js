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
          AARON CHRISTIAN MALTE ALSO KNOWN AS "ALTARO"  IS A FREELANCE TATTOO ARTIST, EVENT PHOTOGRAPER, AND GRAPHIC DESIGNER

          </p>
          <div className="est">
            <span className="estBox">EST</span>
            <span className="estYear">2022</span>
          </div>
          <p className="japanese-text">アーロン・クリスチャン・マルテ</p>
          <p className="footer-text">© Altaro Design Co. All rights reserved</p>
        </div>

        {/* Right Section */}
        <div className="right">
          <Image src="/aaron.png" alt="Model" width={400} height={500} className="image" />
        </div>
      </div>

      {/* Tattoo Section */}
      <div className="tattoo-section">
        <h2 className="section-title">TATTOOS</h2>
        <div className="tattoo-gallery">
          <Image src="/tattoo1.jpg" alt="Tattoo 1" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo2.jpg" alt="Tattoo 2" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo3.jfif" alt="Tattoo 3" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo4.png" alt="Tattoo 1" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo5.png" alt="Tattoo 1" width={300} height={400} className="tattoo-image" />
          <Image src="/tattoo6.png" alt="Tattoo 1" width={300} height={400} className="tattoo-image" />

        </div>
      </div>
    </>
  );
}
