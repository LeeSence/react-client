import react, { Fragment, useState } from "react";

import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";

import Avatar from "@components/avatar";
import avatar3 from "@src/assets/images/portrait/small/avatar-s-3.jpg";
import avatar15 from "@src/assets/images/portrait/small/avatar-s-15.jpg";
import axios from "axios";

const NotificationList = () => {
  const [nlist, setNlist] = useState([]);

  const getData = async () => {
    axios
      .get("/api/getmessages/list/118413609210214538557/msg")
      .then((res) => {
        setNlist(res.data);
        console.log("알림리스트 불러오기 성공");
      })
      .catch((Error) => {
        console.log(Error);
      });

    if (nlist.length > 0) {
      return (
        <PerfectScrollbar
          component="li"
          className="media-list scrollable-container"
          options={{
            wheelPropagation: false,
          }}
        >
          {nlist.map((listdata) => {
            return (
              <a
                key={listdata.idx}
                className="d-flex"
                href={"/"}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="list-item d-flex align-items-start">
                  <Fragment>
                    <div className="me-1">
                      <Avatar avatarContent="MD" color="light-success" />
                    </div>
                    <div className="list-item-body flex-grow-1">
                      {listdata.titles}
                    </div>
                  </Fragment>
                </div>
              </a>
            );
          })}
        </PerfectScrollbar>
      );
    }
  };
};
export default NotificationList;
