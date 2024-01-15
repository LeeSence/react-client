// ** Icons Imports
import { Search } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardText,
  Form,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

import banner from "../../../assets/images/banner/banner.png";

const FaqFilter = ({ searchTerm, setSearchTerm, getFAQData }) => {
  const handleFaqFilter = (e) => {
    setSearchTerm(e.target.value);
    getFAQData(e.target.value);
  };

  return (
    <div id="faq-search-filter">
      <Card
        className="faq-search"
        style={{
          backgroundImage: banner,
        }}
      >
        <CardBody className="text-center">
          <h2 className="text-primary">자주 묻는 질문들</h2>
          <CardText className="mb-2">
            또는 카테고리를 선택하여 필요한 도움말을 빠르게 찾을 수 있습니다.
          </CardText>
          <Form
            className="faq-search-input"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup className="input-group-merge">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              <Input
                value={searchTerm}
                onChange={(e) => handleFaqFilter(e)}
                placeholder="search faq..."
              />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FaqFilter;
