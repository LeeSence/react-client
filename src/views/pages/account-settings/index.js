// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from "reactstrap";

// ** Demo Components
import Tabs from "./Tabs";
import Breadcrumbs from "@components/breadcrumbs";
import AccountTabContent from "./AccountTabContent";
import SecurityTab from "./SecurityTab";
import ConnectionsTabContent from "@src/views/ui-elements/cards/connection/ConnectionsTabContent";
import NotificationsTab from "./NotificationsTab";

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/pages/page-account-settings.scss";

const AccountSettings = () => {
  // ** States
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="계정 설정"
        data={[{ title: "사용자 설정" }, { title: "계정 설정" }]}
      />
      <Row>
        <Col xs={12}>
          <Tabs className="mb-2" activeTab={activeTab} toggleTab={toggleTab} />

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <AccountTabContent />
            </TabPane>
            <TabPane tabId="2">
              <SecurityTab />
            </TabPane>
            <TabPane tabId="4">
              <NotificationsTab />
            </TabPane>
            <TabPane tabId="5">
              <ConnectionsTabContent />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AccountSettings;
