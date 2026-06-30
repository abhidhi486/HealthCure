function Cards() {

  const data = [
    {
      icon: "🏥",
      title: "Modern Operation Theatres",
      desc: "Fully equipped modular OTs with latest surgical technology and sterilization systems."
    },
    {
      icon: "🫀",
      title: "Cardiac Care Unit",
      desc: "Dedicated heart care unit with monitoring systems and experienced cardiologists."
    },
    {
      icon: "🚑",
      title: "Emergency",
      desc: "24×7 emergency services available."
    },
    {
      icon: "🧪",
      title: "Diagnostics",
      desc: "Accurate lab testing and reports."
    },
    {
      icon: "💊",
      title: "Pharmacy Services",
      desc: "In-house pharmacy providing genuine medicines at affordable prices."
    },
    {
      icon: "🧠",
      title: "Neurology Department",
      desc: "Advanced brain and nerve treatment with modern diagnostic support."
    },
    {
      icon: "🧴",
      title: "Dermatology",
      desc: "Skin care and advanced treatments."
    },
    {
      icon: "🛏️",
      title: "ICU & Critical Care",
      desc: "Fully equipped ICU with ventilators, monitors and expert critical care team."
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

      <h2 style={styles.heading}>Our Medical Services</h2>

      <p style={styles.sub}>
        We provide a wide range of medical services with expert care and modern technology.
        Trusted healthcare solutions designed for your well-being.
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

export default Cards