import { useState, useContext } from "react"
import { AuthContext } from "../AuthContext"
import { Link } from "react-router-dom"
import logo from "../Image/logo.png"

function Navbar() {

  const [hover, setHover] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
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

    mobileLinks: {
      position: "absolute",
      top: "90px",
      left: 0,
      width: "100%",
      background: "#f6f5f2",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      padding: "20px 0",
      display: menuOpen ? "flex" : "none",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
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

    mobileAuth: {
      flexDirection: "column",
      gap: "10px"
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
    },

    toggleBtn: {
      display: "block",   
      fontSize: "26px",
      cursor: "pointer"
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
    <div style={styles.navbar} className="container-fluid">

      <img src={logo} alt="logo" style={styles.logo} />

      <div
        className="d-md-none"
        style={styles.toggleBtn}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul style={styles.links} className="d-none d-md-flex">
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

      {/* Desktop Auth */}
      <div style={styles.right} className="d-none d-md-flex">
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
                <Link to="/login" style={styles.login}>Log In</Link>
              </li>
              <li>
                <Link to="/signup" style={styles.signup}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div style={styles.mobileLinks} className="d-md-none">

        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={styles.link(item.name)}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <div style={{ ...styles.auth, ...styles.mobileAuth }}>
          {user ? (
            <>
              <Link to="/profile" style={styles.login}>Profile</Link>
              <div onClick={logout} style={styles.logout}>Log Out</div>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.login}>Log In</Link>
              <Link to="/signup" style={styles.signup}>Sign Up</Link>
            </>
          )}
        </div>

      </div>

    </div>
  )
}

export default Navbar