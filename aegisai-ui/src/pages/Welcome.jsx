import { useNavigate } from "react-router-dom"

function Welcome() {
  const navigate = useNavigate()

  const handleEnter = () => {
    sessionStorage.setItem("visited", "true")
    navigate("/dashboard", { replace: true })
  }

  return (
    <div style={wrapper}>
      <div style={content}>
        <h1 style={title}>Welcome to AegisAI</h1>
        <p style={subtitle}>
          Autonomous Monitoring & Threat Intelligence System
        </p>

        <button style={button} onClick={handleEnter}>
          Enter System
        </button>
      </div>
    </div>
  )
}

const wrapper = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle at center, #0f172a, #020617)",
  color: "white"
}

const content = {
  textAlign: "center"
}

const title = {
  fontSize: "42px",
  marginBottom: "20px"
}

const subtitle = {
  fontSize: "18px",
  marginBottom: "40px",
  color: "#94a3b8"
}

const button = {
  padding: "15px 40px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#22c55e",
  color: "white",
  cursor: "pointer"
}

export default Welcome