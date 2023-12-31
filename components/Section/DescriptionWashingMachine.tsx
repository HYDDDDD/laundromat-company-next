"use client";

import React, { Fragment, useState } from "react";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { USER } from "@/constant/constant";
import CoinIcon from "@/icons/Coin";
import CoinPng from "@/public/coin-png.png";
import WashingMachineColorPng from "@/public/washing-machine-color-png.png";
import { IWashingMachine } from "@/types/washing-machine-types";

import Button from "../UI/Button";
import Card from "../UI/Card";
import { PutCoins } from "./_action/UseCoins";

interface IDescriptionWashingMachineSectionProps {
  datas: IWashingMachine[];
}

const DescriptionWashingMachineSection = ({
  datas,
}: IDescriptionWashingMachineSectionProps) => {
  // _Path
  const pathName = usePathname();

  // _State
  const [myCoins, setMyCoins] = useState<number>(USER.myCoins);
  const [useCoins, setUseCoins] = useState<number>(0);

  return (
    <section>
      {datas
        .filter((machine) => {
          return pathName.includes(machine.id);
        })
        .map((data, index) => {
          return (
            <div
              key={index}
              className={clsx(
                `container`,
                `flex flex-col items-center justify-center space-y-10`,
              )}
            >
              <Image
                src={WashingMachineColorPng}
                alt="washing machine png icon"
                width={240}
                height={240}
              />

              <Card className={clsx(`space-y-5 bg-sky-50`)}>
                <p className={clsx(`text-body-18`)}>เครื่องที่ {data.name}</p>

                <div className={clsx(`flex items-center space-x-5`)}>
                  <p>ความจุ {data.weight} kg</p>

                  <div className={clsx(`flex items-center space-x-2`)}>
                    <Image
                      src={CoinPng}
                      alt="coin png icon"
                      width={25}
                      height={25}
                    />
                    <p>{data.coins.join(" , ")}</p>
                  </div>
                </div>

                <div
                  className={clsx(`flex items-center space-x-2 text-body-18`)}
                >
                  <p>ใช้ {data.used} coins</p>
                  <p
                    className={clsx(
                      useCoins === data.used
                        ? `text-success-500`
                        : `text-red-500`,
                    )}
                  >
                    ต้องการอีก {data.used - useCoins} coins
                  </p>
                </div>

                <div
                  className={clsx(
                    `flex flex-col items-center justify-center space-y-4`,
                  )}
                >
                  <p>
                    Coins ของฉัน{" "}
                    <span className={clsx(`text-body-16`)}>{myCoins}</span>{" "}
                    coins
                  </p>
                  <div className={clsx(`flex items-center space-x-2`)}>
                    {data.used !== useCoins ? (
                      <Fragment>
                        {data.coins.includes(5) &&
                          data.used - useCoins >= 5 && (
                            <Button
                              variant="none"
                              onClick={() =>
                                PutCoins(5, setUseCoins, setMyCoins)
                              }
                            >
                              <CoinIcon
                                text="5"
                                className={clsx(`hover:bg-red-500`)}
                              />
                            </Button>
                          )}
                        {data.coins.includes(10) &&
                          data.used - useCoins >= 10 && (
                            <Button
                              variant="none"
                              onClick={() =>
                                PutCoins(10, setUseCoins, setMyCoins)
                              }
                            >
                              <CoinIcon
                                text="10"
                                className={clsx(`hover:bg-red-500`)}
                              />
                            </Button>
                          )}
                      </Fragment>
                    ) : (
                      <Button variant="primary" className={clsx(`w-full`)}>
                        Wash !
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
    </section>
  );
};

export default DescriptionWashingMachineSection;
