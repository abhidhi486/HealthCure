import React from "react"
import { Link } from "react-router-dom"
import dr from "../Image/dr.jpg"

function Hero() {

  const styles = {

    container: {
      marginTop: "90px",
      height: "calc(100vh - 90px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 80px",
      background: "linear-gradient(135deg, #faf9f6 0%, #f0ede3 100%)",
      position: "relative",
      overflow: "hidden"
    },

    left: {
      maxWidth: "550px",
      zIndex: 2
    },

    tag: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(130,123,88,0.1)",
      borderRadius: "50px",
      padding: "6px 14px",
      marginBottom: "20px",
      color: "#827b58",
      fontSize: "13px",
      fontWeight: "600"
    },

    darkHead: {
      fontSize: "55px",
      fontWeight: "800",
      color: "#2a2a2a",
      margin: 0
    },

    goldHead: {
      fontSize: "55px",
      fontWeight: "800",
      color: "#827b58",
      marginBottom: "20px"
    },

    subText: {
      fontSize: "16px",
      color: "#666",
      lineHeight: "1.7",
      marginBottom: "30px"
    },

    link: {
      display: "flex",
      gap: "15px"
    },

    dark: {
      padding: "12px 28px",
      background: "#2a2a2a",
      color: "#fff",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "600"
    },

    gold: {
      padding: "12px 28px",
      border: "2px solid #827b58",
      borderRadius: "30px",
      color: "#827b58",
      textDecoration: "none",
      fontWeight: "600"
    },

    stats: {
      display: "flex",
      gap: "30px",
      marginTop: "40px",
      borderTop: "1px solid rgba(130,123,88,0.2)",
      paddingTop: "20px"
    },

    imageWrapper: {
      position: "absolute",
      right: "0",
      top: "0",
      height: "100%",
      width: "50%",
      overflow: "hidden"
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },

    fade: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle at -100% 75%, #f6f5f2 57%, transparent 74%)"    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.left}>

        <div style={styles.tag}>
          -- TRUSTED HEALTHCARE SINCE 2008
        </div>

        <h1 style={styles.darkHead}>Your Health,</h1>
        <h1 style={styles.goldHead}>Our Priority.</h1>

        <p style={styles.subText}>
          World-class medical care with expert doctors, advanced facilities,
          and compassionate support — all under one roof.
        </p>

        <div style={styles.link}>
          <Link to="/appointment" style={styles.dark}>
            Book Appointment →
          </Link>

          <Link to="/specialities" style={styles.gold}>
            Our Doctors
          </Link>
        </div>

        <div style={styles.stats}>
          <div>
            <h3>50+</h3>
            <p>Specialists</p>
          </div>
          <div>
            <h3>25K+</h3>
            <p>Patients Served</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Emergency</p>
          </div>
        </div>

      </div>

      <div style={styles.imageWrapper}>
        <img src={dr} alt="doctor" style={styles.image} />
        <div style={styles.fade}></div>
      </div>

    </div>
  )
}

export default Hero