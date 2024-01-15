import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import { Heart } from "react-feather";

import DailySpeed from "@src/views/ui-elements/dailychart/DailySpeed";
import DailyPower from "@src/views/ui-elements/dailychart/DailyPower";
import DailyCadence from "@src/views/ui-elements/dailychart/DailyCadence";
import DailyHeartrate from "@src/views/ui-elements/dailychart/DailyHeartrate";
import StatsVertical from "@components/widgets/stats/StatsVertical";

const DailyResult = () => {
  return (
    <div>
      <Row className="match-height">
        <Col lg="8" md="6" xs="6">
          <Row>
            <DailyPower />
          </Row>
          <Row>
            <DailyCadence />
          </Row>
          <Row>
            <DailySpeed />
          </Row>
          <Row>
            <DailyHeartrate />
          </Row>
        </Col>
        <Col lg="4" md="6" sm="6">
          <Card className="border">
            <CardHeader>
              <h2>운동 결과 분석</h2>
            </CardHeader>
            <CardBody>
              <CardText>[ 콩남님 운동정보 ]</CardText>
              <CardText>1.심박수</CardText>
              <CardText>
                평균 심박수는 117bpm으로 존1 구간의 저강도 운동입니다. 존1
                구간은 워밍업 또는 운동 후 심박수를 낮추는데 효과적입니다.
              </CardText>
              <CardText>2.케이던스</CardText>
              <CardText>
                평균 패달 회전수는 67rpm입니다. 심장강화에 효과적인 페달
                회전수는 90rpm 입니다. 조금만 더 빠른 속도로 패달을 굴려주시면
                심장강화에 도움이 될거에요.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default DailyResult;
