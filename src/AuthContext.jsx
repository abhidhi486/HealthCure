import { createContext, useEffect, useState } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (currentUser) {
        setUser({
          email: currentUser.email,
          name: currentUser.displayName || "",
          uid: currentUser.uid
        })
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()

  }, [])

  // ✅ NEW (IMPORTANT FIX)
  const updateUser = (newData) => {
    setUser(prev => ({
      ...prev,
      ...newData
    }))
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}