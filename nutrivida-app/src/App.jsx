import { Routes, Route } from 'react-router'
import Layout from './components/Layout' // Contendrá tu <header> y <footer>
import Home from './pages/Home'
import Productos from './pages/Productos'
import Login from './pages/Login'
import Registro from './pages/Registro'
import DashboardAdmin from './pages/admin/DashboardAdmin'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
      </Route>
      {/* Ruta del panel administrativo sin el Layout público */}
      <Route path="admin/home" element={<DashboardAdmin />} />
    </Routes>
  )
}

export default App