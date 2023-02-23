import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import PageAnimation from "../components/UI/PageAnimation/PageAnimation";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageAnimation>
      <Helmet title="Contact">
        <CommonSection title="Contact" />
      </Helmet>
    </PageAnimation>
  );
};

export default Contact;
