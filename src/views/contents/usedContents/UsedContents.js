// ** react Imports
import React, { useState, useEffect } from "react";
import axios from "axios";

// ** Store & Actions
import { getAllData, getData } from "./store";
import { useDispatch, useSelector } from "react-redux";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Badge,
  InputGroup,
  InputGroupText,
  Input,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

// ** Third Party Components
import Breadcrumbs from "@components/breadcrumbs";
import ReactPaginate from "react-paginate";
import DataTable from "react-data-table-component";

// ** Table Columns
import ContentItem from "./ContentItem";

// ** Icon Import
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@styles/react/libs/tables/react-dataTable-component.scss";

// const CustomHeader = ({ handleFilter, value, handlePerPage, rowsPerPage }) => {
//   return (
//     <div className="invoice-list-table-header w-100 py-2">
//       <Row>
//         <Col
//           lg="6"
//           className="actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0"
//         >
//           <div className="d-flex align-items-center">
//             <label htmlFor="searchContent">검색</label>
//             <Input
//               id="searchContent"
//               className="ms-50 me-2 w-100"
//               type="text"
//               value={value}
//               onChange={(e) => handleFilter(e.target.value)}
//               placeholder="Search Invoice"
//             />
//           </div>
//         </Col>
//         <Col lg="6" className="d-flex align-items-center px-0 px-lg-1">
//           <div className="d-flex align-items-center me-2">
//             <label htmlFor="rows-per-page">페이지 당 표시 수</label>
//             <Input
//               type="select"
//               id="rows-per-page"
//               value={rowsPerPage}
//               onChange={handlePerPage}
//               className="form-control ms-50 pe-3"
//             >
//               <option value="10">10</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//             </Input>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

