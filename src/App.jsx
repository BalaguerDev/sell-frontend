import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useSidebarStore from './common/store/sidebarStore';

import GlobalStyle from './styles/GlobalStyle';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import RouteDay from './pages/RouteDay';
import Billing from './pages/Billing';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';
import Layout from './components/Layout/Layout';

const App = () => {
  const { isOpen } = useSidebarStore();  

  return (
    <Router>
      <GlobalStyle isSidebarOpen={isOpen} />  
      <Layout >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/rutas" element={<RouteDay />} />
          <Route path="/facturacion" element={<Billing />} />
          <Route path="/calendario" element={<Calendar />} />
          <Route path="/ajustes" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
