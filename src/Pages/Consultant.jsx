import React, { useEffect } from "react"

function Consultant() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const doctors = [
    {
      name: "Dr. Ajay Agarwal",
      specialization: "Cardiologist",
      experience: "12+ Years Experience",
      desc: "Expert in heart-related treatments and surgeries."
    },
    {
      name: "Dr. Krishna Mittal",
      specialization: "Oncologist",
      experience: "16+ Years Experience",
      desc: "Specialist in analysis and treatments of cancer."
    },
    {
      name: "Dr. Aditi Gurjar",
      specialization: "ENT Specialist",
      experience: "8+ Years Experience",
      desc: "Expert for all ear, nose and throat problems."
    },
    {
      name: "Dr. Nikita Dhar",
      specialization: "Neurologist",
      experience: "10+ Years Experience",
      desc: "Expert in brain and nervous system disorders."
    }
  ]

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f6f5f2",
      padding: "100px 80px",
      fontFamily: "Roboto, sans-serif"
    },

    hero: {
      textAlign: "center",
      marginBottom: "60px"
    },

    title: {
      fontSize: "42px",
      color: "#827b58",
      marginBottom: "10px"
    },

    subtitle: {
      fontSize: "16px",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.8"
    },

    grid: {
      display: "flex",
      gap: "25px",
      flexWrap: "wrap",
      justifyContent: "center"
    },

    card: {
      width: "260px",
      background: "#ffffffb3",
      borderRadius: "12px",
      border: "1px solid #c7b99a",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 5px 20px #00000014",
      transition: "0.3s",
      cursor: "pointer"
    },

    name: {
      fontSize: "25px",
      color: "#827b58",
      marginBottom: "15px"
    },

    spec: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "5px"
    },

    exp: {
      fontSize: "13px",
      color: "#777",
      marginBottom: "10px"
    },

    desc: {
      fontSize: "13px",
      color: "#666",
      lineHeight: "1.6"
    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Our Consultants</h1>

        <p style={styles.subtitle}>
          Meet our team of experienced and specialized doctors dedicated 
          to providing the best healthcare services.
        </p>
      </div>

      <div style={styles.grid}>
        {doctors.map((doc, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >

            <h3 style={styles.name}>{doc.name}</h3>
            <p style={styles.spec}>{doc.specialization}</p>
            <p style={styles.exp}>{doc.experience}</p>
            <p style={styles.desc}>{doc.desc}</p>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Consultant