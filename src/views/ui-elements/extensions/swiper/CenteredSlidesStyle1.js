// ** Third Party Components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Play,
  DollarSign,
  Watch,
  HelpCircle,
  FileText,
  Archive,
} from "react-feather";

import IconsTimeline from "@src/views/components/timeline/IconsTimeline";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap";

import "@styles/react/libs/charts/recharts.scss";

const SwiperCenterSlidesStyle = ({ isRtl }) => {
  const params = {
    className: "swiper-centered-slides swiper-container p-1",
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    navigation: true,
    slideToClickedSlide: true,
  };
  const dailyDay = {};

  return (
    <Card className="bg-transparent shadow-none">
      <CardHeader>
        <CardTitle tag="h4"></CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper dir={isRtl ? "rtl" : "ltr"} {...params}>
          <SwiperSlide className="rounded swiper-shadow">
            <CardTitle tag="h5">오늘</CardTitle>
            <Row>
              <Col>
                <Watch size={50} />
                <CardTitle tag="h5">01:28:11</CardTitle>
                <IconsTimeline />
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow">
            <DollarSign size={28} />
            <p className="swiper-text align-middle pt-md-1 pt-sm-50 mb-0">
              1일전
            </p>
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow">
            <HelpCircle size={28} />
            <p className="swiper-text align-middle pt-md-1 pt-sm-50 mb-0">
              2일전
            </p>
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow">
            <FileText size={28} />
            <p className="swiper-text align-middle pt-md-1 pt-sm-50 mb-0">
              3일전
            </p>
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow">
            <Archive size={28} />
            <p className="swiper-text align-middle pt-md-1 pt-sm-50 mb-0">
              4일전
            </p>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  );
};

export default SwiperCenterSlidesStyle;
