// ** React Imports
import { Fragment } from "react";
import { Link } from "react-router-dom";

// ** Third Party Components
import Proptypes from "prop-types";
import classnames from "classnames";

// import {
//   faBars,
//   faGraduationCap,
//   faTableColumns,
//   faChartSimple,
//   faCalendarDays,
//   faPager,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ** Reactstrap Imports
import {
  Breadcrumb,
  // DropdownMenu,
  // DropdownItem,
  BreadcrumbItem,
  // DropdownToggle,
  // UncontrolledButtonDropdown,
} from "reactstrap";

const BreadCrumbs = (props) => {
  // ** Props
  const { data, title } = props;

  const renderBreadCrumbs = () => {
    return data.map((item, index) => {
      const Wrapper = item.link ? Link : Fragment;
      const isLastItem = data.length - 1 === index;
      return (
        <BreadcrumbItem
          tag="li"
          key={index}
          active={!isLastItem}
          className={classnames({ "text-primary": !isLastItem })}
        >
          <Wrapper {...(item.link ? { to: item.link } : {})}>
            {item.title}
          </Wrapper>
        </BreadcrumbItem>
      );
    });
  };

  return (
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            {title ? (
              <h2 className="content-header-title float-start mb-0">{title}</h2>
            ) : (
              ""
            )}
            <div className="breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12">
              <Breadcrumb>
                <BreadcrumbItem tag="li">
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                {renderBreadCrumbs()}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
        <div className="breadcrumb-right dropdown">
          <UncontrolledButtonDropdown>
            <DropdownToggle
              color="primary"
              className="btn-icon btn-round dropdown-toggle"
            >
              <FontAwesomeIcon icon={faBars} />
            </DropdownToggle>
            <DropdownMenu tag="ul" end>
              <DropdownItem tag={Link} to="/dashBoard">
                <FontAwesomeIcon icon={faTableColumns} className="me-1" />
                <span className="align-middle">대시보드</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/dailySummary">
                <FontAwesomeIcon icon={faChartSimple} className="me-1" />
                <span className="align-middle">일일요약</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/calendar">
                <FontAwesomeIcon icon={faCalendarDays} className="me-1" />
                <span className="align-middle">캘린더</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/newsBoard">
                <FontAwesomeIcon icon={faPager} className="me-1" />
                <span className="align-middle">뉴스보드</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div> */}
    </div>
  );
};
export default BreadCrumbs;

// ** PropTypes
BreadCrumbs.propTypes = {
  title: Proptypes.string.isRequired,
  data: Proptypes.arrayOf(
    Proptypes.shape({
      link: Proptypes.string,
      title: Proptypes.string.isRequired,
    })
  ),
};
