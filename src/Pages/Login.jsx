import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      alert("Login Successful ✅")
      navigate("/")

    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password" placeholder="Password" required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Login</button>

        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login