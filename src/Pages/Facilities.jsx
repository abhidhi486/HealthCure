import React, {useEffect} from "react"

function Facilities() {

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
      padding: "80px 40px",
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
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.8"
    },

    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px"
    },

    card: {
      width: "300px",
      background: "#ffffffb3",
      padding: "25px",
      borderRadius: "15px",
      border: "1px solid #c7b99a",
      boxShadow: "0 5px 20px #00000014)",
      transition: "0.3s",
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
    },

    desc: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.6"
    }
  }

  const facilities = [
    {
      icon: "🚑",
      title: "24/7 Emergency Care",
      desc: "Round-the-clock emergency services with advanced life-saving equipment and trained staff."
    },
    {
      icon: "🏥",
      title: "Modern Operation Theatres",
      desc: "Fully equipped modular OTs with latest surgical technology and sterilization systems."
    },
    {
      icon: "🧪",
      title: "Advanced Diagnostics",
      desc: "High-precision lab testing, MRI, CT Scan and pathology services for accurate results."
    },
    {
      icon: "💊",
      title: "Pharmacy Services",
      desc: "In-house pharmacy providing genuine medicines at affordable prices."
    },
    {
      icon: "👶🏻",
      title: "Pediatric Care",
      desc: "Specialized child care units with expert pediatricians and friendly environment."
    },
    {
      icon: "🫀",
      title: "Cardiac Care Unit",
      desc: "Dedicated heart care unit with monitoring systems and experienced cardiologists."
    },
    {
      icon: "🧠",
      title: "Neurology Department",
      desc: "Advanced brain and nerve treatment with modern diagnostic support."
    },
    {
      icon: "🛏️",
      title: "ICU & Critical Care",
      desc: "Fully equipped ICU with ventilators, monitors and expert critical care team."
    }
  ]

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Our Facilities</h1>

        <p style={styles.subtitle}>
          HealthCure provides world-class medical infrastructure with advanced
          technology, expert doctors, and patient-first care environment to ensure
          the best treatment experience.
        </p>
      </div>

      <div style={styles.grid}>
        {facilities.map((item, index) => (
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
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Facilities