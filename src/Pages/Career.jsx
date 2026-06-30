import React, { useEffect, useState } from "react"

function Career() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const [form, setForm] = useState({
    name: "",
    email: "",
    position: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Application Submitted ✅")
    setForm({ name: "", email: "", position: "" })
  }

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
      marginBottom: "15px"
    },

    subtitle: {
      fontSize: "16px",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.8"
    },

    jobsSection: {
      display: "flex",
      gap: "25px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "60px"
    },

    jobCard: {
      width: "260px",
      background: "#ffffffb3",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #c7b99a",
      boxShadow: "0 5px 20px #00000014"
    },

    jobTitle: {
      fontSize: "18px",
      color: "#827b58",
      marginBottom: "8px"
    },

    jobText: {
      fontSize: "13px",
      color: "#555",
      lineHeight: "1.6"
    },

    formBox: {
      maxWidth: "600px",
      margin: "0 auto",
      background: "#ffffffb3",
      padding: "35px",
      borderRadius: "12px",
      boxShadow: "0 5px 20px #00000014"
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      outline: "none",
      fontSize: "14px"
    },

    button: {
      padding: "12px 28px",
      borderRadius: "25px",
      border: "none",
      background: "#827b58",
      color: "#fff",
      fontSize: "15px",
      cursor: "pointer",
      transition: "0.3s"
    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <h1 style={styles.title}>Careers</h1>

        <p style={styles.subtitle}>
          Join our healthcare team and make a difference in people’s lives.
          Explore opportunities and grow your career with us.
        </p>
      </div>

      <div style={styles.jobsSection}>

        <div style={styles.jobCard}>
          <h3 style={styles.jobTitle}>Doctor</h3>
          <p style={styles.jobText}>
            Provide patient care and medical consultations in a modern facility.
          </p>
        </div>

        <div style={styles.jobCard}>
          <h3 style={styles.jobTitle}>Nurse</h3>
          <p style={styles.jobText}>
            Assist doctors and ensure high-quality patient support services.
          </p>
        </div>

        <div style={styles.jobCard}>
          <h3 style={styles.jobTitle}>Receptionist</h3>
          <p style={styles.jobText}>
            Manage appointments and handle front desk operations efficiently.
          </p>
        </div>

      </div>

      <div style={styles.formBox}>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            value={form.position}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.target.style.background = "#6f684b"}
            onMouseLeave={(e) => e.target.style.background = "#827b58"}
          >
            Apply Now
          </button>

        </form>
      </div>

    </div>
  )
}

export default Career