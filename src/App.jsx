import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="contacto" element={<Contact />} />
      </Route>
    </Routes>
  )
}
