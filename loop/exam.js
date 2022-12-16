// 아래의 배열이 있습니다.
// 배열의 값을 2배로 늘려서 넣어 주세요
const array = [1, 2, 3, 4, 5];
const array2 = array.map((value) => {
  return value * 2;
});
console.log(array2);

// 아래의 배열이 있습니다.
// 배열의 값을 li로 감싸고 ul에 넣어주세요
const array = [1, 2, 3, 4, 5];
const array2 = array.map((element) => {
  return <li>{element}</li>;
});
const numberItem = <ul>{array2}</ul>;
