
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositorys" element={<Repository />} />
      </Routes>
    </Router>
  )
}