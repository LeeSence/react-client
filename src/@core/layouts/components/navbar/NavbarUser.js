// ** Dropdowns Imports
import UserDropdown from "./UserDropdown";

import ThemeToggler from "./index";

const NavbarUser = () => {
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <UserDropdown />
    </ul>
  );
};
export default NavbarUser;
