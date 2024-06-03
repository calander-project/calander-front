import { MouseEvent, useRef, useState } from "react";

import Image from "next/image";

import classNames from "classnames/bind";

import styles from "./InviteNotification.module.scss";

const cn = classNames.bind(styles);

interface InviteNotificationnProps {
  groupName: string;
  text: string;
  notificationDate: string;
  isChecked: boolean;
}

export default function InviteNotification({
  groupName,
  text,
  notificationDate,
  isChecked,
}: InviteNotificationnProps) {
  const [isOver, setIsOver] = useState(false);

  const handleNotificationDeleteClick = () => {
    alert("TODO: 추후 알림 삭제 로직 추가 예정");
  };

  const handleInviteAcceptClick = () => {
    alert("TODO: 그룹 초대 수락 로직 추가 예정");
  };

  return (
    <div
      className={cn("container", { checked: isChecked })}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <div className={cn("header")}>
        <div className={cn("label-box")}>
          <p className={cn("group-name")}>{groupName}</p>
          {!isChecked && <p className={cn("new-label")}>NEW</p>}
        </div>
        {isOver && (
          <button
            onClick={handleNotificationDeleteClick}
            type="button"
            className={cn("close-button")}
          >
            <Image src="/icons/notification-close.svg" width={24} height={24} alt="알림 삭제" />
          </button>
        )}
      </div>
      <p className={cn("text")}>{text}</p>
      <div className={cn("button-box")}>
        <button className={cn("accept-button")} type="button" onClick={handleInviteAcceptClick}>
          초대 수락
        </button>
        <p className={cn("notification-date")}>{notificationDate}</p>
      </div>
    </div>
  );
}
