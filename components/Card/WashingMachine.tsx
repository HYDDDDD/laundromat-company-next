import React, { Fragment } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import WashingMachinePng from "@/public/washing-machine-icon.png";
import { IWashingMachine } from "@/types/washing-machine-types";

import Card from "../UI/Card";

const WashingMachineCard = ({
  id,
  name,
  status,
  weight,
  used,
  coins,
}: IWashingMachine) => {
  return (
    <Fragment>
      {status === "ว่าง" ? (
        <Link href={`/washing-machine/${id}`}>
          <Card
            variant="primary"
            className={clsx([
              `flex items-center space-x-2`,
              { [`success`]: status === "ว่าง" },
            ])}
          >
            <Image
              src={WashingMachinePng}
              alt="washing machine png icon"
              width={120}
              height={120}
              className={clsx([`lg:h-16 lg:w-16`])}
              priority
            />
            <div className={clsx(`flex w-full flex-col justify-center`)}>
              <div className={clsx([`flex items-center justify-between`])}>
                <p className={clsx(`text-body-16 text-blue-500`)}>
                  Machine no. {name}
                </p>
                <p
                  className={clsx(`text-body-16`, {
                    [`text-success-500`]: status === "ว่าง",
                  })}
                >
                  {status}
                </p>
              </div>

              <p>
                Weight <span className={clsx(`text-body-16`)}>{weight}</span> kg
              </p>
              <p>
                Use <span className={clsx(`text-body-16`)}>{used}</span> coins{" "}
              </p>
              <p>
                This machine can use coins{" "}
                <span className={clsx(`text-body-16`)}>
                  {coins.join(" , ")}
                </span>
              </p>
            </div>
          </Card>
        </Link>
      ) : (
        <Card
          variant="primary"
          className={clsx([
            `flex items-center space-x-2`,
            { [`danger`]: status === "ไม่ว่าง" },
            { [`warn`]: status === "เครื่องมีปัญหา" },
          ])}
        >
          <Image
            src={WashingMachinePng}
            alt="washing machine png icon"
            width={120}
            height={120}
            className={clsx([`lg:h-16 lg:w-16`])}
          />
          <div className={clsx(`flex w-full flex-col justify-center`)}>
            <div className={clsx([`flex items-center justify-between`])}>
              <p className={clsx(`text-body-16 text-blue-500`)}>
                Machine no. {name}
              </p>
              <p
                className={clsx(
                  `text-body-16`,
                  { [`text-red-500`]: status === "ไม่ว่าง" },
                  { [`text-warn-500`]: status === "เครื่องมีปัญหา" },
                )}
              >
                {status}
              </p>
            </div>
            <p>
              Weight <span className={clsx(`text-body-16`)}>{weight}</span> kg
            </p>
            <p>
              Use<span className={clsx(`text-body-16`)}>{used}</span> coins{" "}
            </p>

            <p>
              This machine can use coins{" "}
              <span className={clsx(`text-body-16`)}>{coins.join(" , ")}</span>
            </p>
          </div>
        </Card>
      )}
    </Fragment>
  );
};

export default WashingMachineCard;
