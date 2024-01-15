import { Fragment } from "react";
// ** Custom Components
import Avatar from "@components/avatar";
import AvatarGroup from "@components/avatar-group";

// ** Icons Imports
import { Calendar, MapPin } from "react-feather";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardHeader,
  Badge,
} from "reactstrap";

// ** Images Imports
import illustration from "@src/assets/images/illustration/email.svg";

// ** Avatar Imports
import avatar9 from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import avatar6 from "@src/assets/images/portrait/small/avatar-s-6.jpg";
import avatar8 from "@src/assets/images/portrait/small/avatar-s-8.jpg";
import avatar7 from "@src/assets/images/portrait/small/avatar-s-7.jpg";
import avatar20 from "@src/assets/images/portrait/small/avatar-s-20.jpg";

const CardMeetup = () => {
  const data = [
    {
      title: "Brandon Miles",
      placement: "bottom",
      img: avatar8,
      imgHeight: 60,
      imgWidth: 60,
    },
    {
      meta: "트레이너 홍길동",
    },
  ];

  return (
    <Fragment>
      <Card className="card-developer-meetup">
        <div className="meetup-img-wrapper rounded-top text-center">
          <img src={illustration} height="170" />
        </div>
        <CardBody>
          <div className="meetup-header d-flex align-items-center">
            <div className="meetup-day">
              <h6 className="mb-0">THU</h6>
              <h3 className="mb-0">24</h3>
            </div>
            <div className="my-auto">
              <h4 className="fw-bolder mb-25">연결된 피트니스센터</h4>
              <CardText className="mb-0">전문가와 함께하세요.</CardText>
            </div>
          </div>
          <div className="d-flex mt-2">
            <Avatar
              color="light-primary"
              className="rounded me-1"
              icon={<MapPin size={18} />}
            />
            <div>
              <h6 className="mb-0">전남대 피트니스센터</h6>
              <small>광주, 용봉로 77길</small>
            </div>
          </div>
          <div className="d-flex mt-2">
            <Avatar
              color="light-primary"
              className="rounded me-1"
              icon={<MapPin size={18} />}
            />
            <div>
              <h6 className="mb-0">광주 헬스장</h6>
              <small>광주, 용봉로 77길</small>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h4 className="fw-bolder">연결된 트레이너</h4>
        </CardHeader>
        <CardBody className="pb-0">
          <CardText>
            트레이너에게 문의가 필요하세요?{" "}
            <Badge className="text-danger fw-bolder" color="light">
              연락하기
            </Badge>
          </CardText>
          <blockquote className="blockquote ps-1 border-start-primary border-start-3">
            <div className="d-flex align-items-center">
              <div className="me-1">
                <img
                  src={avatar8}
                  alt="Generic placeholder image"
                  height="64"
                  width="64"
                />
              </div>
              <div className="ms-50 align-items-center">
                <span className="fw-bolder d-block">트레이너 홍길동</span>
                <small className="text-muted">트레이너 한줄 소개</small>
              </div>
            </div>
            <footer className="blockquote-footer text-end">
              광주시 용봉동,
              <cite title="Source Title">전남대 피트니스 센터</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default CardMeetup;
