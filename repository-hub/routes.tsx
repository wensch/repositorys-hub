import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './src/pages/Main'
import Repositorys from './src/pages/Repositorys'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositorys:repositorio" element={<Repositorys />} />
      </Routes>
    </Router>
  )
}