import React from "react";

import clsx from "clsx";
import Image from "next/image";

import WashingMachineColorPng from "@/public/washing-machine-color-png.png";
import WashingMachinePng from "@/public/washing-machine-png.png";

import Button from "../UI/Button";
import Tag from "../UI/Tag";

const BannerSection = () => {
  return (
    <section>
      <div
        className={clsx([
          `container`,
          `flex items-center justify-between`,
          `sm:flex-col-reverse sm:gap-10`,
        ])}
        id="home"
      >
        <div className="space-y-8">
          <Tag space="sm">20% Discount for 1 Month Subscription</Tag>
          <p
            className={clsx([`text-header-2 text-slate-700`, `text-header-3`])}
          >
            Laundry today or {<br />} Naked tomorrow.
          </p>
          <p>
            laundry service will wash your laundry at an affordable price.
            {<br />}
            Pickup and drop-off options available!
          </p>

          <Button
            variant="second"
            rounder="full"
            className={clsx([`w-96 shadow-blue-300`, `lg:w-full`])}
          >
            <span> How to use</span>
          </Button>
          <div
            className={clsx([
              `flex items-center space-x-10`,
              `lg:justify-between lg:space-x-0`,
            ])}
          >
            <div className={clsx([`flex items-center space-x-2`])}>
              <p className={clsx([`text-header-3`])}>18m+ </p>
              <span className={clsx([`text-sky-300`])}>
                Happy {<br />} Customers
              </span>
            </div>
            <div className={clsx([`flex items-center space-x-2`])}>
              <p className={clsx([`text-header-3`])}>10+ </p>
              <span className={clsx([`text-sky-300`])}>
                Years of {<br />} Experience
              </span>
            </div>
          </div>
        </div>
        <div className={clsx([``])}>
          <Image
            src={WashingMachineColorPng}
            alt="washing machine png"
            width={280}
            height={280}
            className={clsx(`relative z-20 lg:h-44 lg:w-44`)}
          />

          <div
            className={clsx([
              `absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-200`,
              `lg:h-44 lg:w-44`,
            ])}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
