import {
  faTableColumns,
  faChartSimple,
  faCalendarDays,
  faPager,
  faBicycle,
  faPersonWalking,
  faStairs,
  faSquare,
  faChartLine,
  faRankingStar,
  faPeopleArrows,
  faUsers,
  faCoins,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default [
  {
    id: "dashBoard",
    title: "대시보드",
    icon: <FontAwesomeIcon icon={faTableColumns} />,
    navLink: "/dashBoard",
  },
  {
    id: "dailySummary",
    title: "일일요약",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
    navLink: "/dailySummary",
  },
  {
    id: "calendar",
    title: "캘린더",
    icon: <FontAwesomeIcon icon={faCalendarDays} />,
    navLink: "/calendar",
  },
  {
    id: "newsBoard",
    title: "뉴스보드",
    icon: <FontAwesomeIcon icon={faPager} />,
    navLink: "/newsBoard",
  },
  {
    header: "운동정보",
  },
  {
    id: "riding",
    title: "라이딩",
    icon: <FontAwesomeIcon icon={faBicycle} />,
    navLink: "/riding",
  },
  {
    id: "walking",
    title: "걷기",
    icon: <FontAwesomeIcon icon={faPersonWalking} />,
    navLink: "/walking",
  },
  {
    id: "stairs",
    title: "계단",
    icon: <FontAwesomeIcon icon={faStairs} />,
    navLink: "/stairs",
  },
  {
    header: "콘텐츠",
  },
  {
    id: "usedContents",
    title: "이용한 콘텐츠",
    icon: <FontAwesomeIcon icon={faSquare} />,
    navLink: "/usedContents",
  },
  {
    id: "contentStat",
    title: "콘텐츠 통계",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    navLink: "/contentStat",
  },
  {
    id: "courseStat",
    title: "코스 통계",
    icon: <FontAwesomeIcon icon={faRankingStar} />,
    navLink: "/courseStat",
  },
  {
    header: "연동",
  },
  {
    id: "trainerInterworking",
    title: "트레이너 연동",
    icon: <FontAwesomeIcon icon={faPeopleArrows} />,
    navLink: "/trainerInterworking",
  },
  {
    id: "fitnessCenter",
    title: "피트니스센터 연결",
    icon: <FontAwesomeIcon icon={faPeopleArrows} />,
    navLink: "/fitnessCenter",
  },
  {
    id: "personalTrainer",
    title: "퍼스널트레이너 연결",
    icon: <FontAwesomeIcon icon={faPeopleArrows} />,
    navLink: "/personalTrainer",
  },
  {
    header: "소셜 네트워크",
  },
  {
    id: "SNS",
    title: "SNS",
    icon: <FontAwesomeIcon icon={faUsers} />,
    navLink: "/SNS",
  },
  {
    header: "포인트 현황",
  },
  {
    id: "earnPoints",
    title: "포인트 획득 내역",
    icon: <FontAwesomeIcon icon={faCoins} />,
    navLink: "/earnPoints",
  },
  {
    id: "usePoints",
    title: "포인트 사용 내역",
    icon: <FontAwesomeIcon icon={faCoins} />,
    navLink: "/usePoints",
  },
  {
    header: "사용자 설정",
  },
  {
    id: "userSetting",
    title: "사용자 정보 변경",
    icon: <FontAwesomeIcon icon={faGear} />,
    navLink: "/userSetting",
  },
];
