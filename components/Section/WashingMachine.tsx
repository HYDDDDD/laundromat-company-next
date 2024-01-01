import React from "react";

import clsx from "clsx";

import { WASHING_MACHINE_DATA } from "@/constant/constant";

import WashingMachineCard from "../Card/WashingMachine";

const WashingMachineSection = () => {
  return (
    <section id="washing">
      <div className={clsx([`container`, `space-y-4`])}>
        <p className={clsx(`text-center text-header-4 text-sky-300`)}>
          WASHING MACHINE
        </p>
        <div className={clsx([`grid grid-cols-3 gap-5`, `lg:grid-cols-1`])}>
          {WASHING_MACHINE_DATA.map((washingMachine) => {
            return (
              <WashingMachineCard
                key={washingMachine.name}
                id={washingMachine.id}
                name={washingMachine.name}
                status={washingMachine.status}
                weight={washingMachine.weight}
                used={washingMachine.used}
                coins={washingMachine.coins}
                timer={washingMachine.timer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WashingMachineSection;
