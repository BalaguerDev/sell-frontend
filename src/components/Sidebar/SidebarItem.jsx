import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono de chevron

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSidebarItem, Icon, Label, ChevronIconRight } from './style/SidebarStyle';

const SidebarItem = ({ icon, label, path, isOpen, isSelected, onClick }) => (
  <StyledSidebarItem 
    key={label} 
    to={path}     
    onClick={onClick} 
    $isOpen={isOpen}
    $isSelected={isSelected}
    >
    <Icon $sidebarOpen={isOpen}>
      <FontAwesomeIcon icon={icon}  />
    </Icon>
    {isOpen &&<Label $sidebarOpen={isOpen}>{label}</Label>}
    {isOpen && <ChevronIconRight icon={faChevronRight} />}
  </StyledSidebarItem>
);



SidebarItem.propTypes = {
  icon: PropTypes.object, 
  label: PropTypes.string, 
  path: PropTypes.string, 
  isOpen: PropTypes.bool, 
  isSelected: PropTypes.bool.isRequired, 
  onClick: PropTypes.func.isRequired,
};

export default SidebarItem;
