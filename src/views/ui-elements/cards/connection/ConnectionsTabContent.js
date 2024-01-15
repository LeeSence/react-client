// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,
} from "reactstrap";

// ** Icons Imports
import { Check, X, Link } from "react-feather";

// ** Social Icons
import slackIcon from "@src/assets/images/icons/social/slack.png";
import googleIcon from "@src/assets/images/icons/social/google.png";
import twitterIcon from "@src/assets/images/icons/social/twitter.png";
import facebookIcon from "@src/assets/images/icons/social/facebook.png";
import strava from "@src/assets/images/icons/social/strava.png";

const connectedAccounts = [
  {
    checked: true,
    title: "Strava",
    subtitle: "계정이 연결된 상태입니다",
    logo: strava,
  },
  {
    checked: true,
    title: "Google",
    subtitle: "캘린더 및 연락처",
    logo: googleIcon,
  },
  {
    checked: true,
    title: "Facebook",
    subtitle: "계정이 연결된 상태입니다",
    logo: facebookIcon,
  },
  {
    checked: false,
    title: "Twitter",
    subtitle: "Not Connected",
    logo: twitterIcon,
  },
];

const ConnectionsTabContent = () => {
  return (
    // <Row>
    //   <Col md="12">
    <Card>
      <CardHeader className="border-bottom pt-1 pb-50">
        <CardTitle>
          <h4>
            <strong>연결된 계정</strong>
          </h4>
        </CardTitle>
      </CardHeader>
      <CardBody>
        {connectedAccounts.map((item, index) => {
          return (
            <div className="d-flex mt-2" key={index}>
              <div className="flex-shrink-0">
                <img
                  className="me-1"
                  src={item.logo}
                  alt={item.title}
                  height="38"
                  width="38"
                />
              </div>
              <div className="d-flex align-item-center justify-content-between flex-grow-1">
                <div className="me-1">
                  <p className="fw-bolder mb-0">{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
                <div className="mt-50 mt-sm-0">
                  <div className="form-switch">
                    <Input
                      type="switch"
                      defaultChecked={item.checked}
                      id={`account-${item.title}`}
                    />
                    <Label
                      className="form-check-label"
                      for={`account-${item.title}`}
                    >
                      <span className="switch-icon-left">
                        <Check size={14} />
                      </span>
                      <span className="switch-icon-right">
                        <X size={14} />
                      </span>
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default ConnectionsTabContent;
