import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function RequireAuth({ children, requireAdmin }) {
  const { user } = useAuth();

  // 1. Si no hay ningún usuario logueado, se devuelve al Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si la ruta es solo para administradores y el usuario es un paciente, lo mandamos al Home
  if (requireAdmin && user.rol !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // 3. Si pasa todos los controles, lo dejamos pasar y renderizamos la vista secreta
  return children;
}