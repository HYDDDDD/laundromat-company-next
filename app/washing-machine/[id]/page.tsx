import React from "react";

import DescriptionWashingMachineSection from "@/components/Section/DescriptionWashingMachine";
import { WASHING_MACHINE_DATA } from "@/constant/constant";

const WashingMachinePage = () => {
  return (
    <div>
      <DescriptionWashingMachineSection datas={WASHING_MACHINE_DATA} />
    </div>
  );
};

export default WashingMachinePage;
