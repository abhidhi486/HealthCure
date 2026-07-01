import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../AuthContext"

function ProtectedRoute({ children }) {

  const { user, loading } = useContext(AuthContext) // 🔥 loading add

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute