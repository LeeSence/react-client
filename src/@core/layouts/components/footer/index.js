const Footer = () => {
  return (
    <div className="clearfix">
      <div className="d-inline">
        <a href="/" className="me-1">
          도움말
        </a>
        <a
          href="https://www.instagram.com"
          className="me-1 fw-bolder"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Instagram
        </a>
        <a
          href="http://www.youtube.com"
          className="me-1 fw-bolder"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Youtube
        </a>
        <a href="/" className="me-1">
          서비스
        </a>
        <a href="/tosInfo" className="me-1">
          이용약관
        </a>
        <a href="/privacyInfo" className="me-1">
          개인정보 처리방침
        </a>
      </div>
      <span className="float-md-end d-none d-md-block">
        <a
          href="/"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
          className="fw-bolder"
        >
          Metacycle
        </a>{" "}
        All Rights reserverd by TSUF Inc.
      </span>
    </div>
  );
};

export default Footer;
