import { Fragment, useState, useEffect } from "react";

import axios from "axios";
import qs from "qs";

import { Card, CardBody } from "reactstrap";

import Breadcrumbs from "@components/breadcrumbs";

const TOSInfo = () => {
  const [tos, setTOS] = useState(null);
  const [updateDate, setUpdateDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "/api/infos/",
          qs.stringify({
            gubuns: "service",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTOS(response.data.results[0].infos);
        setUpdateDate(response.data.results[0].lastdates);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs title="이용약관" data={[{ title: "이용약관" }]} />
      <Card>
        <CardBody>
          <pre
            className="fs-5"
            style={{ backgroundColor: "#ffffff", whiteSpace: "pre-wrap" }}
          >
            {tos}
          </pre>
          <div className="text-muted text-end mb-1">
            <small>개정일자 : {updateDate}</small>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default TOSInfo;
