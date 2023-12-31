import React from "react";

import clsx from "clsx";

import { CardProps } from "./types";

const Card = ({
  className,
  children,
  rounder,
  variant,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(`card`, [`card-rounder-${rounder}`], variant, className, {
        ...props,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
