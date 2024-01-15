// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Table,
  Input,
  Button,
} from "reactstrap";

const typesArr = [
  {
    title: "새로운 소식",
    defaultChecked: ["email"],
  },
  {
    title: "계정 활동",
    defaultChecked: ["browser", "app"],
  },
  {
    title: "새로운 기기에서 접속시도",
    defaultChecked: ["email", "browser", "app"],
  },
  {
    title: "새로운 기기와 연동시",
    defaultChecked: ["browser"],
  },
];
const NotificationsTabContent = () => {
  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">알림 설정</CardTitle>
      </CardHeader>
      <CardBody className="pt-2">
        <h5 className="mb-0">
          알림을 표시하려면 브라우저의 권한이 필요합니다.{" "}
          <strong>권한 요청</strong>
        </h5>
      </CardBody>
      <Table className="text-nowrap text-center border-bottom" responsive>
        <thead>
          <tr>
            <th className="text-start">알림 유형</th>
            <th>✉️ 이메일</th>
            <th>🖥 브라우저</th>
            <th>👩🏻‍💻 앱</th>
          </tr>
        </thead>
        <tbody>
          {typesArr.map((type, index) => {
            return (
              <tr key={index}>
                <td className="text-start">{type.title}</td>
                <td>
                  <div className="d-flex form-check justify-content-center">
                    <Input
                      type="checkbox"
                      defaultChecked={type.defaultChecked.includes("email")}
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex form-check justify-content-center">
                    <Input
                      type="checkbox"
                      defaultChecked={type.defaultChecked.includes("browser")}
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex form-check justify-content-center">
                    <Input
                      type="checkbox"
                      defaultChecked={type.defaultChecked.includes("app")}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CardBody className="mt-50">
        <Row className="gy-2">
          <Col md="6">
            <h5 className="mb-1">언제 알림을 수신하시겠습니까? </h5>
            <Input type="select" defaultValue="Full Access Always">
              <option value="full-access">항상 알림.</option>
              <option value="only-online">온라인 상태일 때만 알림.</option>
              <option value="never">알리지 않음.</option>
            </Input>
          </Col>
          <Col className="mt-2" xs={12}>
            <Button className="me-1" color="primary">
              저장
            </Button>
            <Button outline>취소</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default NotificationsTabContent;
