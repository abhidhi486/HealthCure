import React, { useEffect, useState } from "react"

function Mail() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const [form, setForm] = useState({
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  alert("Your message has been sent successfully! ✅")

  setForm({ subject: "", message: "" })
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
      marginBottom: "50px"
    },

    title: {
      fontSize: "42px",
      color: "#827b58",
      marginBottom: "10px"
    },

    subtitle: {
      fontSize: "16px",
      color: "#666"
    },

    email: {
      textAlign: "center",
      marginBottom: "40px",
      fontSize: "18px",
      color: "#827b58",
      fontWeight: "500"
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
      height: "140px",
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
        <h1 style={styles.title}>Contact via Email</h1>
        <p style={styles.subtitle}>
          Send us your queries directly through email.
        </p>
      </div>

      <div style={styles.email}>
        📩 info@healthcure.org
      </div>

      <div style={styles.formBox}>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.target.style.background = "#6f684b"}
            onMouseLeave={(e) => e.target.style.background = "#827b58"}
          >
            Send Mail
          </button>

        </form>
      </div>

    </div>
  )
}

export default Mail