/**
 * 맵드 타입
 *
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 인터페이스에서 사용할 수 ❌
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "이진희",
    age: 30,
  };
}

const user = fetchUser();
// user.id = 1;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "이진희",
  age: 28,
});
