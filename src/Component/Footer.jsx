import { Link } from "react-router-dom"
import logo from "../Image/logo.png"
import { useState } from "react"

function Footer() {

  const [hoverIndex, setHoverIndex] = useState(null)

  const styles = {
    footer: {
      background: "#f6f5f2",
      padding: "80px 80px 15px 80px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "30px",
      borderTop: "1px solid #e5dfd0"
    },

    section: {
      minWidth: "220px",
      marginBottom: "30px"
    },

    logoImg: {
      width: "200px",
    },

    text: {
      padding: "5px 0",
      width: "240px",
      fontSize: "16px",
      color: "#827b58",
      marginTop: "10px",
      lineHeight: "1.6"
    },

    heading: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "15px",
      color: "#827b58",
      letterSpacing: "0.5px"
    },

    link: (id) => ({
      display: "block",
      textDecoration: "none",
      color: hoverIndex === id ? "#ddc068" : "#827b58",
      fontSize: "15px",
      marginBottom: "8px",
      transition: "0.3s",
      transform: hoverIndex === id ? "scale(1.05)" : "none"
    }),

    copyright: {
      background: "#f6f5f2",
      textAlign: "center",
      padding: "20px 10px",
      fontSize: "14px",
      color: "#827b58",
      borderTop: "1px solid #e0dcc9",
      letterSpacing: "0.5px",
      width: "100%"
    }
  }

  const serviceLinks = [
    { id: "facilities", name: "Our Facilities", path: "/facilities" },
    { id: "corporate", name: "Corporate Services", path: "/corporate" },
    { id: "patient", name: "Patient Services", path: "/patient" },
    { id: "emergency", name: "Emergency Services", path: "/emergency" }
  ]

  const aboutLinks = [
    { id: "specialities", name: "Specialities", path: "/specialities" },
    { id: "consultant", name: "Consultant Profile", path: "/consultant" },
    { id: "news", name: "News & Events", path: "/news" },
    { id: "lives", name: "Lives Touched ❤️", path: "/lives" }
  ]

  const contactLinks = [
    { id: "enquiry", name: "Online Enquiry", path: "/enquiry" },
    { id: "feedback", name: "Feedback", path: "/feedback" },
    { id: "career", name: "Career", path: "/career" },
    { id: "mail", name: "info@heathcure.org", path: "/mail" }
  ]

  return (
    <>
      <div style={styles.footer}>

        <div style={styles.section}>
          <img src={logo} alt="logo" style={styles.logoImg} />

          <p style={styles.text}>
            Sector 2, Kurukshetra, Haryana, India 136118
          </p>

          <p style={styles.text}>
            Contact No. 01744-222222
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Services</h3>

          {serviceLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={styles.link(item.id)}
              onMouseEnter={() => setHoverIndex(item.id)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>About Us</h3>

          {aboutLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={styles.link(item.id)}
              onMouseEnter={() => setHoverIndex(item.id)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>

          {contactLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={styles.link(item.id)}
              onMouseEnter={() => setHoverIndex(item.id)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>

      <div style={styles.copyright}>
        © 2026 <strong>HealthCure</strong>. All rights reserved.
      </div>
    </>
  )
}

export default Footer