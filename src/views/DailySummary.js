// ** React Imports
import { Fragment } from "react";

// ** Hooks
import { useRTL } from "@hooks/useRTL";

import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
} from "swiper";

import Breadcrumbs from "@components/breadcrumbs";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import CenterSlidesStyle1 from "@src/views/ui-elements/extensions/swiper/CenteredSlidesStyle1";
import WizardModern from "@src/views/forms/wizard/steps-with-validation/WizardModern";
import PaginationDaily from "@src/views/components/pagination/PaginationDaily";
import DailyResult from "@src/views/ui-elements/dailychart/index";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/swiper/swiper.scss";

// ** Init Swiper Functions
SwiperCore.use([
  Navigation,
  Grid,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual,
]);

const DailySummary = () => {
  // ** Hooks
  const [isRtl] = useRTL();

  return (
    <Fragment>
      <Breadcrumbs title="일일요약" data={[{ title: "일일요약" }]} />
      <PaginationDaily />
      <Card>
        <CardHeader className="py-1">
          <h1 className="ms-1 mb-0">코스</h1>
        </CardHeader>
        <CardBody>
          <WizardModern />
          <CardFooter className="ps-1">
            <h1 className="d-inline me-1">운동시간</h1>
            <h3 className="d-inline">12:34:56</h3>
          </CardFooter>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h1>나의 운동 기록</h1>
        </CardHeader>
        <CardBody>
          <DailyResult />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default DailySummary;
