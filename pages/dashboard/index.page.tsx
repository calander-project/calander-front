import { useState } from "react";

import classNames from "classnames/bind";
import dayjs, { Dayjs } from "dayjs";

import GroupList from "./components/GroupList";
import NotificationCenter from "./components/NotificationCenter";
import UpcomingScheduleList from "./components/UpcomingScheduleList";
import DatePicker from "@/components/DatePicker/DatePicker";
import Header from "@/components/Header";
import MetaData from "@/components/MetaData";

import styles from "./Dashboard.module.scss";

const cn = classNames.bind(styles);

export default function Dashboard() {
  const [focusDate, setFocusDate] = useState<Dayjs>(dayjs());

  return (
    <>
      <MetaData title="대시보드 | 티키타" />
      <Header />
      <main className={cn("container")}>
        <div className={cn("wrap")}>
          <GroupList />
          <section className={cn("content")}>
            <div className={cn("calendar")}>
              <DatePicker
                selectedDay={focusDate}
                setSelectedDay={setFocusDate}
                hasNavigation={false}
              />
            </div>
            <div className={cn("box")}>
              <UpcomingScheduleList />
              <NotificationCenter />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
