import { useState } from "react"

function NotificationBell() {
  const [open, setOpen] = useState(false)

  const alerts = [
    { id: 1, message: "CPU usage spike detected" },
    { id: 2, message: "Disk nearing 70%" },
    { id: 3, message: "System check completed" }
  ]

  return (
    <>
      <div className="notification-bell" onClick={() => setOpen(!open)}>
        🔔
        {alerts.length > 0 && (
          <span className="badge">{alerts.length}</span>
        )}
      </div>

      <div className={`alert-panel ${open ? "open" : ""}`}>
        <h4>Alerts</h4>
        {alerts.map(alert => (
          <div key={alert.id} className="alert-item">
            {alert.message}
          </div>
        ))}
      </div>
    </>
  )
}

export default NotificationBell