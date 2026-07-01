import { useState, useContext} from "react"
import { AuthContext } from "../AuthContext"
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()
  const {login} = useContext(AuthContext)

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const existingUsers = JSON.parse(localStorage.getItem("users")) || []

    const matchedUser = existingUsers.find(
      (u) => u.email.toLowerCase() === form.email.toLowerCase()
    )

    if (!matchedUser) {
      alert("No account found with this email ❌")
      return
    }

    if (matchedUser.password !== form.password) {
      alert("Incorrect password ❌")
      return
    }

    const userData = {
      name: matchedUser.name,
      email: matchedUser.email
    }

    login(userData)

    alert("Login Successful ✅")

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
      boxShadow: "0 5px 20px #00000014)"
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

        <h2 style={styles.heading}>Login</h2>

        <form onSubmit={handleSubmit}>

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

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e)=> e.target.style.background="#333"}
            onMouseOut={(e)=> e.target.style.background="#000"}
          >
            Login
          </button>

        </form>

        <p style={styles.bottomText}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login