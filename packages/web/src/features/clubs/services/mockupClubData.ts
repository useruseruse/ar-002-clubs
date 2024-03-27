import { z } from "zod";

import apiClb001 from "@sparcs-clubs/interface/api/clubs/endpoints/apiClb001";
import { ClubType } from "@sparcs-clubs/interface/common/enum/clubs";

// mockup model to interface
const mockupData: z.infer<(typeof apiClb001.responseBodyMap)[200]> = {
  divisions: [
    {
      id: 1,
      name: "생활문화",
      clubs: [
        {
          id: 1,
          name: "궁극의 맛",
          characteristic: "요리",
          type: ClubType.Regular,
          representative: "장주원",
          advisor: null,
          totalMemberCnt: 22,
        },
        {
          id: 2,
          name: "샹그릴라",
          characteristic: "애니메이션 감상 및 서브컬쳐",
          type: ClubType.Regular,
          representative: "김경민",
          advisor: null,
          totalMemberCnt: 50,
        },
        {
          id: 3,
          name: "여로",
          characteristic: "여행",
          type: ClubType.Regular,
          representative: "강현성",
          advisor: "김유식",
          totalMemberCnt: 25,
        },
        {
          id: 4,
          name: "예쁜영화",
          characteristic: "영화감상",
          type: ClubType.Regular,
          representative: "정재민",
          advisor: "정재승",
          totalMemberCnt: 38,
        },
        {
          id: 5,
          name: "칼디",
          characteristic: "커피",
          type: ClubType.Regular,
          representative: "최원준",
          advisor: "오혜연",
          totalMemberCnt: 30,
        },
        {
          id: 6,
          name: "판놀음",
          characteristic: "보드 게임",
          type: ClubType.Regular,
          representative: "양동연",
          advisor: "김혜진",
          totalMemberCnt: 41,
        },
        {
          id: 7,
          name: "Khartes",
          characteristic: "트레이딩 카드 게임",
          type: ClubType.Senate,
          representative: "양진혁",
          advisor: null,
          totalMemberCnt: 26,
        },
        {
          id: 8,
          name: "OPTeamus",
          characteristic: "이스포츠",
          type: ClubType.Regular,
          representative: "신승빈",
          advisor: "박병호",
          totalMemberCnt: 19,
        },
        {
          id: 9,
          name: "THE MIXER",
          characteristic: "칵테일",
          type: ClubType.Regular,
          representative: "구도훈",
          advisor: null,
          totalMemberCnt: 17,
        },
        {
          id: 75,
          name: "패플리",
          characteristic: "패션",
          type: ClubType.Regular,
          representative: "탁한진",
          advisor: null,
          totalMemberCnt: 23,
        },
        {
          id: 76,
          name: "Boardom",
          characteristic: "보드게임",
          type: ClubType.Provisional,
          representative: "MAMMADLI TURAN",
          advisor: null,
          totalMemberCnt: 13,
        },
        {
          id: 77,
          name: "Moonshine",
          characteristic: "양조",
          type: ClubType.Provisional,
          representative: "임채민",
          advisor: null,
          totalMemberCnt: 18,
        },
        {
          id: 89,
          name: "KASTLE",
          characteristic: "체스",
          type: ClubType.Provisional,
          representative: "Jaden Jorradol",
          advisor: null,
          totalMemberCnt: 29,
        },
        {
          id: 92,
          name: "카이시엘",
          characteristic:
            "제과제빵 활동을 통해 학우들의 다양한 문화활동을 장려함.",
          type: ClubType.Provisional,
          representative: "김나연",
          advisor: null,
          totalMemberCnt: 30,
        },
      ],
    },
  ],
};

// ----

export default mockupData;
