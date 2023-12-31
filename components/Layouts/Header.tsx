"use client";

import { Fragment, useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowDown from "@/public/arrow-down-png.png";
import BubblePng from "@/public/bubble.png";
import MenuPng from "@/public/menu-png.png";

import Button from "../UI/Button";

const Header = () => {
  // _Path
  const pathName = usePathname();

  // _State
  const [visibleNavbarMobile, setVisibleNavbarMobile] =
    useState<boolean>(false);

  return (
    <Fragment>
      <header
        className={clsx(
          `main-space-x py-4`,
          `fixed top-0 z-50 w-full bg-white`,
        )}
      >
        <div className={clsx(`container flex items-center justify-between`)}>
          <div className={clsx(`flex items-center justify-center space-x-2`)}>
            <Image
              src={BubblePng}
              alt="bubble png icon"
              width={50}
              height={50}
            />
            <p className={clsx([`text-header-4 text-blue-400`])}>Laundry</p>
          </div>

          <div
            className={clsx(`hidden`, `lg:flex`)}
            onClick={() => setVisibleNavbarMobile((e) => !e)}
          >
            {visibleNavbarMobile ? (
              <div className={clsx(`text-white transition-all`)}>
                <Image
                  src={ArrowDown}
                  alt="arrow domn png icon"
                  width={25}
                  height={25}
                />
              </div>
            ) : (
              <div className={clsx(`transition-all`)}>
                <Image
                  src={MenuPng}
                  alt="menu png icon"
                  width={25}
                  height={25}
                />
              </div>
            )}
          </div>

          <div className={clsx([`flex items-center space-x-5`, `lg:hidden`])}>
            <Link
              href={"/"}
              className={clsx({ [`text-body-16`]: pathName === "/" })}
            >
              <p>Home</p>
            </Link>
            <Link href={"#"}>
              <p>How to use</p>
            </Link>
            <Link href={"#"}>
              <p>Washing</p>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={clsx(
          visibleNavbarMobile ? `h-40` : `h-0`,
          `fixed z-30 mt-20 hidden w-full grow flex-col items-center space-y-4 overflow-hidden bg-sky-300 transition-all duration-200`,
          `lg:flex`,
        )}
      >
        <Link
          href={"/"}
          className={clsx({
            [`w-full p-2 text-center text-body-16`]: pathName === "/",
          })}
        >
          <p>Home</p>
        </Link>
        <Link href={"#"} className={clsx(`w-full p-2 text-center`)}>
          <p>How to use</p>
        </Link>
        <Link href={"#"} className={clsx(`w-full p-2 text-center`)}>
          <p>Washing</p>
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;