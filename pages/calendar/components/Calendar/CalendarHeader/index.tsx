import classNames from "classnames/bind";
import dayjs from "dayjs";

import MonthNavButton from "@/components/DatePicker/MonthNavButton";
import { CalendarType } from "@/pages/calendar/index.page";
import { useDateStore } from "@/store/useDateStore";

import styles from "./CalendarHeader.module.scss";
import CalendarTypeSegmentedButton from "../../CalendarTypeSegmentedButton";

const cn = classNames.bind(styles);

interface CalendarHeader {
  setCalendarType: (type: CalendarType) => void;
}

export default function CalendarHeader({ setCalendarType }: CalendarHeader) {
  const { viewDate, setViewDate, setFocusDate } = useDateStore();

  const handleTodayClick = () => {
    const today = dayjs();
    setViewDate(today);
    setFocusDate(today);
  };
  return (
    <header className={cn("container")}>
      <div className={cn("year-month")}>
        <h2>
          {viewDate.get("year")} 년 {viewDate.get("M") + 1}월
        </h2>
        <MonthNavButton />
        <button className={cn("today-button")} type="button" onClick={handleTodayClick}>
          오늘로
        </button>
      </div>

      <CalendarTypeSegmentedButton setCalendarType={setCalendarType} />
    </header>
  );
}