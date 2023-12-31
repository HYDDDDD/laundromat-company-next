import React from "react";

import clsx from "clsx";

import { IWashingMachine } from "@/types/washing-machine-types";

import WashingMachineCard from "../Card/WashingMachine";

const WashingMachineSection = () => {
  // _MOCK
  const WASHING_MACHINE_DATA: IWashingMachine[] = [
    { name: "01", status: "ว่าง", weight: 10, used: 20, coins: ["10"] },
    { name: "02", status: "ไม่ว่าง", weight: 15, used: 30, coins: ["5", "10"] },
    {
      name: "03",
      status: "เครื่องมีปัญหา",
      weight: 20,
      used: 20,
      coins: ["5", "10"],
    },
    { name: "04", status: "ไม่ว่าง", weight: 20, used: 40, coins: ["5", "10"] },
    { name: "05", status: "ว่าง", weight: 10, used: 20, coins: ["5", "10"] },
    { name: "06", status: "ว่าง", weight: 20, used: 40, coins: ["5", "10"] },
  ];

  return (
    <section>
      <div className={clsx([`container`, `space-y-4`])}>
        <p className={clsx(`text-center text-header-4 text-sky-300`)}>
          WASHING MACHINE
        </p>
        <div className={clsx([`grid grid-cols-3 gap-5`, `lg:grid-cols-1`])}>
          {WASHING_MACHINE_DATA.map((washingMachine) => {
            return (
              <WashingMachineCard
                key={washingMachine.name}
                name={washingMachine.name}
                status={washingMachine.status}
                weight={washingMachine.weight}
                used={washingMachine.used}
                coins={washingMachine.coins}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WashingMachineSection;
