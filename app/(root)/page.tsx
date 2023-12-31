import React, { Fragment } from "react";

import clsx from "clsx";

import BannerSection from "@/components/Section/Banner";
import HowtoUseSection from "@/components/Section/HowtoUse";
import WashingMachineSection from "@/components/Section/WashingMachine";

const HomePage = () => {
  return (
    <Fragment>
      <div className={clsx([`space-y-20`])}>
        <BannerSection />
        <HowtoUseSection />
        <WashingMachineSection />
      </div>
    </Fragment>
  );
};

export default HomePage;
