import React from "react";
import { MoreVertical, Edit, Trash } from "react-feather";
import {
  Table,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

const NewsContents = ({ content }) => {
  const { idx, cnts, infos, lastdates, lastips, titles } = content;

  return (
    <tr>
      <td className="ps-2 py-1">
        <span className="align-middle fw-bolder">{idx}</span>
      </td>
      <td className="px-0 py-1">{titles}</td>
      <td className="px-2 py-1">
        <Link to={"/NewsDetail/" + idx} style={{ color: "#6E6B7B" }}>
          <span>{infos}</span>
        </Link>
      </td>
      <td className="ps-1 py-1">{cnts}</td>
      <td className="px-0 py-1">{lastdates}</td>
      <td className="ps-1 py-1">{lastips}</td>
      <td className="px-0 py-1">
        <UncontrolledDropdown>
          <DropdownToggle
            className="icon-btn hide-arrow"
            color="transparent"
            size="sm"
            caret
          >
            <MoreVertical size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
              <Edit className="me-50" size={15} />{" "}
              <span className="align-middle">수정</span>
            </DropdownItem>
            <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
              <Trash className="me-50" size={15} />{" "}
              <span className="align-middle">삭제</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
};

export default NewsContents;
