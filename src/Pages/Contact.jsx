import React, {useEffect} from "react"

function Contact() {

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

    header: {
      textAlign: "center",
      marginBottom: "60px"
    },

    title: {
      fontSize: "44px",
      color: "#827258",
      marginBottom: "10px"
    },

    subtitle: {
      fontSize: "16px",
      color: "#666",
      maxWidth: "750px",
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
      borderRadius: "18px",
      border: "1px solid #c7b99a",
      boxShadow: "0 5px 20px #00000014",
      cursor: "pointer",
      transition: "0.3s",
      textAlign: "center"
    },

    icon: {
      fontSize: "34px",
      marginBottom: "10px"
    },

    label: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#827b58",
      marginBottom: "5px"
    },

    value: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.5"
    }
  }

  const contacts = [
    { icon: "📞", label: "Phone", value: "01744-222222", link: "tel:01744222222" },
    { icon: "📧", label: "Email", value: "info@healthcure.org", link: "mailto:info@healthcure.org" },
    { icon: "📍", label: "Address", value: "Sector 2, Kurukshetra", link: "#" },
    { icon: "📸", label: "Instagram", value: "@healthcure", link: "https://instagram.com" },
    { icon: "📘", label: "Facebook", value: "HealthCure Official", link: "https://facebook.com" },
  ]

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          We’re always here for you. Reach us instantly via phone, email or social media.
        </p>
      </div>

      <div style={styles.grid}>
        {contacts.map((item, index) => (
        
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)"
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)"
            }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.label}>{item.label}</div>
            <div style={styles.value}>{item.value}</div>
          </div>
  
        ))}
      </div>

    </div>
  )
}

export default Contact