import { Routes, Route } from 'react-router'
import Layout from './cors/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Contacto from './pages/Contacto'
import Agendar from './pages/Agendar'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'
import BlogDetalle1 from './pages/BlogDetalle1'
import BlogDetalle2 from './pages/BlogDetalle2'
import AdminLayout from './pages/admin/AdminLayout'
import CatalogoAdmin from './pages/admin/CatalogoAdmin'
import UsuarioAdmin from './pages/admin/UsuarioAdmin'

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
        <Route path="blog-detalle-1" element={<BlogDetalle1 />} />
        <Route path="blog-detalle-2" element={<BlogDetalle2 />} />
        <Route path="agendar" element={<Agendar />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="home" element={<DashboardAdmin />} />
        <Route path="catalogo" element={<CatalogoAdmin />} />
        <Route path="usuario" element={<UsuarioAdmin />} />
      </Route>
    </Routes>
  )
}

export default App