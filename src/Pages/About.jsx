import React, {useEffect} from "react"
function About() {

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
      fontSize: "45px",
      width: "80px",
      marginBottom: "10px",
      borderRadius: "15px",
      padding: "2px",
      margin: "10% 50% 10% 35%",
      backgroundColor: "#f0ede5",
    },

    cardTitle: {
      fontSize: "20px",
      color: "#827b58",
      marginBottom: "10px"
    }
  }

  const data = [
    {
      icon: "🏥",
      title: "Our Mission",
      desc: "To provide affordable, reliable and world-class healthcare services to every patient with compassion and advanced medical technology."
    },
    {
      icon: "👨🏻‍⚕️",
      title: "Expert Doctors",
      desc: "Our team includes highly qualified doctors, surgeons, and specialists with years of experience in their respective fields."
    },
    {
      icon: "💊",
      title: "Advanced Facilities",
      desc: "We use modern diagnostic tools, advanced operation theatres, and latest medical equipment for accurate treatment."
    },
    {
      icon: "❤️",
      title: "Patient First Approach",
      desc: "Every decision we take is centered around patient comfort, safety, and fast recovery."
    }
  ]

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>About HealthCure</h1>

        <p style={styles.subtitle}>
          HealthCure is a trusted healthcare platform committed to delivering 
          high-quality medical care with modern technology and experienced doctors. 
          We believe healthcare should be accessible, affordable, and compassionate 
          for everyone.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={{ color: "#827b58", marginBottom: "15px" }}>
          Our Story
        </h2>

        <p>
          HealthCure started with a simple vision — to make quality healthcare 
          accessible to everyone. From a small clinic to a modern multi-speciality 
          healthcare platform, our journey has been driven by trust, care, and 
          continuous innovation.
        </p>

        <p style={{ marginTop: "15px" }}>
          Today, we serve thousands of patients with advanced medical solutions, 
          emergency care, and specialist consultations. Our focus is not just 
          treatment, but complete healing and long-term wellness.
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

export default About