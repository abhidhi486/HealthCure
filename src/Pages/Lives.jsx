import React, { useEffect } from "react"

function Lives() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const stats = [
    { number: "25,000+", label: "Patients Treated" },
    { number: "10,000+", label: "Successful Surgeries" },
    { number: "50+", label: "Expert Doctors" },
    { number: "16+", label: "Years of Service" }
  ]

  const testimonials = [
    {
      name: "Rajju Don",
      text: "The doctors here saved my life. I’m forever grateful for their care and support."
    },
    {
      name: "Hamza ali",
      text: "Amazing staff and facilities. My surgery was smooth and recovery was fast."
    },
    {
      name: "Khushi Sapra",
      text: "Highly professional doctors. They truly care about patients."
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

    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginBottom: "70px"
    },

    statBox: {
      width: "200px",
      background: "#ffffffb3",
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #c7b99a",
      textAlign: "center",
      boxShadow: "0 5px 20px #00000014"
    },

    number: {
      fontSize: "28px",
      color: "#827b58",
      fontWeight: "bold"
    },

    label: {
      fontSize: "14px",
      color: "#555"
    },

    sectionTitle: {
      textAlign: "center",
      fontSize: "28px",
      color: "#827b58",
      marginBottom: "30px"
    },

    review: {
      display: "flex",
      gap: "25px",
      flexWrap: "wrap",
      justifyContent: "center"
    },

    card: {
      width: "280px",
      background: "#ffffffb3",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #c7b99a",
      boxShadow: "0 5px 20px #00000014"
    },

    name: {
      fontSize: "16px",
      color: "#827b58",
      marginBottom: "10px"
    },

    text: {
      fontSize: "13px",
      color: "#555",
      lineHeight: "1.6"
    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Lives Touched ❤️</h1>

        <p style={styles.subtitle}>
          Every life matters. Our journey is defined by the countless lives 
          we have touched, healed, and cared for over the years.
        </p>
      </div>

      <div style={styles.stats}>
        {stats.map((item, index) => (
          <div key={index} style={styles.statBox}>
            <h2 style={styles.number}>{item.number}</h2>
            <p style={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>What Our Patients Say</h2>

      <div style={styles.review}>
        {testimonials.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.name}>{item.name}</h3>
            <p style={styles.text}>"{item.text}"</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Lives