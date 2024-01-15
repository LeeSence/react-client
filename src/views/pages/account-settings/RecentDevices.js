// ** Reactstrap Imports\
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";

// ** Chrome Logo
import chromeLogo from "@src/assets/images/icons/google-chrome.png";

const recentDevicesArr = [
  {
    device: "Dell XPS 15",
    location: "대한민국 광주시",
    browser: "Chrome on Windows",
    activity: "10, Jan 2022 20:07",
  },
  {
    location: "대한민국 광주시",
    device: "Google Pixel 3a",
    browser: "Chrome on Android",
    activity: "11, Jan 2022 10:16",
  },
  {
    location: "미국",
    device: "Apple iMac",
    browser: "Chrome on MacOS",
    activity: "11, Jan 2022 12:10",
  },
  {
    location: "대한민국 서울",
    device: "Apple iPhone XR",
    browser: "Chrome on iPhone",
    activity: "12, Jan 2022 8:29",
  },
];

const RecentDevices = () => {
  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">최근 접속 기기</CardTitle>
      </CardHeader>
      <CardBody className="my-2 py-25">
        <Table className="text-nowrap text-center" responsive bordered>
          <thead>
            <tr>
              <th className="text-start">접속 브라우저</th>
              <th>기기</th>
              <th>지역</th>
              <th>마지막 접속일</th>
            </tr>
          </thead>
          <tbody>
            {recentDevicesArr.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-start">
                    <img
                      className="me-25"
                      src={chromeLogo}
                      alt={item.device}
                      width="20"
                      height="20"
                    />
                    <span className="fw-bolder">{item.browser}</span>
                  </td>
                  <td>{item.device}</td>
                  <td>{item.location}</td>
                  <td>{item.activity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default RecentDevices;
