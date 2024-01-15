// ** React Imports
import { Fragment } from "react";

import Breadcrumbs from "@components/breadcrumbs";

import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

import RidingList from "./Ridinginfo";
const Riding = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="라이딩"
        data={[{ title: "운동정보" }, { title: "라이딩" }]}
      />
      <RidingList />
    </Fragment>
  );
};

export default Riding;
