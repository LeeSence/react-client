// ** Custom Components
import Timeline from "@components/timeline";

// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

// ** Timeline Data
import { iconsData } from "./data";

const IconsTimeline = () => {
  return <Timeline data={iconsData} />;
};

export default IconsTimeline;
