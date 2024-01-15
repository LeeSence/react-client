// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

import Course1 from "@src/views/forms/wizard/steps/Course1";
import Course2 from "@src/views/forms/wizard/steps/Course2";
import Course3 from "@src/views/forms/wizard/steps/Course3";
import Course4 from "@src/views/forms/wizard/steps/Course4";

// ** Icons Imports
import { MapPin } from "react-feather";

const WizardModern = () => {
  // ** Ref
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const steps = [
    {
      id: "Course1",
      title: "A코스",
      subtitle: "02:25:34",
      icon: <MapPin size={18} />,
      content: <Course1 stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "personal-info",
      title: "B코스",
      subtitle: "03:50:45",
      icon: <MapPin size={18} />,
      content: <Course2 stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "step-address",
      title: "C코스",
      subtitle: "03:30:15",
      icon: <MapPin size={18} />,
      content: <Course3 stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "social-links",
      title: "D코스",
      subtitle: "05:25:30",
      icon: <MapPin size={18} />,
      content: <Course4 stepper={stepper} type="wizard-modern" />,
    },
  ];

  return (
    <div className="modern-horizontal-wizard">
      <Wizard
        type="modern-horizontal"
        ref={ref}
        steps={steps}
        options={{
          linear: false,
        }}
        instance={(el) => setStepper(el)}
      />
    </div>
  );
};

export default WizardModern;
