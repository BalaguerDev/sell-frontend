import {
  MenuContainer,
  SidebarContainer,
} from "./style/SidebarStyle";
import SidebarItem from "./SidebarItem";
import UserInfo from "./UserInfo";
import Logo from "./Logo";
import useSidebar from '../../common/hooks/useSideBar';
import { menuItems } from './config/menuItems';

const Sidebar = () => {
  const { 
    isOpen, 
    selectedItemIndex, 
    handleMouseEnter, 
    handleMouseLeave, 
    handleItemClick 
  } = useSidebar();

  return (
    <SidebarContainer
      open={isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Logo isOpen={isOpen} />
      <MenuContainer>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isOpen={isOpen}
            isSelected={index === selectedItemIndex}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </MenuContainer>
      <UserInfo isOpen={isOpen} />
    </SidebarContainer>
  );
};

export default Sidebar;
