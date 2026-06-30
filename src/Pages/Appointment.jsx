import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthContext"

function Appointment() {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    doctor: "",
    age: "",
    gender: "",
    date: "",
    time: ""
  })

  const [showPopup, setShowPopup] = useState(false)

  const doctorsList = [
    "Dr. Ajay Agarwal (Cardiologist)",
    "Dr. Nikita Dhar (Neurologist)",
    "Dr. Himanshu Sharma (Orthopedic)",
    "Dr. Vansh Kumar (Dermatologist)",
    "Dr. Lovit Kamboj (Pediatrician)",
    "Dr. Neha Gupta (Gynecologist)",
    "Dr. Aditi Gurjar (ENT Specialist)",
    "Dr. Komalpreet Kaur (Psychiatrist)",
    "Dr. Abhishek Dhiman (General Physician)",
    "Dr. Jasika Saini (Radiologist)",
    "Dr. Vishwas Bajwa (Urologist)",
    "Dr. Krishna Mittal (Oncologist)"
  ]

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ]

  useEffect(() => {

    if (!user) return

    let storedProfile = localStorage.getItem("profile_" + user.email)

    if (storedProfile) {
      const profile = JSON.parse(storedProfile)

      setAppointmentForm((prev) => ({
        ...prev,
        name: profile.name || "",
        email: profile.email || user.email,
        phone: profile.phone || "",
        address: profile.address || "",
        age: profile.age || "",
        gender: profile.gender || ""
      }))
    } else {
      setAppointmentForm((prev) => ({
        ...prev,
        email: user.email
      }))
    }

  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!appointmentForm.time) {
      alert("Please select time slot")
      return
    }

    if (!appointmentForm.phone || appointmentForm.phone.length < 10) {
      alert("Enter valid phone number")
      return
    }

    if (!user) {
      alert("Login required")
      return
    }

    const appointmentData = {
      ...appointmentForm,
      id: new Date().getTime()
    }

    let existing = localStorage.getItem("appointments_" + user.email)

    existing = existing ? JSON.parse(existing) : []

    existing.push(appointmentData)

    localStorage.setItem(
      "appointments_" + user.email,
      JSON.stringify(existing)
    )

    setShowPopup(true)

    setTimeout(() => {
      setShowPopup(false)
      navigate("/")
    }, 1500)
  }

  const ui = {
    container: {
      minHeight: "110vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f6f5f2, #e7e4d8)"
    },
    box: {
      width: "420px",
      padding: "35px",
      background: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(12px)",
      borderRadius: "20px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      borderRadius: "10px",
      border: "1px solid #ccc"
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      borderRadius: "10px",
      border: "1px solid #ccc"
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#5f5a3d",
      color: "#fff",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer"
    },
    slot: {
      padding: "8px 12px",
      borderRadius: "20px",
      border: "1px solid #827b58",
      cursor: "pointer",
      fontSize: "13px"
    },
    selectedSlot: {
      background: "#827b58",
      color: "#fff"
    },
    slotsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "15px"
    },
    popup: {
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      padding: "20px 30px",
      borderRadius: "12px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
    }
  }

  return (
    <div style={ui.container}>

      <div style={ui.box}>
        <h2 style={{ textAlign: "center" }}>Book Appointment</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            style={ui.input}
            value={appointmentForm.name}
            onChange={(e)=>setAppointmentForm({...appointmentForm, name:e.target.value})}
            required
          />

          <input
            type="email"
            style={ui.input}
            value={appointmentForm.email}
            readOnly
          />

          <input
            type="tel"
            placeholder="Phone"
            style={ui.input}
            value={appointmentForm.phone}
            onChange={(e)=>setAppointmentForm({...appointmentForm, phone:e.target.value})}
            required
          />

          <input
            type="text"
            placeholder="Address"
            style={ui.input}
            value={appointmentForm.address}
            onChange={(e)=>setAppointmentForm({...appointmentForm, address:e.target.value})}
            required
          />

          <input
            type="number"
            placeholder="Age"
            style={ui.input}
            value={appointmentForm.age}
            onChange={(e)=>setAppointmentForm({...appointmentForm, age:e.target.value})}
            required
          />

          <select
            style={ui.select}
            value={appointmentForm.gender}
            onChange={(e)=>setAppointmentForm({...appointmentForm, gender:e.target.value})}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            style={ui.input}
            value={appointmentForm.date}
            onChange={(e)=>setAppointmentForm({...appointmentForm, date:e.target.value})}
            required
          />

          <select
            style={ui.select}
            value={appointmentForm.doctor}
            onChange={(e)=>setAppointmentForm({...appointmentForm, doctor:e.target.value})}
            required
          >
            <option value="">Select Doctor</option>
            {doctorsList.map((doc, i)=>(
              <option key={i}>{doc}</option>
            ))}
          </select>

          <div>
            <p>Select Time Slot</p>

            <div style={ui.slotsContainer}>
              {timeSlots.map((slot, i)=>(
                <div
                  key={i}
                  style={{
                    ...ui.slot,
                    ...(appointmentForm.time === slot ? ui.selectedSlot : {})
                  }}
                  onClick={()=>setAppointmentForm({...appointmentForm, time:slot})}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>

          <button type="submit" style={ui.button}>
            Book Appointment
          </button>

        </form>
      </div>

      {showPopup && (
        <div style={ui.popup}>
          Appointment Booked Successfully ✅
        </div>
      )}

    </div>
  )
}

export default Appointment