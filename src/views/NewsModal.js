// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import {
  Card,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback,
} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
];

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "dutch", label: "Dutch" },
];

const defaultValues = {
  firstName: "관리자",
  dayCreate: "2023.03.22",
  title: "메타씨클 베타테스트1111",
  contents: "공지수정모달111",
};

const EditNews = () => {
  // ** States
  const [show, setShow] = useState(false);

  // ** Hooks
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
      <Button color="primary" onClick={() => setShow(true)}>
        신규 등록
      </Button>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 mx-50 pb-5">
          <div className="text-center mb-2">
            <h1 className="mb-1">공지사항 등록하기</h1>
            <p>새 공지사항을 등록하세요.</p>
          </div>
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="firstName">
                작성자
              </Label>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="firstName"
                      placeholder="관리자"
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  );
                }}
              />
              {errors.firstName && (
                <FormFeedback>작성자를 입력하세요.</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="dayCreate">
                작성일
              </Label>
              <Controller
                name="dayCreate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="dayCreate"
                    placeholder="2023.03.21"
                    invalid={errors.dayCreate && true}
                  />
                )}
              />
              {errors.dayCreate && (
                <FormFeedback>작성일을 입력하세요.</FormFeedback>
              )}
            </Col>
            <Col xs={12}>
              <Label className="form-label" for="title">
                제목
              </Label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="title"
                    placeholder="메타시클 베타테스트 1111"
                    invalid={errors.title && true}
                  />
                )}
              />
              {errors.title && <FormFeedback>제목을 입력하세요.</FormFeedback>}
            </Col>
            <Col>
              <Label className="form-label" for="content">
                내용
              </Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                rows="6"
                placeholder="메타시클 베타테스트 중 입니다 1111.메타시클 베타테스트 중 입니다 1111.메타시클 베타테스트 중 입니다 1111.메타시클 베타테스트 중 입니다 1111."
              />
            </Col>
            <Col xs={12}>
              <div className="d-flex align-items-center">
                <div className="form-switch">
                  <Input
                    type="switch"
                    defaultChecked
                    id="billing-switch"
                    name="billing-switch"
                  />
                  <Label className="form-check-label" htmlFor="billing-switch">
                    <span className="switch-icon-left">
                      <Check size={14} />
                    </span>
                    <span className="switch-icon-right">
                      <X size={14} />
                    </span>
                  </Label>
                </div>
                <Label
                  className="form-check-label fw-bolder"
                  htmlFor="billing-switch"
                >
                  작성자 항목을 그대로 유지하기
                </Label>
              </div>
            </Col>
            <Col xs={12} className="text-center mt-2 pt-50">
              <Button type="submit" className="me-1" color="primary">
                등록
              </Button>
              <Button
                type="reset"
                color="secondary"
                outline
                onClick={() => setShow(false)}
              >
                취소
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default EditNews;
