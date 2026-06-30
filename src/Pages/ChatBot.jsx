import React, { useState } from "react"

function ChatBot() {

  const [open, setOpen] = useState(false)

  const styles = {
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "999"
    },

    button: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#000",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "24px",
      boxShadow: "0 5px 15px #00000014)"
    },

    chatBox: {
      width: "300px",
      height: "380px",
      background: "#fff",
      borderRadius: "15px",
      position: "absolute",
      bottom: "70px",
      right: "0",
      boxShadow: "0 10px 30px #00000014)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },

    header: {
      background: "#000",
      color: "#fff",
      padding: "10px",
      textAlign: "center",
      fontWeight: "bold"
    },

    messages: {
      flex: "1",
      padding: "10px",
      fontSize: "14px",
      overflowY: "auto"
    },

    inputBox: {
      display: "flex",
      borderTop: "1px solid #ddd"
    },

    input: {
      flex: "1",
      padding: "10px",
      border: "none",
      outline: "none"
    },

    send: {
      padding: "10px",
      background: "#000",
      color: "#fff",
      cursor: "pointer"
    }
  }

  return (
    <div style={styles.container}>

      {open && (
        <div style={styles.chatBox}>
          <div style={styles.header}>HealthCure ChatBot</div>

          <div style={styles.messages}>
            🤖: Hello! 👋 How can I help you?
          </div>

          <div style={styles.inputBox}>
            <input type="text" placeholder="Ask about your health..." style={styles.input}/>
            <div style={styles.send}>➤</div>
          </div>
        </div>
      )}

      <div style={styles.button} onClick={() => setOpen(!open)}>
        💬
      </div>

    </div>
  )
}

export default ChatBot