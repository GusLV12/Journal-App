import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const {status} = useCheckAuth();
  if (status === 'checking') {
    return <CheckingAuth />; 
  }
return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />} /> // Mostrar rutas principales cuando está autenticado
          : <Route path="/auth/*" element={<AuthRoutes />} /> // Mostrar rutas de autenticación cuando no está autenticado
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} /> {/* Corregido el cierre de comillas */}
    </Routes>
  );
};
