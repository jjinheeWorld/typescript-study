// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1; 에러 발생❗️
// a = "hello"; 에러 발생❗️

// 오직 undefined만 담을 수 있다!
a = undefined;
// 예외적으로, strictNullChecks를 false 처리하면 null도 가능
// a = null;

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// never는 어떠한 값도 저장할 수 없음. any도 마찬가지
// b = 1; 에러 발생❗️
// b = {}; 에러 발생❗️
// b = ""; 에러 발생❗️
// b = undefined; 에러 발생❗️

// strictNullChecks를 false 처리해도 에러 발생❗️
// b = null; 에러 발생❗️
