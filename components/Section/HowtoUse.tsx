import React from "react";

import clsx from "clsx";

import NotificationIcon from "@/icons/Notification";
import PutCoinsIcon from "@/icons/PutCoins";
import SelectWashingMachineIcon from "@/icons/SelectWashingMachine";
import WashAndWaitIcon from "@/icons/WashAndWait";

import Card from "../UI/Card";

const HowtoUseSection = () => {
  // _MOCK
  const STEPPER = [
    {
      step: "STEP 1",
      label: "Select",
      picture: <SelectWashingMachineIcon />,
    },
    {
      step: "STEP 2",
      label: "Put Coins",
      picture: <PutCoinsIcon />,
    },
    {
      step: "STEP 3",
      label: "Wash & Wait",
      picture: <WashAndWaitIcon />,
    },
    {
      step: "STEP 4",
      label: "Notification",
      picture: <NotificationIcon />,
    },
  ];
  return (
    <section id="howToUse" className={clsx(`space-y-4 bg-sky-50 py-10 text-center`)}>
      <p className={clsx(`text-header-4 text-sky-300`)}>HOW TO USE</p>
      <p className={clsx(`text-header-3 text-slate-700`)}>
        Get it done in 4 steps
      </p>
      {/* 1.select machine free 2.put coins 3. */}
      <div
        className={clsx([`grid grid-cols-4 gap-16`, `lg:gap-5 sm:grid-cols-2`])}
      >
        {STEPPER.map((item, index) => {
          return (
            <Card
              key={index}
              variant="default"
              className={clsx(
                `flex flex-col items-center justify-center space-y-4 bg-white`,
              )}
            >
              <div>
                <p className={clsx(`text-sky-300`)}>{item.step}</p>
                <p className={clsx(`text-body-16`)}>{item.label}</p>
              </div>
              {item.picture}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default HowtoUseSection;
