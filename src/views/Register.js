// ** React Imports
import { Link } from "react-router-dom";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

import image from "../assets/images/logo/logo.png";

const RegisterBasic = () => {
  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <img src={image} width="300px"></img>
            </Link>

            <CardTitle tag="h4" className="mb-1">
              <h4 className="fw-bolder brand-text ms-0">새로운 계정 등록</h4>
            </CardTitle>

            <CardText>
              <small>
                자신에게 맞는 실내 자전거를 설정하고 피트니스 목표를 달성하세요!
              </small>
            </CardText>

            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-firstname">
                  이름
                </Label>
                <Input
                  type="text"
                  id="register-firstname"
                  placeholder="홍길동"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  이메일
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="um0904@example.com"
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  비밀번호
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password"
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password2">
                  비밀번호확인
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password2"
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-phNumber">
                  전화번호
                </Label>
                <Input
                  type="phNumber"
                  id="register-phNumber"
                  placeholder="010 1234 5678"
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  별명
                </Label>
                <Input
                  type="text"
                  id="register-username"
                  placeholder="콩난"
                  autoFocus
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="terms" />
                <Label className="form-check-label" for="terms">
                  <a
                    className="ms-25"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    개인 정보 보호 정책 및 약관
                  </a>
                  에 동의합니다.
                </Label>
              </div>
              <Button color="primary" block>
                등록하기
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">기존 계정이 있나요?</span>
              <Link to="/login">
                <span>로그인 하러가기</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">소셜계정으로 로그인하기</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RegisterBasic;
