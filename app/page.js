"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, QrCode, Phone, Mail, MapPin } from "lucide-react"
import styles from "./page.module.css"

const tattooWorks = [
  {
    id: 1,
    title: "Traditional Japanese",
    images: [
      "/tattoo1.png",
      "/tattoo2.png",
      "/tattoo3.png",
    ],
    artist: "Master Ink",
    style: "Traditional",
  },
  {
    id: 2,
    title: "Black & Grey Realism",
    images: [
      "/tattoo4.png",
      "/tattoo5.png",
      "/tattoo6.png",
    ],
    artist: "Shadow Works",
    style: "Realism",
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className={styles.main}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
      <div className={styles.logo}>
  <Link href="/" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}>
    ALTARO
  </Link>
</div>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.activeLink}>
            Home
          </Link>
          <Link href="#" className={styles.link}>
            St. Studio
          </Link>
          <Link href="#" className={styles.link}>
            Work
          </Link>
          <Link href="#" className={styles.link}>
            Can Do
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <Image src="/aaronma.png" alt="Portrait" fill priority className={styles.portraitImage} />
        </div>

        {/* Text Overlay */}
        <div className={styles.textOverlay}>
          <p className={styles.welcome}>Welcome</p>
          <h1 className={styles.title}>
            I&apos;M ALTARO
            <br />
            CREATION©
          </h1>
          <div className={styles.buttonGroup}>
            <Link href="#gallery" className={styles.galleryButton}>
              See Gallery
            </Link>
            <button onClick={() => setIsModalOpen(true)} className={styles.bookButton}>
              Book Now
            </button>
          </div>
        </div>

        {/* Red Section */}
        <div className={styles.redSection}>
          <div className={styles.bottomContent}>
            <div className={styles.line} />
            <p className={styles.description}>
              I&apos;M AARON CHRISTIAN MALTE ALSO KNOWN AS "ALTARO"  IS A FREELANCE TATTOO ARTIST, EVENT PHOTOGRAPER, AND GRAPHIC DESIGNER
              BASED IN MANILA 
            </p>
          </div>
        </div>

        {/* Tattoo Gallery */}
        <div id="gallery" className={styles.tattooGallery}>
          {tattooWorks.map((work) => (
            <div key={work.id} className={styles.tattooCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2 className={styles.cardTitle}>{work.title}</h2>
                  <p className={styles.cardArtist}>{work.artist}</p>
                </div>
                <QrCode className={styles.qrCode} />
              </div>

              <div className={styles.cardGrid}>
                {work.images.map((src, index) => (
                  <div key={index} className={styles.cardImage}>
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`${work.title} view ${index + 1}`}
                      width={400}
                      height={600}
                      className={styles.tattooImage}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.cardDetails}>
                  <p className={styles.detailLabel}>Style</p>
                  <p className={styles.detailValue}>{work.style}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
              <X />
            </button>

            <h2 className={styles.modalTitle}>Book Your Session</h2>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <p>+1 234 567 8900</p>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <p>tattoo@example.com</p>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <p>123 Ink Street, NY 10001</p>
              </div>
            </div>

            <form className={styles.contactForm}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Message / Style Preference"></textarea>
              <button type="submit" className={styles.submitButton}>
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}

  
    </main>
  )
}

