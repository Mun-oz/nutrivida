import { Routes, Route } from 'react-router'
import Layout from './cors/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Contacto from './pages/Contacto'
import Agendar from './pages/Agendar'
import DashboardAdmin from './pages/admin/DashboardAdmin'


function Nosotros() { return <main className="container"><h2 style={{marginTop: '2rem'}}>Nosotros</h2><p>Página en construcción...</p></main> }
function Blog() { return <main className="container"><h2 style={{marginTop: '2rem'}}>Nuestro Blog</h2><p>Página en construcción...</p></main> }

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="blog" element={<Blog />} />
        <Route path="agendar" element={<Agendar />} />
      </Route>
      <Route path="admin/home" element={<DashboardAdmin />} />
    </Routes>
  )
}

export default App