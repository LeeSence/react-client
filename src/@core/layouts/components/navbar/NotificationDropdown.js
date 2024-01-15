import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bell } from "react-feather";
import {
  Button,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";

const NotificationDropdown = () => {
  const [unreadNotification, setUnreadNotification] = useState({ count: 0 });
  const [unreadMessage, setUnreadMessage] = useState({ count: 0 });
  const [notificationList, setNotificationList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }

  const subs = user[0].subs;
  const a_alert = user[0].a_alert;
  const a_msg = user[0].a_msg;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`/api/getmessages/list/${subs}/msg`);
        setNotificationList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUnreadNotificationCount = async () => {
      try {
        const response = await axios.get(`/api/getmessages/count/${subs}`);
        setUnreadNotification(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `/api/getmessages/view/${subs}/alert/1`
        );
        setMessageList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUnreadMessageCount = async () => {
      try {
        const response = await axios.get(`/api/getmessages/count/${subs}`);
        setUnreadMessage(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
    fetchUnreadNotificationCount();
    fetchMessages();
    fetchUnreadMessageCount();
  }, []);

  return (
    <UncontrolledDropdown
      tag="li"
      className="dropdown-notification nav-item me-25 ms-50 mt-25"
    >
      <DropdownToggle
        tag="a"
        className="nav-link"
        href="/"
        onClick={(e) => e.preventDefault()}
      >
        <Bell size={21} />
        {a_alert + a_msg > 0 && (
          <Badge pill color="danger" className="badge-up" key={a_alert + a_msg}>
            {a_alert + a_msg}
          </Badge>
        )}
      </DropdownToggle>
      <DropdownMenu tag="ul" className="dropdown-menu-media mt-0" end>
        {/* Dropdown header */}
        <li className="dropdown-menu-header">
          <DropdownItem className="d-flex" tag="div" header>
            <h4 className="notification-title mb-0 me-auto">알림</h4>
            {a_alert + a_msg > 0 && (
              <Badge tag="div" color="light-primary" pill>
                {a_alert + a_msg} New
              </Badge>
            )}
          </DropdownItem>
        </li>
        <PerfectScrollbar
          component="li"
          className="media-list scrollable-container"
          options={{
            wheelPropagation: false,
          }}
        >
          {notificationList.map((notification) => (
            <DropdownItem
              key={notification.idx}
              tag="div"
              className="notification-item"
            >
              <div className="d-flex">
                <Link to={"/newsDetail" + `/${notification.idx}`}>
                  <div className="notification-content flex-grow-1">
                    <p className="mb-0">
                      <span className="fw-bolder">{notification.titles}</span>{" "}
                      <small className="text-muted">
                        {notification.lastips}
                      </small>
                    </p>
                    <small className="text-muted">
                      {notification.lastdates}
                    </small>
                  </div>
                </Link>
              </div>
            </DropdownItem>
          ))}
          <hr className="mx-2" />
          <h4 className="notification-title mb-0 me-auto ms-2">메시지</h4>
          <hr className="mx-2" />
          {messageList.map((message) => (
            <DropdownItem
              key={message.idx}
              tag="div"
              className="notification-item"
            >
              <div className="d-flex">
                <Link to={"/NewsAlert" + `/${message.idx}`}>
                  <div className="notification-content flex-grow-1">
                    <p className="mb-0">
                      <span className="fw-bolder">{message.titles}</span>{" "}
                      <small className="text-muted">{message.lastips}</small>
                    </p>
                    <small className="text-muted">{message.lastdates}</small>
                  </div>
                </Link>
              </div>
            </DropdownItem>
          ))}
        </PerfectScrollbar>
        <li className="dropdown-menu-footer">
          <Link to="/newsBoard">
            <Button color="primary" block>
              모든 알림/메시지 확인하기
            </Button>
          </Link>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default NotificationDropdown;
