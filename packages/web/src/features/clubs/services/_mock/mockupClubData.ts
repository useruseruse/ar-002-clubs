import type { ApiClb001ResponseOK } from "@sparcs-clubs/interface/api/club/endpoint/apiClb001";

// mockup model to interface
const mockupData: ApiClb001ResponseOK = {
  divisions: [
    {
      id: 1,
      name: "생활문화",
      clubs: [
        {
          id: 1,
          name: "궁극의 맛",
          type: 1,
          characteristic: "요리",
          representative: "장주원",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 2,
          name: "샹그릴라",
          type: 0,
          characteristic: "애니메이션 감상 및 서브컬쳐",
          representative: "김경민",
          advisor: null,
          totalMemberCnt: 58,
        },
        {
          id: 3,
          name: "여로",
          type: 1,
          characteristic: "여행",
          representative: "강현성",
          advisor: "김유식",
          totalMemberCnt: 31,
        },
        {
          id: 4,
          name: "예쁜영화",
          type: 1,
          characteristic: "영화감상",
          representative: "정재민",
          advisor: "정재승",
          totalMemberCnt: 32,
        },
        {
          id: 5,
          name: "칼디",
          type: 0,
          characteristic: "커피&바리스타",
          representative: "최원준",
          advisor: "오혜연",
          totalMemberCnt: 8,
        },
        {
          id: 6,
          name: "판놀음",
          type: 1,
          characteristic: "보드 게임",
          representative: "양동연",
          advisor: "김혜진",
          totalMemberCnt: 32,
        },
        {
          id: 7,
          name: "Khartes",
          type: 1,
          characteristic: "트레이딩 카드 게임",
          representative: "양진혁",
          advisor: null,
          totalMemberCnt: 23,
        },
        {
          id: 8,
          name: "OPTeamus",
          type: 1,
          characteristic: "이스포츠",
          representative: "신승빈",
          advisor: "박병호",
          totalMemberCnt: 3,
        },
        {
          id: 9,
          name: "THE MIXER",
          type: 1,
          characteristic: "칵테일",
          representative: "구도훈",
          advisor: null,
          totalMemberCnt: 22,
        },
        {
          id: 75,
          name: "패플리",
          type: 1,
          characteristic: "패션",
          representative: "탁한진",
          advisor: null,
          totalMemberCnt: 12,
        },
        {
          id: 76,
          name: "Boardom",
          type: 1,
          characteristic: "보드게임",
          representative: "Munim Hasan Wasi",
          advisor: "Insik Shin",
          totalMemberCnt: 1,
        },
        {
          id: 77,
          name: "Moonshine",
          type: 2,
          characteristic: "양조",
          representative: "임채민",
          advisor: null,
          totalMemberCnt: 13,
        },
        {
          id: 89,
          name: "KASTLE",
          type: 2,
          characteristic: "체스",
          representative: "Jaden Jorradol",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 92,
          name: "카이시엘",
          type: 2,
          characteristic:
            "제과제빵 활동을 통해 학우들의 다양한 문화활동을 장려함.",
          representative: "김나연",
          advisor: null,
          totalMemberCnt: 36,
        },
        {
          id: 104,
          name: "COKAIN",
          type: 2,
          characteristic: "코스프레",
          representative: "김강민",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 106,
          name: "모닥불",
          type: 2,
          characteristic: "캠핑",
          representative: "김지하",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 107,
          name: "카슐랭",
          type: 2,
          characteristic: "맛집탐방",
          representative: "이정민",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 110,
          name: "웅(熊)",
          type: 2,
          characteristic: "고기굽기에 대한 연구",
          representative: "이서윤",
          advisor: null,
          totalMemberCnt: 1,
        },
      ],
    },
    {
      id: 2,
      name: "연행예술",
      clubs: [
        {
          id: 10,
          name: "이박터",
          type: 1,
          characteristic: "연극",
          representative: "허수영",
          advisor: null,
          totalMemberCnt: 18,
        },
        {
          id: 11,
          name: "일루젼 카이스트",
          type: 1,
          characteristic: "힙합, 스트릿 및 K-POP댄스",
          representative: "정민혁",
          advisor: "김현정",
          totalMemberCnt: 17,
        },
        {
          id: 12,
          name: "Lunatic",
          type: 1,
          characteristic: "스트릿 댄스",
          representative: "박선우",
          advisor: "민범기",
          totalMemberCnt: 36,
        },
        {
          id: 13,
          name: "MindFreak",
          type: 1,
          characteristic: "마술 및 타로",
          representative: "이창섭",
          advisor: null,
          totalMemberCnt: 19,
        },
        {
          id: 14,
          name: "Number",
          type: 1,
          characteristic: "뮤지컬",
          representative: "김동현",
          advisor: "이경면",
          totalMemberCnt: 20,
        },
      ],
    },
    {
      id: 3,
      name: "전시창작",
      clubs: [
        {
          id: 15,
          name: "곰발바닥",
          type: 1,
          characteristic: "수공예",
          representative: "김채현",
          advisor: "이지윤",
          totalMemberCnt: 37,
        },
        {
          id: 16,
          name: "그리미주아",
          type: 1,
          characteristic: "순수미술",
          representative: "예건희",
          advisor: "조현정",
          totalMemberCnt: 27,
        },
        {
          id: 17,
          name: "문학의 뜨락",
          type: 1,
          characteristic: "문예창작 및 합평",
          representative: "신승운",
          advisor: "전봉관",
          totalMemberCnt: 1,
        },
        {
          id: 18,
          name: "별바라기",
          type: 1,
          characteristic: "별 관측 및 사진 촬영, 사진 전시회 운영과 외부 출사",
          representative: "오윤종",
          advisor: "최한림",
          totalMemberCnt: 38,
        },
        {
          id: 19,
          name: "빛따라",
          type: 1,
          characteristic: "사진",
          representative: "김휘용",
          advisor: "김민혁",
          totalMemberCnt: 3,
        },
        {
          id: 20,
          name: "열정부",
          type: 1,
          characteristic:
            "만화창작 및 디지털 일러스트레이션 및 애니메이션 제작",
          representative: "서해린",
          advisor: null,
          totalMemberCnt: 11,
        },
        {
          id: 21,
          name: "은막",
          type: 1,
          characteristic: "독립영화 제작",
          representative: "김나희",
          advisor: "전봉관",
          totalMemberCnt: 23,
        },
        {
          id: 91,
          name: "KAIST Chronicles",
          type: 2,
          characteristic: "영문",
          representative: "김동은",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 95,
          name: "위로자전거",
          type: 2,
          characteristic: "새활용",
          representative: "방민솔",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 98,
          name: "LEtsGO",
          type: 2,
          characteristic: "일반 레고 및 나노블럭 조립 후 전시활동",
          representative: "김진현",
          advisor: null,
          totalMemberCnt: 9,
        },
      ],
    },
    {
      id: 4,
      name: "밴드음악",
      clubs: [
        {
          id: 22,
          name: "강적",
          type: 1,
          characteristic: "하드 락 밴드",
          representative: "조한빈",
          advisor: "이탁연",
          totalMemberCnt: 11,
        },
        {
          id: 23,
          name: "동틀무렵",
          type: 1,
          characteristic: "모던락 밴드",
          representative: "이해인",
          advisor: "이경면",
          totalMemberCnt: 29,
        },
        {
          id: 24,
          name: "인피니트",
          type: 1,
          characteristic: "메탈 및 얼터너티브 메탈 관련 밴드음악",
          representative: "김준호",
          advisor: "윤효상",
          totalMemberCnt: 18,
        },
        {
          id: 25,
          name: "창작동화",
          type: 1,
          characteristic: "재즈 및 창작곡 공연",
          representative: "최홍일",
          advisor: "배석형",
          totalMemberCnt: 13,
        },
        {
          id: 26,
          name: "CarpeDiem",
          type: 1,
          characteristic: "팝 밴드",
          representative: "김예찬",
          advisor: "조항정",
          totalMemberCnt: 1,
        },
        {
          id: 27,
          name: "Praiser",
          type: 1,
          characteristic: "KAIST 내 크리스천들을 위한 CCM을 연주하는 밴드",
          representative: "박동민",
          advisor: "성영철",
          totalMemberCnt: 11,
        },
        {
          id: 28,
          name: "STURGEON",
          type: 1,
          characteristic: "EMO/CORE/PUNK 장르의 밴드음악 합주 및 공연",
          representative: "김예린",
          advisor: null,
          totalMemberCnt: 14,
        },
        {
          id: 29,
          name: "Twenties Dream",
          type: 1,
          characteristic: "펑크락 밴드",
          representative: "조원준",
          advisor: "이동만",
          totalMemberCnt: 14,
        },
        {
          id: 111,
          name: "Shift",
          type: 2,
          characteristic: "International Rock Band",
          representative: "Nurlybay Akmerey",
          advisor: null,
          totalMemberCnt: 8,
        },
      ],
    },
    {
      id: 5,
      name: "보컬음악",
      clubs: [
        {
          id: 30,
          name: "구토스",
          type: 1,
          characteristic: "힙합, R&B",
          representative: "신동환",
          advisor: "권경하",
          totalMemberCnt: 21,
        },
        {
          id: 31,
          name: "여섯줄",
          type: 1,
          characteristic: "어쿠스틱 보컬",
          representative: "이유섭",
          advisor: null,
          totalMemberCnt: 5,
        },
        {
          id: 32,
          name: "HUG",
          type: 1,
          characteristic: "버스킹 및 실용음악",
          representative: "김시은",
          advisor: "류석영",
          totalMemberCnt: 1,
        },
        {
          id: 33,
          name: "KAIST CHORUS",
          type: 1,
          characteristic: "합창 및 아카펠라",
          representative: "성민석",
          advisor: "권세진",
          totalMemberCnt: 12,
        },
        {
          id: 34,
          name: "MUSE",
          type: 1,
          characteristic: "밴드세션&코러스",
          representative: "정민호",
          advisor: "이해신",
          totalMemberCnt: 22,
        },
      ],
    },
    {
      id: 6,
      name: "연주음악",
      clubs: [
        {
          id: 35,
          name: "소리모음",
          type: 1,
          characteristic: "사물놀이 및 풍물",
          representative: "김수진",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 36,
          name: "FingS",
          type: 1,
          characteristic: "핑거스타일 기타",
          representative: "유기민",
          advisor: "이승희",
          totalMemberCnt: 26,
        },
        {
          id: 37,
          name: "LP",
          type: 1,
          characteristic: "작곡",
          representative: "윤남석",
          advisor: null,
          totalMemberCnt: 26,
        },
        {
          id: 38,
          name: "PIAST",
          type: 1,
          characteristic: "피아노 연주",
          representative: "주선우",
          advisor: "최형순",
          totalMemberCnt: 44,
        },
        {
          id: 80,
          name: "FUZE",
          type: 1,
          characteristic: "디제잉 및 파티플래닝",
          representative: "김현규",
          advisor: "남주한",
          totalMemberCnt: 1,
        },
      ],
    },
    {
      id: 7,
      name: "사회",
      clubs: [
        {
          id: 39,
          name: "디딤돌",
          type: 1,
          characteristic: "교육봉사 및 장애인 보조",
          representative: "허지운",
          advisor: "정연식",
          totalMemberCnt: 1,
        },
        {
          id: 40,
          name: "EWB-KAIST",
          type: 1,
          characteristic: "적정 기술 개발 및 보급",
          representative: "김수민",
          advisor: "배상민",
          totalMemberCnt: 12,
        },
        {
          id: 41,
          name: "K-Let",
          type: 1,
          characteristic: "청소년 대상 강연 및 멘토링",
          representative: "고채현",
          advisor: "송지은",
          totalMemberCnt: 6,
        },
        {
          id: 42,
          name: "KAINATION",
          type: 1,
          characteristic: "기부",
          representative: "강현우",
          advisor: "신병하",
          totalMemberCnt: 5,
        },
        {
          id: 43,
          name: "SEED KAIST",
          type: 1,
          characteristic: "과학 분야 교육봉사",
          representative: "김준성",
          advisor: "신하용",
          totalMemberCnt: 24,
        },
        {
          id: 44,
          name: "Silver Lining",
          type: 1,
          characteristic: "봉사",
          representative: "임지민",
          advisor: "이재우",
          totalMemberCnt: 22,
        },
        {
          id: 94,
          name: "KAIST-SAE",
          type: 2,
          characteristic: "지역사회 봉사 및 환경 보호",
          representative: "권효진",
          advisor: null,
          totalMemberCnt: 1,
        },
      ],
    },
    {
      id: 8,
      name: "종교",
      clubs: [
        {
          id: 45,
          name: "네비게이토",
          type: 1,
          characteristic: "크리스천 리더십",
          representative: "김예찬",
          advisor: "심기동",
          totalMemberCnt: 12,
        },
        {
          id: 46,
          name: "사나래",
          type: 1,
          characteristic: "가톨릭(천주교)",
          representative: "정서경",
          advisor: "서민교",
          totalMemberCnt: 16,
        },
        {
          id: 47,
          name: "CCC",
          type: 1,
          characteristic: "대학생 기독교 선교",
          representative: "황은빈",
          advisor: "김상규",
          totalMemberCnt: 15,
        },
        {
          id: 48,
          name: "IVF",
          type: 1,
          characteristic: "성경연구, 공동체 활동",
          representative: "김재용",
          advisor: "한명준",
          totalMemberCnt: 12,
        },
      ],
    },
    {
      id: 9,
      name: "구기체육",
      clubs: [
        {
          id: 49,
          name: "루키",
          type: 1,
          characteristic: "야구",
          representative: "박정원",
          advisor: "서민교",
          totalMemberCnt: 22,
        },
        {
          id: 50,
          name: "아퀼라",
          type: 1,
          characteristic: "풋살",
          representative: "김도윤",
          advisor: "강준혁",
          totalMemberCnt: 15,
        },
        {
          id: 51,
          name: "카이큐",
          type: 1,
          characteristic: "배구",
          representative: "이서준",
          advisor: "장무석",
          totalMemberCnt: 8,
        },
        {
          id: 52,
          name: "투 (TU)",
          type: 1,
          characteristic: "농구",
          representative: "이승헌",
          advisor: "김석희",
          totalMemberCnt: 1,
        },
        {
          id: 53,
          name: "허리케인",
          type: 1,
          characteristic: "축구",
          representative: "이서진",
          advisor: "강명수",
          totalMemberCnt: 1,
        },
        {
          id: 54,
          name: "DOOLLY",
          type: 1,
          characteristic: "5 대 5 정통 농구",
          representative: "김주형",
          advisor: "최양규",
          totalMemberCnt: 43,
        },
        {
          id: 55,
          name: "EDGE",
          type: 1,
          characteristic: "탁구",
          representative: "정유찬",
          advisor: "강준혁",
          totalMemberCnt: 27,
        },
        {
          id: 56,
          name: "K-Bird",
          type: 1,
          characteristic: "배드민턴",
          representative: "박시우",
          advisor: null,
          totalMemberCnt: 18,
        },
        {
          id: 57,
          name: "STROKE",
          type: 1,
          characteristic: "테니스",
          representative: "김지환",
          advisor: "오왕열",
          totalMemberCnt: 1,
        },
        {
          id: 81,
          name: "스페어",
          type: 1,
          characteristic: "볼링",
          representative: "서민준",
          advisor: "한동훈",
          totalMemberCnt: 18,
        },
        {
          id: 82,
          name: "UM",
          type: 2,
          characteristic: "족구",
          representative: "안제휘",
          advisor: null,
          totalMemberCnt: 3,
        },
        {
          id: 93,
          name: "매버릭스",
          type: 2,
          characteristic: "미식축구",
          representative: "장준영",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 101,
          name: "고래당",
          type: 2,
          characteristic: "구(4구, 8볼)",
          representative: "장원혁",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 108,
          name: "PUD",
          type: 2,
          characteristic: "캐주얼 배드민턴",
          representative: "Calvin Samuel",
          advisor: null,
          totalMemberCnt: 12,
        },
      ],
    },
    {
      id: 10,
      name: "생활체육",
      clubs: [
        {
          id: 58,
          name: "검우회",
          type: 1,
          characteristic: "대한검도",
          representative: "심한보",
          advisor: "김영진",
          totalMemberCnt: 40,
        },
        {
          id: 59,
          name: "울랄라",
          type: 1,
          characteristic: "스포츠 클라이밍",
          representative: "김율",
          advisor: "이승욱",
          totalMemberCnt: 32,
        },
        {
          id: 60,
          name: "카이스트 수영팀 가오리",
          type: 1,
          characteristic: "경영(競泳) 및 핀수영",
          representative: "김나령",
          advisor: "박수경",
          totalMemberCnt: 8,
        },
        {
          id: 61,
          name: "KAKI",
          type: 1,
          characteristic: "스노우보드 및 익스트림 스포츠",
          representative: "신승헌",
          advisor: "배중면",
          totalMemberCnt: 1,
        },
        {
          id: 83,
          name: "감성",
          type: 1,
          characteristic: "자전거 라이딩",
          representative: "김문수",
          advisor: null,
          totalMemberCnt: 26,
        },
        {
          id: 85,
          name: "주짓스님",
          type: 1,
          characteristic: "주짓수, MMA, 킥복싱",
          representative: "노영래",
          advisor: null,
          totalMemberCnt: 15,
        },
        {
          id: 90,
          name: "KAIST Winner Wrestling",
          type: 2,
          characteristic: "레슬링",
          representative: "김영진",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 96,
          name: "ASCEND",
          type: 2,
          characteristic: "국제 종합운동 동아리",
          representative: "김근형",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 103,
          name: "쨉쨉원투",
          type: 2,
          characteristic: "복싱",
          representative: "임수연",
          advisor: null,
          totalMemberCnt: 7,
        },
        {
          id: 105,
          name: "북극곰",
          type: 2,
          characteristic: "유도",
          representative: "김창헌",
          advisor: null,
          totalMemberCnt: 14,
        },
      ],
    },
    {
      id: 11,
      name: "이공학술",
      clubs: [
        {
          id: 62,
          name: "숲",
          type: 1,
          characteristic: "생물의 관찰 및 탐구",
          representative: "신동엽",
          advisor: "김상규",
          totalMemberCnt: 21,
        },
        {
          id: 63,
          name: "질주",
          type: 1,
          characteristic: "모터스포츠",
          representative: "이관형",
          advisor: "김경수",
          totalMemberCnt: 16,
        },
        {
          id: 64,
          name: "하제",
          type: 1,
          characteristic: "게임 연구 및 제작",
          representative: "김경완",
          advisor: "송준화",
          totalMemberCnt: 1,
        },
        {
          id: 65,
          name: "GoN",
          type: 1,
          characteristic: "정보보안 및 해킹",
          representative: "조정훈",
          advisor: "차상길",
          totalMemberCnt: 35,
        },
        {
          id: 66,
          name: "KAIST 수학문제연구회",
          type: 1,
          characteristic: "수학",
          representative: "이준혁",
          advisor: "엄상일",
          totalMemberCnt: 58,
        },
        {
          id: 67,
          name: "KAIST Puple",
          type: 1,
          characteristic: "퍼즐 연구 및 공유",
          representative: "황윤찬",
          advisor: "안정연",
          totalMemberCnt: 1,
        },
        {
          id: 68,
          name: "MR",
          type: 1,
          characteristic: "로봇 연구 및 제작, 메이커 활동",
          representative: "임준범",
          advisor: "박용화",
          totalMemberCnt: 9,
        },
        {
          id: 69,
          name: "RUN",
          type: 1,
          characteristic: "알고리즘 문제 해결",
          representative: "이예린",
          advisor: "류석영",
          totalMemberCnt: 16,
        },
        {
          id: 70,
          name: "Vlab",
          type: 1,
          characteristic: "과학퀴즈와 인공지능",
          representative: "이서현",
          advisor: "강민석",
          totalMemberCnt: 12,
        },
        {
          id: 86,
          name: "Include",
          type: 2,
          characteristic: "AI 학술",
          representative: "김중현",
          advisor: null,
          totalMemberCnt: 22,
        },
        {
          id: 100,
          name: "GDSC",
          type: 2,
          characteristic: "KAIST 개발자 네트워킹 및 개발 관련 행사 주최",
          representative: "윤지훈",
          advisor: null,
          totalMemberCnt: 2,
        },
        {
          id: 102,
          name: "우주벌레",
          type: 2,
          characteristic: "우주생물학 탐구 및 외계지적생명체 탐사",
          representative: "이진우",
          advisor: null,
          totalMemberCnt: 1,
        },
        {
          id: 109,
          name: "NUPS(NUPzuki Search club)",
          type: 2,
          characteristic:
            "외계행성 관측 및 관측 기술 개발과 새로운 행성 발견, 외계생명체 거주 가능성 조사",
          representative: "유동호",
          advisor: "김준한",
          totalMemberCnt: 1,
        },
      ],
    },
    {
      id: 12,
      name: "인문학술",
      clubs: [
        {
          id: 71,
          name: "Freethinkers KAIST",
          type: 1,
          characteristic: "자유사상",
          representative: "이윤섭",
          advisor: "Grant Fisher",
          totalMemberCnt: 14,
        },
        {
          id: 72,
          name: "ICISTS",
          type: 1,
          characteristic: "학술행사 개최",
          representative: "김지환",
          advisor: "조항정",
          totalMemberCnt: 16,
        },
        {
          id: 73,
          name: "KFAC",
          type: 1,
          characteristic: "금융 학술 동아리",
          representative: "김희상",
          advisor: "최호용",
          totalMemberCnt: 1,
        },
        {
          id: 74,
          name: "MSK",
          type: 1,
          characteristic: "경영전략",
          representative: "조은현",
          advisor: "김원준",
          totalMemberCnt: 1,
        },
        {
          id: 87,
          name: "KAIST 법학회 Lawgical",
          type: 1,
          characteristic: "법학",
          representative: "김경래",
          advisor: "전우정",
          totalMemberCnt: 15,
        },
        {
          id: 99,
          name: "KAIST LOOKIE",
          type: 2,
          characteristic: "사회 문제 소셜 임팩트 창출, 소셜 벤처 창업 동아리",
          representative: "양준원",
          advisor: null,
          totalMemberCnt: 9,
        },
      ],
    },
  ],
};

// ----

export default mockupData;
