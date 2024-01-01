"use client";

import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
import { handleAddMyWashingMachine } from "./_action/AddMyWashingMachine";
import { handleWashingMachineTimer } from "./_action/Timer";
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
  const [myWashing, setMyWashing] = useState<string[]>([]);
  const [timer, setTimer] = useState<string>("");
  const [timeOut, setTimeOut] = useState<boolean>(false);
  const [timeSoon, setTimeSoon] = useState<boolean>(false);
  const [useCoins, setUseCoins] = useState<number>(0);

  // _Notify
  const notify = () =>
    toast.success("Success !", {
      position: toast.POSITION.TOP_RIGHT,
    });

  // _Effect
  useEffect(() => {
    if (timeOut) {
      toast.success("The washing machine is finished !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [timeOut]);

  useEffect(() => {
    if (timeSoon) {
      toast.warn("The washing machine will be finished soon. !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [timeSoon]);

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
                priority
              />

              <Card className={clsx(`space-y-5 bg-sky-50`)}>
                <p className={clsx(`text-body-18`)}>
                  Machine number {data.name}
                </p>

                <div className={clsx(`flex items-center space-x-5`)}>
                  <p>Weight {data.weight} kg</p>

                  <div className={clsx(`flex items-center space-x-2`)}>
                    <Image
                      src={CoinPng}
                      alt="coin png icon"
                      width={25}
                      height={25}
                      priority
                    />
                    <p>{data.coins.join(" , ")}</p>
                  </div>
                </div>

                <div
                  className={clsx(`flex items-center space-x-2 text-body-18`)}
                >
                  <p>Use {data.used} coins</p>
                  {myCoins >= data.used - useCoins ? (
                    <p
                      className={clsx(
                        useCoins === data.used
                          ? `text-success-500`
                          : `text-red-500`,
                      )}
                    >
                      want {data.used - useCoins} coins
                    </p>
                  ) : (
                    <p className={clsx(`text-red-500`)}>Not enough coins.</p>
                  )}
                </div>

                <div
                  className={clsx(
                    `flex flex-col items-center justify-center space-y-4`,
                  )}
                >
                  <p>
                    My coins{" "}
                    <span className={clsx(`text-body-16`)}>{myCoins}</span>{" "}
                    coins
                  </p>
                  {myCoins >= data.used - useCoins && (
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
                        <Fragment>
                          {!myWashing.includes(data.id) && (
                            <Button
                              variant="primary"
                              className={clsx(`w-full`)}
                              onClick={() => {
                                handleWashingMachineTimer(
                                  data.timer,
                                  setTimer,
                                  setTimeOut,
                                  setTimeSoon,
                                );
                                handleAddMyWashingMachine(
                                  data.id,
                                  setMyWashing,
                                );
                                notify();
                              }}
                            >
                              Wash !
                            </Button>
                          )}
                        </Fragment>
                      )}
                    </div>
                  )}
                  {timeOut ? (
                    <p className={clsx(`text-header-4 text-success-500`)}>
                      The washing machine is finished.
                    </p>
                  ) : (
                    <p>{timer}</p>
                  )}
                </div>
              </Card>
            </div>
          );
        })}
      <ToastContainer />
    </section>
  );
};

export default DescriptionWashingMachineSection;
