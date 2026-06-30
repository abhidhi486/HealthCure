import React, { useEffect } from "react"

function Patient() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f6f5f2",
      padding: "100px 80px",
      fontFamily: "Roboto, sans-serif"
    },

    hero: {
      textAlign: "center",
      marginBottom: "70px"
    },

    title: {
      fontSize: "42px",
      color: "#827b58",
      marginBottom: "15px"
    },

    subtitle: {
      fontSize: "16px",
      color: "#666",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.8"
    },

    section: {
      maxWidth: "1100px",
      margin: "0 auto",
      marginTop: "60px",
      lineHeight: "1.8",
      color: "#555"
    },

    grid: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "50px"
    },

    card: {
      width: "300px",
      background: "#ffffffb3",
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #c7b99a",
      boxShadow: "0 5px 20px #00000014",
      transition: "0.3s ease",
      textAlign: "center"
    },

    icon: {
      fontSize: "35px",
      marginBottom: "15px"
    },

    cardTitle: {
      fontSize: "20px",
      color: "#827b58",
      marginBottom: "10px"
    }
  }

  const data = [
    {
      icon: "🩺",
      title: "Doctor Consultation",
      desc: "Connect with experienced doctors for expert medical advice anytime."
    },
    {
      icon: "📅",
      title: "Book Appointment",
      desc: "Schedule your doctor visits easily with our quick booking system."
    },
    {
      icon: "💊",
      title: "Medicine Guidance",
      desc: "Get proper guidance for medicines and treatments prescribed by doctors."
    },
    {
      icon: "📋",
      title: "Health Records",
      desc: "Maintain and access your medical history securely in one place."
    }
  ]

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Patient Services</h1>

        <p style={styles.subtitle}>
          HealthCure provides seamless healthcare services for patients. 
          From doctor consultations to health records, everything is designed 
          to make your healthcare journey simple and stress-free.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={{ color: "#827b58", marginBottom: "15px" }}>
          How We Help Patients
        </h2>

        <p>
          Our platform is built to ensure that every patient gets quick and 
          reliable access to healthcare services. Whether you need a doctor, 
          medicine guidance, or health tracking — we’ve got you covered.
        </p>

        <p style={{ marginTop: "15px" }}>
          We focus on convenience, affordability, and quality care to improve 
          your overall health experience.
        </p>
      </div>

      <div style={styles.grid}>
        {data.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)"
            }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Patient