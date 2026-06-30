import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../AuthContext"

function Profile() {

  const { user } = useContext(AuthContext)

  const [edit, setEdit] = useState(false)
  const [appointments, setAppointments] = useState([])

  const [data, setData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    username: "",
    photo: "",
    age: "",
    gender: "",
    blood: "",
    address: "",
    emergency: "",
    history: "",
  })

  useEffect(() => {
    if (!user) return

    const saved = localStorage.getItem("profile_" + user.email)

    if (saved) {
      const parsed = JSON.parse(saved)

      setData(prev => ({
        ...prev,
        ...parsed,
        name: parsed.name || user?.name || "",
        email: parsed.email || user?.email || ""
      }))
    }

    const appt = JSON.parse(localStorage.getItem("appointments_" + user.email)) || []
    setAppointments(appt)

  }, [user])

  const handleSave = () => {
    if (!user) return

    localStorage.setItem("profile_" + user.email, JSON.stringify(data))
    setEdit(false)
    alert("Profile Saved ✅")
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imgURL = URL.createObjectURL(file)
      setData({ ...data, photo: imgURL })
    }
  }

  const styles = {
    container: {
      marginTop: "100px",
      display: "flex",
      justifyContent: "center",
      background: "#f6f5f2",
      minHeight: "100vh",
      padding: "40px"
    },

    box: {
      width: "500px",
      background: "#fff",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 5px 20px #00000014"
    },

    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#827b58"
    },

    imgBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    img: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
      border: "2px solid #ddd"
    },

    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none"
    },

    label: {
      fontSize: "14px",
      marginBottom: "5px",
      display: "block",
      color: "#827b58"
    },

    button: {
      width: "100%",
      padding: "10px",
      background: "black",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      marginTop: "10px"
    },

    appointmentBox: {
      marginTop: "20px",
      padding: "15px",
      borderRadius: "10px",
      background: "#f2f0e2"
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.box}>

        <h2 style={styles.heading}>My Profile</h2>

        <div style={styles.imgBox}>
          <img
            src={data.photo || "https://via.placeholder.com/100"}
            alt="profile"
            style={styles.img}
          />
          {edit && <input type="file" onChange={handleImage} />}
        </div>

        <label style={styles.label}>Full Name</label>
        <input
          style={styles.input}
          value={data.name}
          disabled={!edit}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <label style={styles.label}>Email</label>
        <input style={styles.input} value={data.email} disabled />

        <label style={styles.label}>Phone</label>
        <input
          style={styles.input}
          value={data.phone}
          disabled={!edit}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        <label style={styles.label}>Username</label>
        <input
          style={styles.input}
          value={data.username}
          disabled={!edit}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />

        <label style={styles.label}>Age</label>
        <input
          style={styles.input}
          value={data.age}
          disabled={!edit}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        <label style={styles.label}>Gender</label>
        <input
          style={styles.input}
          value={data.gender}
          disabled={!edit}
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />

        <label style={styles.label}>Blood Group</label>
        <input
          style={styles.input}
          value={data.blood}
          disabled={!edit}
          onChange={(e) => setData({ ...data, blood: e.target.value })}
        />

        <label style={styles.label}>Address</label>
        <input
          style={styles.input}
          value={data.address}
          disabled={!edit}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />

        <label style={styles.label}>Emergency Contact</label>
        <input
          style={styles.input}
          value={data.emergency}
          disabled={!edit}
          onChange={(e) => setData({ ...data, emergency: e.target.value })}
        />

        {edit ? (
          <button style={styles.button} onClick={handleSave}>
            Save Changes
          </button>
        ) : (
          <button style={styles.button} onClick={() => setEdit(true)}>
            Edit Profile
          </button>
        )}

        <div style={styles.appointmentBox}>
          <h4>Appointments</h4>

          {appointments.length === 0 ? (
            <p>No appointments yet ❌</p>
          ) : (
            appointments.map((a, i) => (
              <div key={i}>
                <p><b>Doctor:</b> {a.doctor}</p>
                <p><b>Date:</b> {a.date}</p>
                <p><b>Time:</b> {a.time}</p>
                <p><b>Status:</b> Pending ⏳</p>
                <hr />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}

export default Profile