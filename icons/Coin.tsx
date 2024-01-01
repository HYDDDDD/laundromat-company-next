import React, { HTMLAttributes } from "react";

import clsx from "clsx";
import Image from "next/image";

import CoinPng from "@/public/coin-png.png";

interface ICoinIconProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const CoinIcon = ({ text, className, ...props }: ICoinIconProps) => {
  return (
    <div
      className={clsx(
        [`relative flex items-center justify-center`, `rounded-full`],
        className,
        { ...props },
      )}
    >
      <Image
        src={CoinPng}
        alt="coin png icon"
        width={96}
        height={96}
        priority
      />
      <p className={clsx(`absolute text-body-20`)}>{text}</p>
    </div>
  );
};

export default CoinIcon;
