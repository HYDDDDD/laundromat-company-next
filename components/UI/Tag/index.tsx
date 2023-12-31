import React from "react";

import clsx from "clsx";

import { TagProps } from "./types";

const Tag = ({ children, className, space, ...props }: TagProps) => {
  return (
    <div className={clsx([`tag`, space, className, { ...props }])}>
      {children}
    </div>
  );
};

export default Tag;
