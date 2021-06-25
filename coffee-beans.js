// 음료
const coffeeBeans = [
  {
    title: "아이스 캐러멜 마키아토",
    src:
      "https://www.coffeebeankorea.com/data/menu/아이스-캐러멜-마키아또-.jpg",
    desc: "에스프레소와 부드러운 캐러멜, 우유와 얼음.",
    category: "coffee",
    kcal: 180,
    ml: 355,
    sugar: 30,
    caffeine: 99
  },
  {
    title: "아이스 바닐라라떼",
    src: "https://www.coffeebeankorea.com/data/menu/아이스바닐라라떼.jpg",
    desc: "에스프레소와 프렌치 디럭스 바닐라 파우더, 저지방 우유와 얼음.",
    category: "coffee",
    kcal: 180,
    ml: 355,
    sugar: 30,
    caffeine: 99
  },
  {
    title: "아이스 모카라떼",
    src: "https://www.coffeebeankorea.com/data/menu/9-2_아이스모카라떼.jpg",
    desc: "에스프레소와 스페셜 더치 쵸코렛 파우더, 저지방 우유와 얼음.",
    category: "coffee",
    kcal: 170,
    ml: 355,
    sugar: 31,
    caffeine: 104
  },
  {
    title: "아이스 카페라떼",
    src: "https://www.coffeebeankorea.com/data/menu/아이스카페라떼.jpg",
    desc: "에스프레소와 얼음, 우유의 컴비네이션.",
    category: "coffee",
    kcal: 120,
    ml: 355,
    sugar: 9,
    caffeine: 99
  },
  {
    title: "아이스 아메리카노",
    src: "https://www.coffeebeankorea.com/data/menu/아이스커피.jpg",
    desc: "에스프레소와 얼음, 물의 컴비네이션.",
    category: "coffee",
    kcal: 5,
    ml: 355,
    sugar: 1,
    caffeine: 99
  },
  {
    title: "아이스 헤이즐넛 아메리카노",
    src: "https://www.coffeebeankorea.com/data/menu/헤이즐넛아이스커피.jpg",
    desc: "에스프레소와 얼음, 물과 헤이즐넛 파우더의 콤비네이션.",
    category: "coffee",
    kcal: 206,
    ml: 355,
    sugar: 24,
    caffeine: 99
  },
  {
    title: "카페수아",
    src: "https://www.coffeebeankorea.com/data/menu/카페수어.jpg",
    desc: "깊고 진한 더블 에스프레소와 달콤한 연유의 만남",
    category: "coffee",
    kcal: 255,
    ml: 355,
    sugar: 36,
    caffeine: 198
  },
  {
    title: "아이스 더블카페 라떼",
    src: "https://www.coffeebeankorea.com/data/menu/아이스더블카페라떼.jpg",
    desc:
      "기존 아이스 카페라떼 보다 한층 더 깊고 진한 에스프레소와 얼음, 우유의 부드러운 조화.",
    category: "coffee",
    kcal: 105,
    ml: 355,
    sugar: 9,
    caffeine: 198
  },
  {
    title: "아이스 에스프레소",
    src: "https://www.coffeebeankorea.com/data/menu/아이스에스프레소.jpg",
    desc: "진한 에스프레소와 얼음.",
    category: "coffee",
    kcal: 5,
    ml: 355,
    sugar: 0,
    caffeine: 297
  },
  {
    title: "망고 바나나 아이스 블렌디드",
    src:
      "https://www.coffeebeankorea.com/data/menu/망고바나나-아이스블렌디드.jpg",
    desc: "새콤달콤한 망고와 신선한 고산지바나나와 얼음의 블렌드",
    category: "smoothie",
    kcal: 408,
    ml: 355,
    sugar: 52,
    caffeine: 0
  },
  {
    title: "유자 캐모마일 아이스 블렌디드",
    src:
      "https://www.coffeebeankorea.com/data/menu/유자-캐모마일-아이스-블렌디드.jpg",
    desc: "새콤달콤한 레몬 유자 캐모마일 티와 얼음의 블렌드.",
    category: "smoothie",
    kcal: 323,
    ml: 355,
    sugar: 78,
    caffeine: 0
  },
  {
    title: "후레쉬 망고 아이스 블렌디드",
    src: "https://www.coffeebeankorea.com/data/menu/후레쉬망고.jpg",
    desc: "달콤한 망고와 얼음, 물의 블렌드.",
    category: "smoothie",
    kcal: 214,
    ml: 355,
    sugar: 53,
    caffeine: 0
  },
  {
    title: "베리베리 아이스 블렌디드",
    src:
      "https://www.coffeebeankorea.com/data/menu/후레쉬-망고-아이스-블렌디드.jpg",
    desc: "상큼한 베리믹스와 얼음의 블렌드",
    category: "smoothie",
    kcal: 226,
    ml: 355,
    sugar: 61,
    caffeine: 0
  },
  {
    title: "그린티 아이스 블렌디드",
    src:
      "https://www.coffeebeankorea.com/data/menu/그린티23-아이스-블렌디드.jpg",
    desc: "마차 그린티 파우더와 얼음, 저지방 우유의 블렌드.",
    category: "smoothie",
    kcal: 310,
    ml: 355,
    sugar: 45,
    caffeine: 76
  },
  {
    title: "퓨어 바닐라 아이스 블렌디드",
    src:
      "https://www.coffeebeankorea.com/data/menu/퓨어-23바닐라-아이스-블렌디드.jpg",
    desc: "프렌치 디럭스 바닐라 파우더와 얼음, 저지방 우유의 블렌드.",
    category: "smoothie",
    kcal: 310,
    ml: 355,
    sugar: 53,
    caffeine: 0
  },
  {
    title: "퓨어 더블 초코렛 아이스 블렌디드",
    src:
      "https://www.coffeebeankorea.com/data/menu/퓨어-더블-초코렛-아이스-블렌디드.jpg",
    desc: "다크 쵸코렛 파우더와 얼음, 저지방 우유의 블렌드.",
    category: "smoothie",
    kcal: 300,
    ml: 355,
    sugar: 55,
    caffeine: 18
  },
  {
    title: "겐마이차 그린",
    src: "https://www.coffeebeankorea.com/data/menu/겐마이차-그린.jpg",
    desc:
      "일본산 특제품으로 일본산 그린 센차, 구운 쌀, 튀긴 옥수수와 함께 혼합  되어 만들어 집니다. 센차 잎은 우아하고 향기로운 맛을 선사하며,   구운쌀은 천연의 단맛을 끝까지 지속시켜 줍니다.",
    category: "tea",
    kcal: 5,
    ml: 355,
    sugar: 1,
    caffeine: 38
  },
  {
    title: "작설",
    src: "https://www.coffeebeankorea.com/data/menu/작설.jpg",
    desc:
      "지리산 화개지방의 최고급 유기농 야생 녹차로 곡우절에 채취한 어린  찻잎으로 만들어 집니다. 입안가득 퍼지는 어린 찻잎의 싱그럽고 은은한  향과 구수한 맛이 완벽한 조화를 이루어 냅니다.",
    category: "tea",
    kcal: 5,
    ml: 355,
    sugar: 1,
    caffeine: 8
  },
  {
    title: "프래그런트 나이트 쟈스민",
    src:
      "https://www.coffeebeankorea.com/data/menu/프래그런트-나이트-쟈스민.jpg",
    desc: "",
    category: "tea",
    kcal: 5,
    ml: 355,
    sugar: 1,
    caffeine: 36
  },
  {
    title: "모로칸 민트",
    src: "https://www.coffeebeankorea.com/data/menu/모로칸-민트.jpg",
    desc:
      "최상의 건 파우더 차에 향기로운 페퍼민트 오일을 가향하여 만들어 집니다.  이 상쾌한 차는 18세기 카사블랑카의 차 상인들에 의해 개발된 전통적인   제조법을 따르고 있으며 소화를 돕는 것으로 알려져 있습니다.",
    category: "tea",
    kcal: 5,
    ml: 355,
    sugar: 1,
    caffeine: 109
  }
];

