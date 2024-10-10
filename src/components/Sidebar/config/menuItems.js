import { 
  faHome, 
  faAddressBook, 
  faMapMarkedAlt, 
  faFileInvoiceDollar, 
  faCalendarAlt 
} from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  { path: '/', icon: faHome, label: 'Inicio' }, 
  { path: '/clientes', icon: faAddressBook, label: 'Clientes' },
  { path: '/rutas', icon: faMapMarkedAlt, label: 'Rutas' },
  { path: '/facturacion', icon: faFileInvoiceDollar, label: 'Facturación' }, 
  { path: '/calendario', icon: faCalendarAlt, label: 'Calendario' },
];
