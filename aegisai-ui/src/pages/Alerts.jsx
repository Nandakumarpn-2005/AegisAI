import { useEffect, useState } from "react"

function Alerts() {

  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {

      const cpu = randomValue()
      const ram = randomValue()
      const disk = randomValue()

      const newAlerts = []

      if (cpu > 80) newAlerts.push("High CPU usage detected")
      if (ram > 80) newAlerts.push("High RAM usage detected")
      if (disk > 85) newAlerts.push("Disk almost full")

      setAlerts(newAlerts)

    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2 style={{ marginBottom: "25px" }}>Alert Monitoring</h2>

      {alerts.length === 0 ? (
        <div style={healthyBox}>No active alerts</div>
      ) : (
        alerts.map((alert, index) => (
          <div key={index} style={alertBox}>
            {alert}
          </div>
        ))
      )}
    </div>
  )
}

function randomValue() {
  return Math.floor(Math.random() * 100)
}

const alertBox = {
  backgroundColor: "#ef4444",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "10px",
  color: "white"
}

const healthyBox = {
  backgroundColor: "#22c55e",
  padding: "15px",
  borderRadius: "8px",
  color: "white"
}

export default Alerts