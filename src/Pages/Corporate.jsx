import React, { useEffect } from "react"

function Corporate() {

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
      icon: "🏢",
      title: "Corporate Health Plans",
      desc: "Customized healthcare packages designed for companies and their employees."
    },
    {
      icon: "📅",
      title: "Easy Appointments",
      desc: "Book doctor consultations for your team quickly and efficiently."
    },
    {
      icon: "🩺",
      title: "Regular Checkups",
      desc: "Scheduled health checkups to ensure employee wellness and productivity."
    },
    {
      icon: "🤖",
      title: "Smart Assistance",
      desc: "AI-powered chatbot to guide employees for instant healthcare help."
    }
  ]

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Corporate Healthcare</h1>

        <p style={styles.subtitle}>
          HealthCure provides smart and reliable healthcare solutions for 
          companies. We help organizations take better care of their employees 
          with modern tools, expert doctors, and seamless services.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={{ color: "#827b58", marginBottom: "15px" }}>
          Why Choose Us?
        </h2>

        <p>
          We understand that healthy employees build strong companies. Our 
          corporate healthcare solutions are designed to provide easy access 
          to doctors, regular health monitoring, and quick medical support.
        </p>

        <p style={{ marginTop: "15px" }}>
          From startups to large enterprises, HealthCure ensures that every 
          employee gets the best care without hassle.
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

export default Corporate