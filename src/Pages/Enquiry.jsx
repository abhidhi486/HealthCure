import React, { useEffect, useState } from "react"

function Enquiry() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Enquiry Submitted ✅")
    setForm({ name: "", email: "", message: "" })
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

    textarea: {
      width: "100%",
      padding: "12px",
      height: "120px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      outline: "none",
      fontSize: "14px",
      resize: "none"
    },

    button: {
      marginTop: "15px",
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
        <h1 style={styles.title}>Enquiry</h1>

        <p style={styles.subtitle}>
          Have questions or need assistance? Fill out the form below and our team 
          will get back to you as soon as possible.
        </p>
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

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.background = "#6f684b"
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#827b58"
            }}
          >
            Submit Enquiry
          </button>

        </form>
      </div>

    </div>
  )
}

export default Enquiry