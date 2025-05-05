import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./App.css"

console.log("Main script running")

// Make sure we're rendering to the correct element
const rootElement = document.getElementById("root")

if (rootElement) {
  console.log("Root element found, rendering app")
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Root element not found!")
}
