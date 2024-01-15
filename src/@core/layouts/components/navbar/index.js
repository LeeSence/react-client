// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Custom Components
import NavbarUser from "./NavbarUser";

// ** Third Party Components
import { Sun, Moon, Menu, User, Calendar, Flag } from "react-feather";

// ** Reactstrap Imports
import {
  NavItem,
  NavLink,
  Badge,
  Progress,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

import NotificationDropdown from "./NotificationDropdown";

const ThemeNavbar = (props) => {
  // ** Props

  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  const [popUserOpen, setPopUserOpen] = useState(false);
  const [popAttendOpen, setPopAttendOpen] = useState(false);
  const [popExpOpen, setPopExpOpen] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }
  const nickname = user[0].nicknames;
  const dayCount = user[0].log_count;
  const exp = user[0].g_exp;

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <NavItem className="d-none d-lg-block">
          <NavLink className="nav-link-style">
            <ThemeToggler />
          </NavLink>
        </NavItem>
        <ul className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu me-auto">
            <NavLink
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={() => setMenuVisibility(true)}
            >
              <Menu className="ficon" />
            </NavLink>
          </NavItem>
        </ul>
        <ul className="navbar-nav">
          <NotificationDropdown />
        </ul>
        <ul className="navbar-nav">
          <NavItem className="d-none d-lg-block">
            <NavLink className="nav-link-style">
              <User id="popUser" className="ficon" />
              <Popover
                placement="bottom"
                target="popUser"
                trigger="legacy"
                isOpen={popUserOpen}
                toggle={() => setPopUserOpen(!popUserOpen)}
              >
                <PopoverHeader className="border-0 text-center">
                  닉네임
                </PopoverHeader>
                <PopoverBody className="text-center">
                  <Badge color="light-primary" className="fs-5">
                    {nickname}
                  </Badge>
                </PopoverBody>
              </Popover>
            </NavLink>
          </NavItem>
        </ul>
        <ul className="navbar-nav">
          <NavItem className="d-none d-lg-block">
            <NavLink className="nav-link-style">
              <Calendar id="popAttend" className="ficon" />
              <Popover
                placement="bottom"
                target="popAttend"
                trigger="legacy"
                isOpen={popAttendOpen}
                toggle={() => setPopAttendOpen(!popAttendOpen)}
              >
                <PopoverHeader className="text-center">출석일</PopoverHeader>
                <PopoverBody className="text-center">
                  <Badge color="light-primary" className="fs-5">
                    {dayCount} 일차
                  </Badge>
                </PopoverBody>
              </Popover>
            </NavLink>
          </NavItem>
        </ul>
        <ul className="navbar-nav">
          <NavItem className="d-none d-lg-block">
            <NavLink className="nav-link-style">
              <Flag id="popExp" className="ficon" />
              <Popover
                placement="bottom"
                target="popExp"
                trigger="legacy"
                isOpen={popExpOpen}
                toggle={() => setPopExpOpen(!popExpOpen)}
              >
                <PopoverHeader>경험치</PopoverHeader>
                <PopoverBody className="ps-0">
                  <Progress
                    value="42.4"
                    className="fs-6 ms-1 fw-bolder"
                    style={{ width: "15rem", height: "30px" }}
                    animated
                  >
                    {exp}/5000
                  </Progress>
                </PopoverBody>
              </Popover>
            </NavLink>
          </NavItem>
        </ul>
      </div>

      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  );
};

export default ThemeNavbar;
