import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

function Signup() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌")
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      await updateProfile(userCredential.user, {
        displayName: form.fullName
      })

      alert("Signup Successful ✅")
      navigate("/")

    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        <input type="email" placeholder="Email" required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password" placeholder="Password" required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input type="password" placeholder="Confirm Password" required
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup