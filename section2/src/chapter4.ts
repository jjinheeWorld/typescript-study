// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이진희",
  nickname: "찌니월드",
  birth: "1996.11.23",
  bio: "안녕하세요!",
  location: "경기도 성남시",
};

let user2: User = {
  id: 2,
  name: "코코몽",
  nickname: "코코몽월드",
  birth: "2012.12.25",
  bio: "안녕하세요!",
  location: "냉장고나라",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
