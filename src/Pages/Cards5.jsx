function Cards5() {

  const data = [
    {
      review: "The doctors and staff were extremely supportive. My treatment went smoothly and I felt safe throughout.",
      name: "Chaggan Don"
    },
    {
      review: "Excellent facilities and very professional doctors. Highly recommended for quality healthcare.",
      name: "Anjali Sharma"
    },
    {
      review: "24/7 emergency service really helped my family in a critical situation. Thank you for the quick response.",
      name: "Khushi Sapra"
    },
    {
      review: "Clean environment, modern equipment, and caring staff made my experience very comfortable.",
      name: "Ankit Garg"
    },
    {
      review: "Affordable treatment with top-notch medical care. Truly one of the best hospitals.",
      name: "Paras Kaushik"
    },
    {
      review: "Doctors explained everything clearly and guided me throughout my recovery journey.",
      name: "Hmza Ali Mazari"
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

    stars: {
      color: "#f5a623",
      marginBottom: "10px",
      fontSize: "16px"
    },

    review: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.6",
      marginBottom: "15px",
      fontStyle: "italic"
    },

    name: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#827b58"
    }
  }

  return (
    <div style={styles.section}>

      <h2 style={styles.heading}>Patient Testimonials</h2>

      <p style={styles.sub}>
        Hear what our patients say about their experience with our care and services.
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
            <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
            <div style={styles.review}>"{item.review}"</div>
            <div style={styles.name}>- {item.name}</div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Cards5