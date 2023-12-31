import React from "react";

import Image from "next/image";

import WaitWashingPng from "@/public/wait-washing-png.png";

const WashAndWaitIcon = () => {
  return (
    <Image
      src={WaitWashingPng}
      alt="wait wash png icon"
      width={120}
      height={120}
    />
  );
};

export default WashAndWaitIcon;
