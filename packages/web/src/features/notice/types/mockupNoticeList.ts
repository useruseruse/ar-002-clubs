import type { NoticePagination } from "@sparcs-clubs/web/features/notice/types/notice.type";
import { fromObj } from "@sparcs-clubs/web/features/notice/types/notice.type";

// mockup model to interface
const mockupData = {
  posts: [
    {
      id: 314,
      title: "[기획국] 2024년 동아리소개백서 온라인 배포",
      author: "조현준1",
      date: "2024.03.03.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33591&referrerAllArticles=false",
    },
    {
      id: 313,
      title:
        "[사무국] [For everyone / Translated] 2024년 봄학기 등록 절차 / 2024 Spring Club Registration Process",
      author: "황윤호",
      date: "2024.03.02.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33590&referrerAllArticles=false",
    },
    {
      id: 312,
      title:
        "[관리국] [For everyone / Translated] 2024 봄 공용공간 정기사용신청 안내 / Announcement of Regular Common Space Usage Application of Spring 2024 Semester",
      author: "유효근",
      date: "2024.03.01.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33589&referrerAllArticles=false",
    },
    {
      id: 311,
      title: "[집행부] 2024 봄학기 동아리연합회 집행부원 모집",
      author: "황윤호",
      date: "2024.02.25.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33587&referrerAllArticles=false",
    },
    {
      id: 310,
      title:
        "[사무국] [For everyone / Translated] 2023가을 동아리 지원금 지급액 확정 안내 / Announcement of the Actual Amount of 2023Fall Club Support Fund Payment",
      author: "안희진",
      date: "2024.02.19.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33566&referrerAllArticles=false",
    },
    {
      id: 308,
      title: "[집행부] 1월 집행부 사업보고",
      author: "조현준1",
      date: "2024.02.08.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33561&referrerAllArticles=false",
    },
    {
      id: 307,
      title: "[관리국] [가구 폐기] 2월 14일 가구 폐기 안내",
      author: "권혁원",
      date: "2024.02.07.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33560&referrerAllArticles=false",
    },
    {
      id: 306,
      title: "전체동아리대표자톡 갱신",
      author: "황윤호",
      date: "2024.02.06.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33559&referrerAllArticles=false",
    },
    {
      id: 309,
      title:
        "[For everyone / Translated] 전체동아리대표자톡 갱신 / Replacement of the Chatroom of Club Representatives",
      author: "황윤호",
      date: "2024.02.06.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&menuid=1&boardtype=L&page=1&specialmenutype=&userDisplay=15&articleid=33559",
    },
    {
      id: 305,
      title:
        "[사무국] [For everyone / Translated] 2023 하반기 활동보고서 & 2023가을 동아리 지원금 증빙서류 검토 결과 이의제기 안내 / Objection for 2023 2nd half Activity Report & 2023 Fall Support Fund Document Review",
      author: "안희진",
      date: "2024.02.06.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33558&referrerAllArticles=false",
    },
    {
      id: 304,
      title:
        "[For everyone / Translated] 전체동아리대표자톡 갱신 / Replacement of the Chatroom of Club Representatives",
      author: "황윤호",
      date: "2024.02.06.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&menuid=1&boardtype=L&page=1&specialmenutype=&userDisplay=15&articleid=33559",
    },
    {
      id: 303,
      title:
        "[사무국] [For everyone / Translated] 2023 하반기 활동보고서 & 2023가을 동아리 지원금 증빙서류 검토 결과 이의제기 안내 / Objection for 2023 2nd half Activity Report & 2023 Fall Support Fund Document Review",
      author: "안희진",
      date: "2024.02.06.",
      link: "https://cafe.naver.com/kaistclubs/ArticleRead.nhn?clubid=26985838&page=1&menuid=1&boardtype=L&articleid=33558&referrerAllArticles=false",
    },
  ],
  totalPosts: 302,
};

const mockupNoticePagination: NoticePagination = {
  notices: mockupData.posts.map(fromObj),
  totalNotices: mockupData.totalPosts,
};

export default mockupNoticePagination;
