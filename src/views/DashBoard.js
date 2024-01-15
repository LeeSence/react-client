import { Fragment, useContext, useState } from "react";

// ** Custom Hooks
import { useRTL } from "@hooks/useRTL";

import { List } from "react-feather";

import Avatar from "@components/avatar";
import Timeline from "@components/timeline";
import AvatarGroup from "@components/avatar-group";

import { kFormatter } from "@utils";

import { ThemeColors } from "@src/utility/context/ThemeColors";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import OrdersReceived from "@src/views/ui-elements/cards/statistics/OrdersReceived";
import SubscribersGained from "@src/views/ui-elements/cards/statistics/SubscribersGained";
import CardCongratulations from "@src/views/ui-elements/cards/advance/CardCongratulations";

import ApexAreaChart from "@src/views/ui-elements/apex/ApexAreaCharts";
import StatsCard from "@src/views/ui-elements/cards/statistics/StatsCard";
import StatsCard2 from "@src/views/ui-elements/cards/statistics/StatsCard2";
import ApexBarChart from "@src/views/ui-elements/apex//ApexBarChart";
import ApexHeatmapChart from "@src/views/ui-elements/apex/ApexHeatmapChart";
import CardMeetup from "@src/views/ui-elements/cards/advance/CardMeetup";
import ConnectionsTabContent from "@src/views/ui-elements/cards/connection/ConnectionsTabContent";

import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";

import store from "../redux/store";

import { useEffect } from "react";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const { colors } = useContext(ThemeColors);
  // ** Hooks
  const [isRtl] = useRTL();

  console.log(store.getState());

  return (
    <div>
      <Row className="match-height">
        <Col lg="8" sm="8">
          <Row className="match-height">
            <Col lg="4" sm="4">
              <CardCongratulations />
            </Col>
            <Col lg="8" sm="8">
              <StatsCard cols={{ xl: "3", sm: "3" }} />
            </Col>
          </Row>
          <Row className="match-height">
            <Col lg="6" sm="6">
              <ApexAreaChart direction={isRtl ? "rtl" : "ltr"} />
            </Col>
            <Col lg="6" sm="6">
              <ApexBarChart
                direction={isRtl ? "rtl" : "ltr"}
                info={colors.info.main}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="4" sm="4" className="d-flex flex-column">
          <CardMeetup />
          <ConnectionsTabContent />
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
