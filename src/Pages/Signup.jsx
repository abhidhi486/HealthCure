import { useState, useContext } from "react"
import { AuthContext } from "../AuthContext"
import { Link, useNavigate } from "react-router-dom"

function Signup() {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌")
      return
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || []

    const userExists = existingUsers.find(
      (user) => user.email === form.email
    )

    if (userExists) {
      alert("User already exists ❌")
      return
    }

    const newUser = {
      name: form.fullName,
      email: form.email,
      password: form.password
    }

    const updatedUsers = [...existingUsers, newUser]
    localStorage.setItem("users", JSON.stringify(updatedUsers))

    login(newUser)

    alert("Signup Successful ✅")

    navigate("/")
  }

  const styles = {
    container: {
      height: "88vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f6f5f2"
    },

    box: {
      width: "350px",
      padding: "30px",
      background: "#fff",
      borderRadius: "15px",
      boxShadow: "0 5px 20px #00000014"
    },

    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#827b58"
    },

    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none"
    },

    button: {
      width: "100%",
      padding: "10px",
      background: "#000",
      color: "#ffffffb3",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s"
    },

    bottomText: {
      textAlign: "center",
      marginTop: "15px",
      fontSize: "14px",
      color: "#827b58"
    },

    link: {
      color: "#000",
      fontWeight: "bold",
      textDecoration: "none"
    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.box}>

        <h2 style={styles.heading}>Sign Up</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            style={styles.input}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            required
          />

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.target.style.background = "#333"}
            onMouseOut={(e) => e.target.style.background = "#000"}
          >
            Sign Up
          </button>

        </form>

        <p style={styles.bottomText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Signup