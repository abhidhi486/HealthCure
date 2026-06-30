import React, { useEffect } from "react"

function News() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const newsData = [
    {
      title: "New Cardiology Wing Opened",
      date: "June 2026",
      desc: "We have launched a new advanced cardiology department with modern equipment."
    },
    {
      title: "Free Health Checkup Camp",
      date: "May 2026",
      desc: "Organized a free health camp providing checkups and consultations."
    },
    {
      title: "AI-Based Diagnosis System",
      date: "April 2026",
      desc: "Introduced AI tools to enhance diagnostic accuracy and speed."
    }
  ]

  const eventsData = [
    {
      title: "Blood Donation Camp",
      date: "July 2026",
      desc: "Join us for a noble cause and help save lives."
    },
    {
      title: "Medical Awareness Seminar",
      date: "August 2026",
      desc: "Expert doctors will share insights on common health issues."
    }
  ]

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f6f5f2",
      padding: "100px 80px",
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

    sectionTitle: {
      fontSize: "28px",
      color: "#827b58",
      marginBottom: "25px",
      textAlign: "center"
    },

    grid: {
      display: "flex",
      gap: "25px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "60px"
    },

    card: {
      width: "280px",
      background: "#ffffffb3",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #c7b99a",
      boxShadow: "0 5px 20px #00000014",
      transition: "0.3s",
      cursor: "pointer"
    },

    cardTitle: {
      fontSize: "18px",
      color: "#827b58",
      marginBottom: "8px"
    },

    date: {
      fontSize: "13px",
      color: "#888",
      marginBottom: "10px"
    },

    desc: {
      fontSize: "13px",
      color: "#555",
      lineHeight: "1.6"
    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>News & Events</h1>

        <p style={styles.subtitle}>
          Stay updated with our latest news, achievements, and upcoming events.
        </p>
      </div>

      <h2 style={styles.sectionTitle}>Latest News</h2>

      <div style={styles.grid}>
        {newsData.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.date}>{item.date}</p>
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>Upcoming Events</h2>

      <div style={styles.grid}>
        {eventsData.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.date}>{item.date}</p>
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default News