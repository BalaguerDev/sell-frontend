import PropTypes from 'prop-types';

import { LogoClose, LogoOpen, LogoContainer } from './style/SidebarStyle';
import logoImgOpen from '../../assets/logo/sellact_fullcolor.png';
import logoImgClose from '../../assets/logo/imagotipo_fullcolor.png';

const Logo = ({ isOpen }) => {
  return (
    <LogoContainer>
      <LogoClose src={logoImgClose} alt="sellact" open={isOpen} />
      <LogoOpen src={logoImgOpen} alt="sellact" open={isOpen} />
    </LogoContainer>
  );
};

Logo.propTypes = {
  isOpen: PropTypes.bool, 
};

export default Logo;