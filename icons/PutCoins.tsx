import React from "react";

import Image from "next/image";

import InsetCoins from "@/public/insert-coin-png.png";

const PutCoinsIcon = () => {
  return <Image src={InsetCoins} alt="put coins png icon" width={120} height={120} />;
};

export default PutCoinsIcon;