const UsedContents = () => {
  // ** Stroe vars
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state.content);

  // ** States
  const [contents, setContents] = useState(null);
  // const [value, setValue] = useState('')
  // const [sort, setSort] = useState("desc");
  // const [sortColumn, setSortColumn] = useState("idx");
  // const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/contents/list/118413609210214538557/-1"
        );
        setContents(response.data.results);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  // 페이징 처리 중이어서 오류 나서 일단 막아놨습니다.

  // // ** Get data on mount
  // useEffect(() => {
  //   dispatch(
  //     getData({
  //       sort,
  //       q: value,
  //       sortColumn,
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //     })
  //   );
  // }, [dispatch, store.data.length]);

  // const handleFilter = val => {
  //   setValue(val)
  //   dispatch(
  //     getData({
  //       sort,
  //       q: val,
  //       sortColumn,
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //     })
  //   )
  // }

  // // ** Function in get data on rows per page
  // const handlePerPage = (e) => {
  //   const value = parseInt(e.currentTarget.value);
  //   dispatch(
  //     getData({
  //       sort,
  //       q: value,
  //       sortColumn,
  //       page: currentPage,
  //       perPage: parseInt(e.target.value),
  //     })
  //   );
  //   setRowsPerPage(parseInt(e.target.value));
  // };

  // // ** Function in get data on page change
  // const handlePagination = (page) => {
  //   dispatch(
  //     getData({
  //       sort,
  //       q: value,
  //       sortColumn,
  //       perPage: rowsPerPage,
  //       page: page.selected + 1,
  //     })
  //   );
  //   setCurrentPage(page.selected + 1);
  // };

  // const CustomPagination = () => {
  //   const count = Number((contents.length / rowsPerPage).toFixed(0));

  //   return (
  //     <ReactPaginate
  //       nextLabel=""
  //       breakLabel="..."
  //       previousLabel=""
  //       pageCount={count || 1}
  //       activeClassName="active"
  //       breakClassName="page-item"
  //       pageClassName={"page-item"}
  //       breakLinkClassName="page-link"
  //       nextLinkClassName={"page-link"}
  //       pageLinkClassName={"page-link"}
  //       nextClassName={"page-item next"}
  //       previousLinkClassName={"page-link"}
  //       previousClassName={"page-item prev"}
  //       onPageChange={page => handlePagination(page)}
  //       forcePage={currentPage !== 0 ? currentPage - 1 : 0}
  //       containerClassName={"pagination react-paginate justify-content-start"}
  //     />
  //   );
  // };

  // const dataToRender = () => {
  //   const filters = {
  //     q: value,
  //   }

  //   const isFiltered = Object.keys(filters).some(function (k) {
  //     return filters[k].length > 0
  //   })

  //   if (store.data.length > 0) {
  //     return store.data
  //   } else if (store.data.length === 0 && isFiltered) {
  //     return []
  //   } else {
  //     return store.allData.slice(0, rowsPerPage)
  //   }
  // }

  // const handleSort = (column, sortDirection) => {
  //   setSort(sortDirection)
  //   setSortColumn(column.sortField)
  //   dispatch(
  //     getData({
  //       q: value,
  //       page: currentPage,
  //       sort: sortDirection,
  //       perPage: rowsPerPage,
  //       sortColumn: column.sortField
  //     })
  //   )
  // }

  if (!contents) {
    return null;
  }

  const count = Number(Math.ceil(contents.length / rowsPerPage));

  return (
    <div>
      <Breadcrumbs
        title="이용한 콘텐츠"
        data={[{ title: "콘텐츠" }, { title: "이용한 콘텐츠" }]}
      />
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between">
            <InputGroup className="w-auto me-50">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} size="sm" />
              </InputGroupText>
              <Input placeholder="검색어를 입력하세요" />
            </InputGroup>
            {/* <UncontrolledButtonDropdown className="me-50">
              <DropdownToggle outline color="secondary" caret>
                선택하세요
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#" tag="a">
                  Option 1
                </DropdownItem>
                <DropdownItem href="#" tag="a">
                  Option 2
                </DropdownItem>
                <DropdownItem href="#" tag="a">
                  Option 3
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#" tag="a">
                  Option 4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown> */}
            <Button color="primary">검색</Button>
          </div>
        </CardHeader>
        <CardBody className="pb-0">
          {/* <DataTable
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            onSort={handleSort}
            data={dataToRender()}
            sortIcon={<FontAwesomeIcon icon={faChevronDown} size="sm" />}
            className="react-dataTable"
            defaultSortField="invoiceId"
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            subHeaderComponent={
              <CustomHeader
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
              />
            }
          /> */}
          <Table responsive>
            <thead>
              <tr>
                <th className="px-1 fs-5">순번</th>
                <th className="px-0 fs-5">관광지명</th>
                <th className="px-0 fs-5">콘텐츠 ID/VIMEO ID</th>
                <th className="px-0 fs-5">지도(위도/경도)</th>
                <th className="px-0 fs-5">
                  구분(시간/계절/날씨/도로구분/도로)
                </th>
                <th className="px-0 fs-5">코스 확인</th>
                <th className="px-0 fs-5">기록일자</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content) => (
                <ContentItem key={content.idx} content={content} />
              ))}
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <Row>
            <Col lg="6" md="6" className="d-flex align-items-center">
              <ReactPaginate
                previousLabel=""
                nextLabel=""
                breakLabel="..."
                pageCount={count || 1}
                activeClassName="active"
                // forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                // onPageChange={(page) => handlePagination(page)}
                pageClassName="page-item"
                breakClassName="page-item"
                pageLinkClassName="page-link"
                nextClassName="page-item next"
                nextLinkClassName="page-link"
                previousClassName="page-item prev"
                previousLinkClassName="page-link"
                containerClassName="pagination react-paginate justify-content-start"
              />
            </Col>
            <Col lg="6" md="6" className="d-flex justify-content-end pt-50">
              <div>
                <span>
                  검색된 콘텐츠는 총{" "}
                  <Badge className="text-primary fw-bolder" color="light">
                    {contents.length}
                  </Badge>
                  개 입니다.
                </span>
              </div>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UsedContents;
