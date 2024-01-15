// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
} from "reactstrap";

// ** Third Party Components
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Demo Components
import RecentDevices from "./RecentDevices";

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

const defaultValues = {
  newPassword: "",
  currentPassword: "",
  retypeNewPassword: "",
};

const SecurityTabContent = () => {
  const SignupSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, (obj) =>
        showErrors("Current Password", obj.value.length, obj.min)
      )
      .required(),
    newPassword: yup
      .string()
      .min(8, (obj) => showErrors("New Password", obj.value.length, obj.min))
      .required(),
    retypeNewPassword: yup
      .string()
      .min(8, (obj) =>
        showErrors("Retype New Password", obj.value.length, obj.min)
      )
      .required()
      .oneOf([yup.ref(`newPassword`), null], "Passwords must match"),
  });
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });

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
          <CardTitle tag="h4">비밀번호 변경</CardTitle>
        </CardHeader>
        <CardBody className="pt-1">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1">
                <Controller
                  control={control}
                  id="currentPassword"
                  name="currentPassword"
                  render={({ field }) => (
                    <InputPasswordToggle
                      label="현재 비밀번호"
                      htmlFor="currentPassword"
                      className="input-group-merge"
                      invalid={errors.currentPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.currentPassword && (
                  <FormFeedback className="d-block">
                    현재 비밀번호는 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="mb-1">
                <Controller
                  control={control}
                  id="newPassword"
                  name="newPassword"
                  render={({ field }) => (
                    <InputPasswordToggle
                      label="새로운 비밀번호"
                      htmlFor="newPassword"
                      className="input-group-merge"
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.newPassword && (
                  <FormFeedback className="d-block">
                    새로운 비밀번호는 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Controller
                  control={control}
                  id="retypeNewPassword"
                  name="retypeNewPassword"
                  render={({ field }) => (
                    <InputPasswordToggle
                      label="새로운 비밀번호 확인"
                      htmlFor="retypeNewPassword"
                      className="input-group-merge"
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.retypeNewPassword && (
                  <FormFeedback className="d-block">
                    새로운 비밀번호 확인은 필수 입력사항입니다.
                  </FormFeedback>
                )}
              </Col>
              <Col xs={12}>
                <p className="fw-bolder">비밀번호 필수조건:</p>
                <ul className="ps-1 ms-25">
                  <li className="mb-50">
                    최소 8글자 이상, 글자가 많을수록 보안에 좋습니다.
                  </li>
                  <li className="mb-50">At least one lowercase character</li>
                  <li>
                    최소 하나 이상의 숫자, 특수문자, 대문자를 포함해야 합니다.
                  </li>
                </ul>
              </Col>
              <Col className="mt-1" sm="12">
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
      <RecentDevices />
    </Fragment>
  );
};

export default SecurityTabContent;
