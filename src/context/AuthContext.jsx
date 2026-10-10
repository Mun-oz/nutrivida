import { createContext, useState, useEffect, useContext } from 'react';

// 1. Creamos el Contexto
const AuthContext = createContext();

// 2. Creamos el Proveedor
export const AuthProvider = ({ children }) => {
  
  // Usamos la lógica de persistencia
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('nutrivida_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Cada vez que el usuario cambie (login o logout), actualizamos el Local Storage
  useEffect(() => {
    if (user) {
      localStorage.setItem('nutrivida_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('nutrivida_user');
    }
  }, [user]);

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto fácilmente en cualquier parte
export const useAuth = () => useContext(AuthContext);