import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import MainContent from "./components/MainContent"
import "./App.css"

function App() {
  console.log("App component rendering")
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/main/*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
