import Sidebar from "../Sidebar/Sidebar";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {

  return (
    <>
      <Sidebar />
      <div className="page">
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Layout;
