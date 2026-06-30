import { useState, useContext } from "react"
import { AuthContext } from "../AuthContext"
import { Link } from "react-router-dom"
import logo from "../Image/logo.png"

function Navbar() {

  const [hover, setHover] = useState("")
  const { user, logout } = useContext(AuthContext)

  const styles = {
    navbar: {
      fontFamily: "Roboto, sans-serif",
      display: "flex",
      width: "100%",
      height: "90px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 40px",
      background: "#f6f5f2",
      position: "fixed",
      top: 0,
      left: 0,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      zIndex: 1000
    },

    logo: {
      width: "185px",
      height: "90px",
      objectFit: "contain",
      cursor: "pointer"
    },

    links: {
      display: "flex",
      listStyle: "none",
      gap: "25px",
      margin: 0,
      padding: 0,
      alignItems: "center"
    },

    link: (name) => ({
      textDecoration: "none",
      color: hover === name ? "#ddc068" : "#827b58",
      fontSize: "18px",
      cursor: "pointer"
    }),

    right: {
      display: "flex",
      alignItems: "center",
      fontSize: "20px"
    },

    auth: {
      display: "flex",
      listStyle: "none",
      gap: "15px",
      margin: 0,
      padding: 0,
      alignItems: "center"
    },

    login: {
      color: "#827b58",
      textDecoration: "none",
      cursor: "pointer"
    },

    logout: {
      color: "#827b58",
      cursor: "pointer",
      padding: "4px 7px",
      borderRadius: "20px",
      border: "1px solid #ff0000",
      transition: "0.3s"
    },

    signup: {
      background: "black",
      color: "white",
      padding: "6px 14px",
      borderRadius: "20px",
      textDecoration: "none"
    }
  }

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "FACILITIES", path: "/facilities" },
    { name: "SPECIALIST", path: "/specialities" },
    { name: "CONTACTS", path: "/contact" }
  ]

  return (
    <div style={styles.navbar}>

      <img src={logo} alt="logo" style={styles.logo} />

      <ul style={styles.links}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              style={styles.link(item.name)}
              onMouseEnter={() => setHover(item.name)}
              onMouseLeave={() => setHover("")}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div style={styles.right}>
        <ul style={styles.auth}>

          {user ? (
            <>
              <li>
                <Link
                  to="/profile"
                  style={hover === "profile" ? { ...styles.login, color: "#ddc068" } : styles.login}
                  onMouseEnter={() => setHover("profile")}
                  onMouseLeave={() => setHover("")}
                >
                  Profile
                </Link>
              </li>

              <li
                onClick={logout}
                onMouseEnter={() => setHover("logout")}
                onMouseLeave={() => setHover("")}
                style={{
                  ...styles.logout,
                  color: hover === "logout" ? "#fff" : "#ff0000",
                  background: hover === "logout" ? "#ff0000" : "transparent"
                }}
              >
                Log Out
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" style={styles.login}>
                  Log In
                </Link>
              </li>

              <li>
                <Link to="/signup" style={styles.signup}>
                  Sign Up
                </Link>
              </li>
            </>
          )}

        </ul>
      </div>

    </div>
  )
}

export default Navbar