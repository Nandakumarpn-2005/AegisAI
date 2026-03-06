import { useState, useEffect } from "react"
import { Bell } from "lucide-react"

export default function GlobalNotification({
  cpu,
  ram,
  disk,
  systemStatus,
  customMessage
}) {
  const [alerts, setAlerts] = useState([])
  const [open, setOpen] = useState(false)

  // prevent spam
  const [lastAlertTime, setLastAlertTime] = useState(0)

  useEffect(() => {
    const now = Date.now()

    if (now - lastAlertTime < 8000) return

    let newAlert = null

    if (cpu > 80) {
      newAlert = { message: `High CPU Usage: ${cpu}%`, type: "cpu" }
    } else if (ram > 85) {
      newAlert = { message: `High RAM Usage: ${ram}%`, type: "ram" }
    } else if (disk > 75) {
      newAlert = { message: `Disk usage warning: ${disk}%`, type: "disk" }
    } else if (systemStatus === "Critical") {
      newAlert = { message: `System Status Critical`, type: "status" }
    } else if (customMessage) {
      newAlert = { message: customMessage, type: "custom" }
    }

    if (newAlert) {
      setAlerts(prev => [newAlert, ...prev].slice(0, 10))
      setLastAlertTime(now)
    }
  }, [cpu, ram, disk, systemStatus, customMessage])

  return (
    <>
      {/* Fixed Bell on Right Side */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          zIndex: 1000
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          style={{
            background: "#0f172a",
            padding: "12px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            position: "relative"
          }}
        >
          <Bell size={22} color="#ffffff" />

          {alerts.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#ef4444",
                color: "#fff",
                fontSize: "12px",
                padding: "2px 6px",
                borderRadius: "50%",
                fontWeight: "bold"
              }}
            >
              {alerts.length}
            </span>
          )}
        </div>
      </div>

      {/* Dropdown Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "85px",
            right: "30px",
            width: "300px",
            background: "#1e293b",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
            zIndex: 999
          }}
        >
          <h4 style={{ marginBottom: "12px" }}>Notifications</h4>

          {alerts.length === 0 ? (
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>
              No notifications
            </p>
          ) : (
            alerts.map((alert, index) => (
              <div
                key={index}
                style={{
                  background: "#0f172a",
                  padding: "10px",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  fontSize: "13px"
                }}
              >
                {alert.message}
              </div>
            ))
          )}
        </div>
      )}
    </>
  )
}