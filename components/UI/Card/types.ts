import { HTMLAttributes } from "react";

export type CardVariant = "default" | "primary" | "success" | "warn" | "danger";

export type CardRounder =
  | "default"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export type Card = HTMLAttributes<HTMLDivElement>;

export type CardProps = Card & {
  variant?: CardVariant;
  rounder?: CardRounder;
};