// 배너
// "https://www.coffeebeankorea.com/data/banner/main_%EB%B3%80%EA%B2%BD.jpg"
// "https://www.coffeebeankorea.com/data/banner/%EC%98%A8%EB%9D%BC%EC%9D%B8_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_2.jpg"

// 로고
// https://mblogthumb-phinf.pstatic.net/20160606_265/ppanppane_14652091945895rhj8_PNG/%C4%BF%C7%C7%BA%F3%B7%CE%B0%ED_%282%29.png?type=w800

// 원두
const beans = [
  {
    title: "Colombia 8oz",
    src: "https://www.coffeebeankorea.com/data/productimages/a/3/1810511000.jpg"
  },
  {
    title: "Sumatra Dark 8oz",
    src: "https://www.coffeebeankorea.com/data/productimages/a/3/1845011000.jpg"
  },
  {
    title: "Costarica 8oz",
    src: "https://www.coffeebeankorea.com/data/productimages/a/3/1811011000.jpg"
  },
  {
    title: "Kenya 8oz",
    src: "https://www.coffeebeankorea.com/data/productimages/a/3/1813511000.jpg"
  },
  {
    title: "Papua Newguinea 8oz",
    src: "https://www.coffeebeankorea.com/data/productimages/a/3/1814511000.jpg"
  },
  {
    title: "Mocha Java 8oz",
    src: "https://www.coffeebeankorea.com/data/productimages/a/3/1843011000.jpg"
  }
];

// 원두 설명
// A PERFECT CUP OF COFFEE, EVERY TIME-
// ‘Fresh roast daily’는 창립자 허버트 하이먼과 모나 하이먼이 처음으로 개점했던 캘리포니아
// 브렌트우드에서 커피를 가공한 이후로 면면히 이어져오는 저희의 모토입니다. 최상의 신선도와
// 탁월한 맛을 즐길 수 있도록 최고의 포장 상태를 유지하여 갓 볶아낸 신선함 그대로 제공 드리고 있습니다.
