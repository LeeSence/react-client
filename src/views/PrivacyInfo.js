import { Fragment, useState, useEffect } from "react";

import axios from "axios";
import qs from "qs";

import { Card, CardBody } from "reactstrap";

import Breadcrumbs from "@components/breadcrumbs";

const PrivacyInfo = () => {
  const [privacy, setPrivacy] = useState(null);
  const [updateDate, setUpdateDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios({
        //   method: "POST",
        //   url: "/api/infos/",
        //   data: qs.stringify({ gubuns: "privacy" }),
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        //   },
        // });
        const response = await axios.post(
          "/api/infos/",
          qs.stringify({
            gubuns: "privacy",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setPrivacy(response.data.results[0].infos);
        setUpdateDate(response.data.results[0].lastdates);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="개인정보 처리방침"
        data={[{ title: "개인정보 처리방침" }]}
      />
      <Card>
        <CardBody>
          <pre
            className="fs-5"
            style={{ backgroundColor: "#ffffff", whiteSpace: "pre-wrap" }}
          >
            {privacy}
          </pre>
          <div className="text-muted text-end mb-1">
            <small>개정일자 : {updateDate}</small>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default PrivacyInfo;
