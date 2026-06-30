function Cards2() {

  const data = [
    {
      icon: "🫀",
      title: "Cardiology",
      desc: "Advanced heart care with expert diagnosis, treatment, and prevention using modern medical technology."
    },
    {
      icon: "🧠",
      title: "Neurology",
      desc: "Specialized care for brain and nervous system disorders with accurate diagnosis and expert treatment."
    },
    {
      icon: "🦴", 
      title: "Orthopedics",
      desc: "Comprehensive bone and joint treatments ensuring mobility and pain-free living."
    },
    {
      icon: "🧴",
      title: "Dermatology",
      desc: "Complete skin care solutions for all conditions with modern dermatological treatments."
    },
    {
      icon: "👶🏻",
      title: "Pediatrics",
      desc: "Dedicated child healthcare services ensuring growth, safety, and well-being."
    },
    {
      icon: "🩺",
      title: "General Medicine",
      desc: "Primary healthcare services covering a wide range of illnesses with trusted care."
    }
  ]

const styles = {
    section: {
      padding: "100px 60px",
      background: "#f2f5f2",
      textAlign: "center"
    },

    heading: {
      fontSize: "42px",
      marginBottom: "50px",
      color: "#827b58"
    },

    sub: {
      fontSize: "15px",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto 50px auto",
      lineHeight: "1.7"
    },

    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px"
    },

    card: {
      width: "300px",
      background: "#ffffffb3",
      padding: "25px",
      border: "1px solid #c7b99a",
      borderRadius: "15px",
      boxShadow: "0 5px 20px #00000014)",
      transition: "0.3s",
      cursor: "default"
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

    title: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#827b58"
    },

    desc: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.5"
    }
  }
  
  return (
    <div style={styles.section}>

      <h2 style={styles.heading}>Our Specialists</h2>

      <p style={styles.sub}>
        We provide a wide range of medical specialties with expert care and advanced treatment facilities.
      </p>

      <div style={styles.container}>
        {data.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)"
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)"
            }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.desc}>{item.desc}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Cards2