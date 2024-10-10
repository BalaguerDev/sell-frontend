import PropTypes from "prop-types";
import {
  Avatar,
  TextContainer,
  UserContainer,
  NameUser,
  RoleJob,
  ChevronIconDown,
} from "./style/SidebarStyle";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const UserInfo = ({ isOpen }) => (
  <UserContainer to="/ajustes">
    <Avatar
      src="https://randomuser.me/api/portraits/men/75.jpg"
      alt="Avatar de Ignasi Donaire"
      $sidebarOpen={isOpen}
    />
    {isOpen && (
      <>
        <TextContainer>
          <NameUser $sidebarOpen={isOpen}>Ignasi Donaire</NameUser>
          <RoleJob $sidebarOpen={isOpen}>Comercial Noroeste</RoleJob>
        </TextContainer>
        <ChevronIconDown icon={faChevronDown} />
      </>
    )}
  </UserContainer>
);

UserInfo.propTypes = {
  isOpen: PropTypes.bool,
};

export default UserInfo;
