// ** Icons Imports
import { PhoneCall, Mail } from "react-feather";

// ** Reactstrap Imports
import { Row, Col, Card, CardBody } from "reactstrap";

const FaqContact = () => {
  return (
    <div className="faq-contact">
      <Row className="mt-5 pt-75">
        <Col className="text-center" sm="12">
          <h2>문제가 해결되지 않았나요?</h2>
          <p className="mb-3">
            FAQ에서 질문을 찾을 수 없는 경우 언제든지 문의할 수 있습니다.곧 답변
            드리겠습니다!
          </p>
        </Col>
        <Col sm="6">
          <Card className="text-center faq-contact-card shadow-none py-1">
            <CardBody>
              <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto">
                <PhoneCall size={18} />
              </div>
              <h4>+ (810) 2548 2568</h4>
              <span className="text-body">
                언제든지 기꺼이 도와드리겠습니다.
              </span>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="text-center faq-contact-card shadow-none py-1">
            <CardBody>
              <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto">
                <Mail size={18} />
              </div>
              <h4>hello@help.com</h4>
              <span className="text-body">
                빠른 답변을 얻을 수 있는 최선의 방법.
              </span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FaqContact;
