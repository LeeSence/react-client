import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

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
  FormFeedback,
  UncontrolledTooltip,
} from "reactstrap";

import image from "../assets/images/logo/logo.png";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ids: "",
    passwd: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // 유효성 검증
    if (e.target.name === "ids" && e.target.value === "") {
      setErrors({
        ...errors,
        ids: "아이디를 입력해주세요.",
      });
    } else {
      setErrors({
        ...errors,
        ids: null,
      });
    }
    if (e.target.name === "passwd" && e.target.value === "") {
      setErrors({
        ...errors,
        passwd: "비밀번호를 입력해주세요.",
      });
    } else {
      setErrors({
        ...errors,
        passwd: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const subs = uuidv4(); // 임의의 uuid 생성
    const subs = "118413609210214538557"; //고정된 uuid로 로그인(테스트용)

    try {
      const response = await axios.post(
        "/api/signin/",
        {
          ids: formData.ids,
          passwd: formData.passwd,
          subs: subs, // 생성한 uuid를 subs 값으로 함께 전달
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.result_code === 1) {
        console.log(response.data.results);
        dispatch(setUserInfo({ ids: formData.ids, subs: subs })); // 액션 디스패치

        // 세션 스토리지에 사용자 정보 저장
        const memberRes = await axios.post(
          "/api/member/",
          {
            ids: formData.ids,
            subs: subs,
            method: "INFO",
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (memberRes.data.result_code === 1) {
          sessionStorage.setItem(
            "user",
            JSON.stringify(memberRes.data.results)
          );
          navigate("/dashboard"); //로그인 성공 시 /dashboard로 이동
        } else {
          console.log(memberRes.data.results);
          alert("로그인 실패");
        }
      } else {
        console.log(response.data.results);
        alert(response.data.results);
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response.status === 400) {
          // 잘못된 입력값 에러 처리
          setErrorMsg("아이디 또는 비밀번호를 다시 확인해주세요.");
        } else {
          // 기타 에러 처리
          setErrorMsg("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
    }
  };

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
              <h1 className="brand-text text-primary ms-1">
                <img src={image} width="300px" alt="logo" />
              </h1>
            </Link>
            <Form className="auth-login-form mt-2" onSubmit={handleSubmit}>
              <div className="mb-1">
                <Label className="form-label" for="ids">
                  아이디
                </Label>
                <Input
                  autoFocus
                  type="text"
                  name="ids"
                  placeholder="아이디를 입력해주세요."
                  value={formData.ids}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="passwd">
                  비밀번호
                </Label>
                <Input
                  type="password"
                  name="passwd"
                  placeholder="비밀번호를 입력해주세요."
                  value={formData.passwd}
                  onChange={handleChange}
                  required
                />
                {errorMsg && <div className="form-feedback">{errorMsg}</div>}
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  로그인정보 기억하기
                </Label>
              </div>
              <Button type="submit" color="primary" block>
                로그인
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">아직 회원이 아니신가요?</span>
              <Link to="/register">
                <span>새 계정 만들기</span>
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
}

export default Login;
