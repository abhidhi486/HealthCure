import React, {useEffect} from "react"

function Specialities() {

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
      padding: "20px",
      border: "1px solid #c7b99a",
      borderRadius: "15px",
      boxShadow: "0 5px 20px #00000014",
      textAlign: "center",
      transition: "0.3s"
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

    name: {
      fontSize: "18px",
      color: "#827b58",
      marginBottom: "5px"
    },

    role: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "10px"
    },

    exp: {
      fontSize: "13px",
      color: "#777"
    }
  }

  const doctors = [
    { 
      name: "Dr. Ajay Agarwal", 
      role: "Cardiologist", 
      exp: "12+ Years Experience", 
      icon: "🫀" 
    },
    { 
      name: "Dr. Nikita Dhar", 
      role: "Neurologist", 
      exp: "10+ Years Experience", 
      icon: "🧠" 
    },
    { 
      name: "Dr. Himanshu Sharma", 
      role: "Orthopedic", 
      exp: "14+ Years Experience", 
      icon: "🦴" },
    { 
      name: "Dr. Vansh Kumar", 
      role: "Dermatologist", 
      exp: "9+ Years Experience", 
      icon: "🧴" },
    { 
      name: "Dr. Lovit Kamboj", 
      role: "Pediatrician", 
      exp: "11+ Years Experience", 
      icon: "👶🏻" },
    { 
      name: "Dr. Neha Gupta", 
      role: "Gynecologist", 
      exp: "13+ Years Experience", 
      icon: "🤰🏻" },
    { 
      name: "Dr. Aditi Gurjar", 
      role: "ENT Specialist", 
      exp: "8+ Years Experience", 
      icon: "👂🏻" },
    { 
      name: "Dr. Komalpreet Kaur", 
      role: "Psychiatrist", 
      exp: "10+ Years Experience", 
      icon: "🧘🏻" },
    { 

      name: "Dr. Abhishek Dhiman", 
      role: "General Physician", 
      exp: "15+ Years Experience", 
      icon: "🩺" },
    { 
      name: "Dr. Jasika Saini", 
      role: "Radiologist", 
      exp: "9+ Years Experience", 
      icon: "🩻" },
    { 
      name: "Dr. Vishwas Bajwa", 
      role: "Urologist", 
      exp: "12+ Years Experience", 
      icon: "💧" },
    { 
      name: "Dr. Krishna Mittal", 
      role: "Oncologist", 
      exp: "16+ Years Experience", 
      icon: "🎗️" }
  ]

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Our Specialists</h1>

        <p style={styles.subtitle}>
          Meet our highly experienced medical specialists dedicated to providing
          world-class treatment with compassion, precision, and advanced technology.
        </p>
      </div>

      <div style={styles.grid}>
        {doctors.map((doc, index) => (
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
            <div style={styles.icon}>{doc.icon}</div>
            <h3 style={styles.name}>{doc.name}</h3>
            <p style={styles.role}>{doc.role}</p>
            <p style={styles.exp}>{doc.exp}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Specialities