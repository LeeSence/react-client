// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
} from "reactstrap";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Demo Components
import DeleteAccount from "./DeleteAccount";

import avatar3 from "@src/assets/images/avatars/3-small.png";
import avatar11 from "@src/assets/images/portrait/small/avatar-s-11.jpg";

const AccountTabs = ({ data }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }
  const nickname = user[0].nicknames;
  const ids = user[0].ids;
  const name = user[0].names;
  const sexs = user[0].sexs;
  const weights = user[0].weights;
  const ages = user[0].ages;

  // ** Hooks
  const defaultValues = {
    firstName: "",
    userName: "",
    emailInput: "",
    company: "",
    phNumber: "",
    address: "",
    accountState: "",
    zipCode: "",
  };

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h3">사용자 상세정보</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <div className="d-flex">
            <div className="me-25">
              <img
                className="rounded me-50"
                src="/src/assets/images/portrait/small/avatar-s-11.jpg"
                alt="Generic placeholder image"
                height="100"
                width="100"
              />
            </div>
            <div className="d-flex align-items-end mt-75 ms-1">
              <div>
                <Button
                  tag={Label}
                  className="mb-75 me-75"
                  size="sm"
                  color="primary"
                >
                  업로드
                  <Input
                    type="file"
                    // onChange={onChange}
                    hidden
                    accept="image/*"
                  />
                </Button>
                <Button
                  className="mb-75"
                  color="secondary"
                  size="sm"
                  outline
                  // onClick={handleImgReset}
                >
                  초기화
                </Button>
                <p className="mb-0">
                  파일형식 JPG, GIF, PNG (파일 크기 최대 800kB 제한)
                </p>
              </div>
            </div>
          </div>
          <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="trueName">
                  이름
                </Label>
                <Input
                  id="firstName"
                  placeholder="이름을 입력하세요"
                  defaultValue={name}
                />
                {errors.firstName && (
                  <FormFeedback className="d-block">
                    이름은 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="userName">
                  별명
                </Label>
                <Input
                  id="userName"
                  placeholder="별명을 입력하세요."
                  defaultValue={nickname}
                />
                {errors.userName && (
                  <FormFeedback className="d-block">
                    별명은 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="2" className="mb-1">
                <Label className="form-label" for="ages">
                  나이
                </Label>
                <Input
                  id="ages"
                  placeholder="나이를 입력하세요."
                  defaultValue={ages}
                />
                {errors.age && (
                  <FormFeedback className="d-block">
                    나이는 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="2" className="mb-1">
                <Label className="form-label" for="sexs">
                  성별
                </Label>
                <Input
                  id="sexs"
                  placeholder="성별을 입력하세요."
                  defaultValue={sexs}
                />
                {errors.userName && (
                  <FormFeedback className="d-block">
                    성별은 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="2" className="mb-1">
                <Label className="form-label" for="weights">
                  몸무게
                </Label>
                <Input
                  defaultValue="60"
                  id="weights"
                  name="weights"
                  placeholder={weights}
                />
                {errors.company && (
                  <FormFeedback className="d-block">
                    회사는 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="emailInput">
                  이메일
                </Label>
                <Input
                  id="emailInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={ids}
                />
                {errors.emailInput && (
                  <FormFeedback className="d-block">
                    이메일은 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="phNumber">
                  전화번호
                </Label>
                <Input
                  id="phNumber"
                  name="phNumber"
                  className="form-control"
                  placeholder="전화번호를 입력하세요."
                  defaultValue="010 1234 5678"
                />
                {errors.phNumber && (
                  <FormFeedback className="d-block">
                    전화번호는 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="address">
                  주소
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="주소를 입력하세요."
                  defaultValue="광주광역시 북구 용봉로 77"
                />
                {errors.address && (
                  <FormFeedback className="d-block">
                    주소는 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="accountState">
                  지역
                </Label>
                <Input
                  id="accountState"
                  name="state"
                  placeholder="지역을 입력하세요."
                  defaultValue="대한민국"
                />
                {errors.accountState && (
                  <FormFeedback className="d-block">
                    지역은 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="zipCode">
                  코드
                </Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  placeholder="123456"
                  maxLength="6"
                />
              </Col>
              <Col className="mt-2" sm="12">
                <Button type="submit" className="me-1" color="primary">
                  저장
                </Button>
                <Button color="secondary" outline>
                  취소
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <DeleteAccount />
    </Fragment>
  );
};

export default AccountTabs;
