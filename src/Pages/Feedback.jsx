import React, { useEffect, useState } from "react"

function Feedback() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const [form, setForm] = useState({
    name: "",
    feedback: ""
  })

  const [rating, setRating] = useState(0)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Feedback Submitted ⭐ ${rating} Stars`)
    setForm({ name: "", feedback: "" })
    setRating(0)
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

    stars: {
      display: "flex",
      gap: "8px",
      marginBottom: "20px",
      cursor: "pointer",
      fontSize: "22px"
    },

    button: {
      marginTop: "10px",
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
        <h1 style={styles.title}>Feedback</h1>

        <p style={styles.subtitle}>
          We value your experience. Share your feedback and help us improve our services.
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

          <div style={styles.stars}>
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  color: star <= rating ? "#827b58" : "#ccc"
                }}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            name="feedback"
            placeholder="Write your feedback..."
            value={form.feedback}
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
            Submit Feedback
          </button>

        </form>
      </div>

    </div>
  )
}

export default Feedback