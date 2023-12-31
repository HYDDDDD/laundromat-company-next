import React from "react";

import Image from "next/image";

import NotificationPng from "@/public/notification-png.png";

const NotificationIcon = () => {
  return (
    <Image
      src={NotificationPng}
      alt="notification png icon"
      width={120}
      height={120}
    />
  );
};

export default NotificationIcon;
