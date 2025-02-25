"use client"; // Ensure it's a client component

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Haus() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>HAUS® Brand Guidelines</title>
      </Head>

      <div className="container">
        {/* Left Section */}
        <div className="left">
          <div className="top-left">BRAND GUIDELINES</div>
          <h1 className="title">ALTARO CREATION®</h1>
          <p className="description">
            HELLO, I'M AARON CHRISTIAN MALTE, ALSO KNOWN AS "ALTARO." I'M A
            FREELANCE TATTOO ARTIST, EVENT PHOTOGRAPHER, AND GRAPHIC DESIGNER
            BASED IN MANILA.
          </p>
          <button className="book-now" onClick={() => setIsModalOpen(true)}>
            BOOK NOW
          </button>

          <div className="est">
            <span className="estBox">EST</span>
            <span className="estYear">2022</span>
          </div>
          <p className="japanese-text">アーロン・クリスチャン・マルテ</p>
          <p className="footer-text">© Altaro Design Co. All rights reserved</p>
        </div>

        {/* Right Section */}
        <div className="right">
          <Image
            src="/aaronma.png"
            alt="Model"
            width={800}
            height={1000}
            className="image"
          />
        </div>
      </div>

      {/* Tattoo Section */}
      <div className="tattoo-section">
        <h2 className="section-title">TATTOOS</h2>
        <div className="tattoo-gallery">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              src={`/tattoo${num}.png`}
              alt={`Tattoo ${num}`}
              width={300}
              height={400}
              className="tattoo-image"
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Information</h2>
            <p>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61571900350996"
                target="_blank"
                rel="noopener noreferrer"
                className="fb-link"
              >
                Aaron Malte
              </a>
            </p>
            <p>Email: <a href="mailto:contactacmalte@gmail.com">contactacmalte@gmail.com</a></p>
            <p>Phone: <a href="tel:+639913205739">+63 991 320 5739</a></p>
            <p>Location: Around Metro Manila and Bulacan</p>
            <p>Inquire now!</p>

            <button className="close-button" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}