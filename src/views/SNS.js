import { Link } from "react-router-dom";

// ** Third Party Components
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardBody } from "reactstrap";

import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import Breadcrumbs from "@components/breadcrumbs";

import "@styles/react/libs/swiper/swiper.scss";

// ** Images
import img1 from "@src/assets/images/banner/instagram-1.jpg";
import img2 from "@src/assets/images/banner/youtube-1.jpg";
import { Fragment } from "react";

const params = {
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  // navigation: true,
};

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const SNS = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="SNS"
        data={[{ title: "소셜 네트워크" }, { title: "SNS" }]}
      />
      <Card>
        <CardBody>
          <Swiper {...params}>
            <SwiperSlide>
              <Link to="http://www.instagram.com">
                <img src={img1} alt="swiper 1" className="img-fluid" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="http://www.youtube.com">
                <img src={img2} alt="swiper 2" className="img-fluid" />
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="d-flex justify-content-end">
            <p className="text-muted">배너 클릭 시 해당 페이지로 이동합니다.</p>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default SNS;
