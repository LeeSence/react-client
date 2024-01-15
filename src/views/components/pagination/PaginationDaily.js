// ** Reactstrap Imports
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// ** Icons Imports
import { ChevronLeft, ChevronRight } from "react-feather";

const PaginationDaily = () => {
  return (
    <Pagination className="d-flex align-items-center">
      <PaginationItem className="d-flex align-items-center">
        <PaginationLink href="#" first onClick={(e) => e.preventDefault()}>
          <ChevronLeft size={30} />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active className="d-flex align-items-center">
        <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
          <span className="fs-5">오늘</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-flex align-items-center">
        <PaginationLink href="#" last onClick={(e) => e.preventDefault()}>
          <ChevronRight size={30} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};
export default PaginationDaily;
