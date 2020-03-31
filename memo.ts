// Boolean => true and false
let isRun: boolean = false;

// Number  => js와 마찬가지로 ts에서도 모든 숫자를 부동소수점으로 숫자를 나타내는 타입이다.
let decimal: number = 5;
let hex: number = 0xff;

// String => ' or " 로 감싸서 사용
let fname: string = "kim";
let sname: string = "cheol su";

// Array
let list1: number[] = [1, 2, 3];
// or
let list2: Array<number> = [1, 2, 3];

// tuple
let point: [string, number];
point = ["string", 10];
// point = [ 10, "string" ]; // Error 순서 지켜야 한다.

// Enum
enum Color {
  red = 1,
  green,
  blue
}
let color: Color = Color.green;
console.log(color);

// Any(임의) => 말 그대로 아무거나 들어가는 타입으로 동적 컨텐츠를 컴파일 타입 검사에 통과하도록 해준다.
// 주로 JS로만 이루어져있는 라이브러리나, 기존 JS코드를 TS로 포팅할 때 유용하게 사용
let anyType: any = 1;
anyType = "this is string";
anyType = true;
console.log(anyType);

// void => no return
function log(msg: any): void {
  console.log(`Log: ${msg}`);
}
log("test message");

// null and undefined => 해당 타입들은 기본적으로 다른 모든 타입의 하위타입이여서 모든 타입에 null or undefined로 지정이 가능하다.
// 하지만 tsconf.json 파일에 --strictNullChecks라는 옵션이 켜져있으면 null을 할당할 때 에러 발생
// let aasdf: number = null;

// never => 절대 발생하지 않을 값의 유형을 나타낸다.
// ex) 절대 리턴이 되지 않는다던지 항상 예외값을 던져서 절대 반환을 하지 않는 경우
function error(message: string): never {
  throw new Error(message);
}

function forever(): never {
  while (true) {}
}

// object => 객체는 타입으로 정의되지 않는 타입으로 number, string, symbol, null or undefined가 아닌 다른 유형
let user: { name: string; age: number } = { name: "kim", age: 12 };
console.log(user.name);

// type alias => ts에서 이미 존재하는 타입에 다른 이름을 붙여서 간단하게 사용 가능하도록 만든 기능
type UNIQID = string | null;
function getUserID(id: UNIQID) {
  console.log(id);
}

getUserID("asdfeoo123welkf");
getUserID(null);
// getUserID(12); // 12는 할당할 수 없음

// 그 외에도 특정 커스텀 값으로도 사용 가능
type USER_TYPE = "TESTER" | "ADMIN";
let user_type: USER_TYPE = "ADMIN";
// user_type = "asdf"; // 할당 불가

// function
function func_point2(x: any, y: any) {
  return x + y;
}
let my_point = function(x: any, y: any) {
  return x + y;
};

function func_point(x: number, y: number): number {
  return x + y;
}

function optionPoint(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}
// rest parameter도 사용 가능
function cities(name: string, ...restName: string[]) {
  return `${name},${restName.join(",")}`;
}
let ourCities = cities("c1", "c2", "c3", "c4");
console.log(ourCities);
