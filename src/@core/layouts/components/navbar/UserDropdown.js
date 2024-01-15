// ** React Imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import axios from "axios";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";

const UserDropdown = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }
  const nickname = user[0].nicknames;
  const ids = user[0].ids;

  const dispatch = useDispatch();
  const handleLogout = () => {
    sessionStorage.removeItem("user"); // 세션 스토리지 값 초기화
    dispatch(setUserInfo(null)); // 유저 정보 리덕스 스토어 값 초기화
  };

  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bolder">{nickname}</span>
          <span className="user-status">{ids}</span>
        </div>
        <Avatar
          img={defaultAvatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="/userSetting">
          <User size={14} className="me-75" />
          <span className="align-middle">내 프로필</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/usedContents">
          <CheckSquare size={14} className="me-75" />
          <span className="align-middle">운동기록</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to="/userSetting">
          <Settings size={14} className="me-75" />
          <span className="align-middle">사용자 설정</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/Faq">
          <HelpCircle size={14} className="me-75" />
          <span className="align-middle">FAQ</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/Login" onClick={handleLogout}>
          <Power size={14} className="me-75" />
          <span className="align-middle">로그아웃</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
