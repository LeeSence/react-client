// ** Reactstrap Imports
import { Fragment, useState } from "react";

// ** Demo Components
import Faqs from "./Faqs";
import FaqFilter from "./FaqFilter";
import FaqContact from "./FaqContact";

// ** Custom Component
import Breadcrumbs from "@components/breadcrumbs";

// ** Styles
import "@styles/base/pages/page-faq.scss";

const Faq = () => {
  // ** States
  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState("");

  return (
    <Fragment>
      <Breadcrumbs title="FAQ" data={[{ title: "Pages" }, { title: "FAQ" }]} />
      <FaqFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {data !== null ? (
        <Faqs
          data={data}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      ) : null}
      <FaqContact />
    </Fragment>
  );
};

export default Faq;
