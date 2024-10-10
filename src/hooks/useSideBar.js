import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSidebarStore from '../../store/sidebarStore';
import { menuItems } from '../../components/Sidebar/config/menuItems';

const useSidebar = () => {
  const { isOpen, openSidebar, closeSidebar, selectedItemIndex, setSelectedItem } = useSidebarStore();
  const location = useLocation();

  useEffect(() => {
    const activeMenuItem = menuItems.findIndex(
      (item) => item.path === location.pathname
    );
    setSelectedItem(activeMenuItem !== -1 ? activeMenuItem : null);
  }, [location, setSelectedItem]);

  const handleMouseEnter = () => {
    openSidebar();
  };

  const handleMouseLeave = () => {
    closeSidebar();
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
    closeSidebar();
  };

  return { 
    isOpen, 
    openSidebar, 
    closeSidebar, 
    selectedItemIndex, 
    setSelectedItem, 
    handleMouseEnter, 
    handleMouseLeave,
    handleItemClick // ahora también exportas handleItemClick
  };
};

export default useSidebar;
