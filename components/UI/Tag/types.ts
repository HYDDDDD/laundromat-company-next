import { HTMLAttributes } from "react";

export type TagSpace = "default" | "sm" | "md" | "lg";

export type TagProps = HTMLAttributes<HTMLDivElement> & {
  space?: TagSpace;
};
