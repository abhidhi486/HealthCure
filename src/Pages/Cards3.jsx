function Cards3() {

  const data = [
    { icon: "⚕️", title: "Expert Doctors", desc: "Highly qualified professionals delivering trusted healthcare services." },
    { icon: "⏱️", title: "24/7 Support", desc: "Round-the-clock emergency assistance whenever you need care." },
    { icon: "🏥", title: "Modern Facilities", desc: "Advanced infrastructure ensuring accurate diagnosis." },
    { icon: "💰", title: "Affordable Care", desc: "Quality treatment at cost-effective pricing." },
    { icon: "👨🏻", title: "Patient Focused", desc: "Personalized care with maximum comfort and trust." },
    { icon: "🧪", title: "Accurate Diagnosis", desc: "Reliable testing for precise medical decisions." }
  ]
  
  const styles = {
    section: {
      padding: "100px 60px",
      background: "#f2f5f2",
      textAlign: "center"
    },

    heading: {
      fontSize: "42px",
      marginBottom: "10px",
      color: "#827b58"
    },

    sub: {
      fontSize: "15px",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto 70px auto",
      lineHeight: "1.8"
    },

    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "35px"
    },

    card: {
      width: "300px",
      background: "#ffffffb3",
      backdropFilter: "blur(12px)",
      borderRadius: "16px",
      padding: "25px",
      textAlign: "left",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #00000014)",
      transition: "all 0.4s ease"
    },

    line: {
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "5px",
      background: "#827b58",
      transition: "0.3s"
    },

    icon: {
      fontSize: "28px",
      marginBottom: "12px"
    },

    title: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#827b58"
    },

    desc: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.6"
    }
  }

  return (
    <div style={styles.section}>

      <h2 style={styles.heading}>Why Choose Us</h2>

      <p style={styles.sub}>
        We combine expertise, technology, and compassion to deliver the best healthcare experience.
      </p>

      <div style={styles.container}>
        {data.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)"
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div style={styles.line}></div>

            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.desc}>{item.desc}</div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Cards3