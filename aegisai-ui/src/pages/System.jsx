import { useEffect, useState } from "react"

function System() {

  const [status, setStatus] = useState("Healthy")

  useEffect(() => {
    const interval = setInterval(() => {
      const cpu = randomValue()

      if (cpu > 85) {
        setStatus("Critical")
      } else if (cpu > 60) {
        setStatus("Warning")
      } else {
        setStatus("Healthy")
      }

    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const statusColor =
    status === "Healthy" ? "#22c55e" :
    status === "Warning" ? "#f59e0b" :
    "#ef4444"

  return (
    <div>
      <h2 style={{ marginBottom: "25px" }}>System Operations</h2>

      <div style={{
        backgroundColor: statusColor,
        padding: "25px",
        borderRadius: "10px",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold"
      }}>
        Current System Status: {status}
      </div>
    </div>
  )
}

function randomValue() {
  return Math.floor(Math.random() * 100)
}

export default System