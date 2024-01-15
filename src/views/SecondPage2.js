import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import React, { useState, useEffect } from "react";

const SecondPage2 = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //   // count 업데이트시 실행됨
  //   useEffect(() => {
  //     console.log("카운트ㅇㅇ");
  //   }, [count]);

  //   //name변경시 실행됨
  //   useEffect(() => {
  //     console.log("name변경 ㅇㅇ");
  //   }, [name]);

  //   // 렌더링 될때마다 매번 실행됨
  //   useEffect(() => {
  //     console.log("렌더링체크 ㅇㅇ");
  //   });
  useEffect(() => {
    console.log("마운팅ㅇㅇ");
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <button onClick={handleCountUpdate}>업데이트</button>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>count: {count}</CardText>
          <input type="text" value={name} onChange={handleInputChange} />
          <span>name: {name}</span>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and
            with minimum efforts.
          </CardText>
          <CardText>
            Please read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/auth"
              target="_blank"
            >
              JWT Documentation
            </CardLink>{" "}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default SecondPage2;
