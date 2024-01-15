// ** React Import
import { useState, useEffect, useRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextClick, prevClick, handleTrainMonth } from "../../redux/trainMonth";

// ** Full Calendar & it's Plugins
import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ko from "@fullcalendar/core/locales/ko";

// ** Third Party Components
import toast from "react-hot-toast";
import { Menu } from "react-feather";
import { Card, CardBody, Button } from "reactstrap";

// API Import
import axios from "axios";
import qs from "qs";

// Icon Import
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calendar = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector((state) => state.trainMonth?.currentMonth);
  const currentYear = useSelector((state) => state.trainMonth?.currentYear);

  // ** Refs
  const calendarRef = useRef(null);

  // ** Props
  // const {
  // store,
  // isRtl,
  // dispatch,
  // calendarsColor,
  // calendarApi,
  // setCalendarApi,
  // handleAddEventSidebar,
  // blankEvent,
  // toggleSidebar,
  // selectEvent,
  // updateEvent,
  // } = props;

  // ** UseEffect checks for CalendarAPI Update
  // useEffect(() => {
  //   if (calendarApi === null) {
  //     setCalendarApi(calendarRef.current.getApi());
  //   }
  // }, [calendarApi]);

  // 월별 운동기록 가져와서 일자별 운동 횟수 저장
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/fit/history/months/118413609210214538557/${currentYear}/${currentMonth}`
        );
        dispatch(handleTrainMonth(response.data.results[0].months_train));
        console.log("API :", response.data.results[0].months_train);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [currentMonth, currentYear, dispatch]);

  // 전월 버튼
  const handlePrevClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    dispatch(prevClick());
    console.log("전월 버튼 월 : ", currentMonth);
    console.log("전월 버튼 연도 : ", currentYear);
  };

  // 익월 버튼
  const handleNextClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    dispatch(nextClick());
    console.log("익월 버튼 월 : ", currentMonth);
    console.log("익월 버튼 연도 : ", currentYear);
  };

  const trainDay = useSelector((state) => state.trainDays);

  // // 운동하지 않은 날 필터링
  // const monthTrainArr = monthTrain.split(",").map(Number);
  // const nonZeroIndexes = monthTrainArr
  //   .map((value, index) => (value !== 0 ? index : -1))
  //   .filter((index) => index !== -1);

  // // index는 0부터 시작하므로 각 value 에 +1
  // const trainDay = nonZeroIndexes.map((index) => index + 1);
  // console.log("배열", trainDay);

  // 운동한 일 수 만큼 이벤트 객체 생성
  const eventList = [];
  for (let i = 0; i < trainDay; i++) {
    if (trainDay[i] !== "0") {
      const eventItem = {
        start: `${currentYear}-${currentMonth}-${trainDay[i]}`,
        end: `${currentYear}-${currentMonth}-${trainDay[i]}`,
        display: "background",
        color: "#86DFAE",
      };
      eventList.push(eventItem);
    }
  }

  // ** calendarOptions(Props)
  const calendarOptions = {
    events: eventList,
    plugins: [interactionPlugin, dayGridPlugin],
    initialView: "dayGridMonth",
    headerToolbar: null,
    // locale: ko,
    // views: {
    //   dayGridMonth: {
    // titleFormat: function (date) {
    //   // title 설정
    //   return (
    //     date.date.year +
    //     "년 " +
    //     (date.date.month + 1 < 10
    //       ? "0" + (date.date.month + 1)
    //       : date.date.month + 1) +
    //     "월"
    //   );
    // },
    //   },
    // },

    // locale: "koLocale",

    /*
      Enable dragging and resizing event
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: false,

    /*
      Enable resizing event from start
      ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
    */
    eventResizableFromStart: true,

    /*
      Automatically scroll the scroll-containers during event drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: false,

    /*
      Max number of events within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxEvents
    */
    dayMaxEvents: 2,

    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: false,

    // eventClassNames({ event: calendarEvent }) {
    //   // eslint-disable-next-line no-underscore-dangle
    //   const colorName =
    //     calendarsColor[calendarEvent._def.extendedProps.calendar];

    //   return [
    //     // Background Color
    //     `bg-light-${colorName}`,
    //   ];
    // },

    // eventClick({ event: clickedEvent }) {
    //   dispatch(selectEvent(clickedEvent));
    //   handleAddEventSidebar();

    // * Only grab required field otherwise it goes in infinity loop
    // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
    // event.value = grabEventDataFromEventApi(clickedEvent)

    // eslint-disable-next-line no-use-before-define
    // isAddNewEventSidebarActive.value = true
    // },

    // customButtons: {
    //   sidebarToggle: {
    //     text: <Menu className="d-xl-none d-block" />,
    //     click() {
    //       toggleSidebar(true);
    //     },
    //   },
    // },

    // dateClick(info) {
    //   const ev = blankEvent;
    //   ev.start = info.date;
    //   ev.end = info.date;
    //   dispatch(selectEvent(ev));
    //   handleAddEventSidebar();
    // },

    /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
    // eventDrop({ event: droppedEvent }) {
    //   dispatch(updateEvent(droppedEvent));
    //   toast.success("Event Updated");
    // },

    /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
    // eventResize({ event: resizedEvent }) {
    //   dispatch(updateEvent(resizedEvent));
    //   toast.success("Event Updated");
    // },

    ref: calendarRef,

    // Get direction from app state (store)
    // direction: isRtl ? "rtl" : "ltr",
  };

  return (
    <Card className="shadow-none border-0 mb-0 rounded-0">
      <CardBody className="pb-0">
        <div className="d-flex align-items-center mb-50">
          <Button.Ripple
            color="flat-secondary"
            className="p-1"
            onClick={handlePrevClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </Button.Ripple>
          <h4 className="m-0">
            {currentYear}년 {currentMonth}월
          </h4>
          <Button.Ripple
            color="flat-secondary"
            className="p-1"
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </Button.Ripple>
        </div>
        <FullCalendar {...calendarOptions} />{" "}
      </CardBody>
    </Card>
  );
};

export default memo(Calendar);
