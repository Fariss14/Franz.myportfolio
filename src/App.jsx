<<<<<<< HEAD
import Hero from "./components/hero";
import Header from "./components/header";
import About from "./components/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import Hero from "./components/hero"

function App() {

  return (
    <>
    <Hero/>
    </>
  )
}

export default App
>>>>>>> 2eaa2cb1255b9e7b76c01d2a1d2ac670def532eb
