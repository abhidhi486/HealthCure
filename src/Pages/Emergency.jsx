import React, { useEffect } from "react"

function Emergency() {

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
    },

    button: {
      marginTop: "25px",
      padding: "12px 28px",
      borderRadius: "25px",
      border: "none",
      background: "#ab0f0f",
      color: "#fff",
      fontSize: "15px",
      cursor: "pointer",
    },

    emergencyBox: {
      background: "#fff3f3",
      border: "1px solid #ffd6d6",
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
      marginTop: "40px"
    }
  }

  const data = [
    {
      icon: "🚑",
      title: "Ambulance Service",
      desc: "Quick ambulance support available for immediate medical emergencies."
    },
    {
      icon: "🏥",
      title: "Nearest Hospitals",
      desc: "Find and reach nearby hospitals quickly during emergencies."
    },
    {
      icon: "📞",
      title: "Emergency Contact",
      desc: "Instantly connect with emergency helpline and support staff."
    },
    {
      icon: "🩺",
      title: "Critical Care",
      desc: "Access to ICU, trauma care, and emergency medical specialists."
    }
  ]

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Emergency Services 🚨</h1>

        <p style={styles.subtitle}>
          Immediate medical assistance when you need it the most. 
          HealthCure ensures fast response, reliable services, and 
          life-saving support in critical situations.
        </p>
      </div>

      <div style={styles.emergencyBox}>
        <h2 style={{ color: "#b00020" }}>
          Need urgent help?
        </h2>

        <p style={{ color: "#555", marginTop: "10px" }}>
          Call emergency services immediately or reach the nearest hospital.
        </p>

        <button
          style={styles.button}
        >
          Call Now
        </button>
      </div>

      <div style={styles.section}>
        <h2 style={{ color: "#827b58", marginBottom: "15px" }}>
          Our Emergency Support
        </h2>

        <p>
          We provide rapid response emergency services to ensure patient safety 
          during critical situations. Our system is designed to connect you with 
          the nearest help instantly.
        </p>

        <p style={{ marginTop: "15px" }}>
          From ambulance services to hospital support, we make sure you are never 
          alone in an emergency.
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

export default Emergency