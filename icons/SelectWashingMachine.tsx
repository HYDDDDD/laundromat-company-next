import React from "react";

import clsx from "clsx";
import Image from "next/image";

import TapPng from "@/public/tap-png.png";
import WashingMachineColorPng from "@/public/washing-machine-color-png.png";

const SelectWashingMachineIcon = () => {
  return (
    <div className={clsx(`flex flex-col items-center justify-center`)}>
      <Image
        src={WashingMachineColorPng}
        alt="tap png icon"
        width={120}
        height={120}
      />
      <div className={clsx(`flex items-end justify-end`)}>
        <Image src={TapPng} alt="tap png icon" width={45} height={45} />
      </div>
    </div>
  );
};

export default SelectWashingMachineIcon;
