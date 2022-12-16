// // for문 vs forEach문 vs map

// const array = [1, 2, 3, 4, 5];

// // for문은 순차적으로 실행할 때 주로 사용이 됩니다.
// // break; 를 사용 할 수 있습니다.
// // for (let i = 0; i < array.length; i++) {
// //   console.log(array[i]);
// // }

// // forEach문은 배열안에 요소를 하나씩 꺼내와서 사용할 때 사용이 됩니다.
// // break; 를 사용 할 수 없습니다.
// // array.forEach((value, index, array) => {
// //   console.log(value, index, array);
// // });

// let answer = 0;
// array.forEach((value, index) => {
//   value = value * 2;
//   // console.log(`${index}번째에 있는 값은 ${value}입니다.`);
// });
// // console.log(array);

// // map은 return을 해 줍니다.
// // 기존 배열과 다른 새로운 배열을 return
// // 기존 배열에서 값을 추가하거나 아니면 변형 할 때 사용이 됩니다.
// // map은 기존 배열을 복사해서 사용하기 때문에 기존 배열에 뭔가 변경점이 생기지 않아요.
// let array2 = array.map((value) => {
//   console.log(value);
//   return value + 1;
// });
// console.log(array2);

// const number = [1, 2, 3, 4, 5];
// const listItem = number.map((number) => {
//   return <li>{number}</li>;
// });
// <ul>listItem</ul>;

// const todo = ["점심먹기", "저녁먹기", "간식먹기", "야식먹기"];
// const todoItem = todo.map((element) => {
//   return <li>{element}</li>;
// });
// // let todoItem = []
// // todo.forEach((element) => {
// //   todoItem.push(<li>{element}</li>)
// // })
// <ul>listItem</ul>;

// const array = [1, 2, 3, 4, 5];
// const array2 = array.map((value) => {
//   return value;
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const array = [
//   { id: "1", name: "김", nick: "김씨" },
//   { id: "2", name: "이", nick: "이씨" },
//   { id: "3", name: "최", nick: "최씨" },
//   { id: "4", name: "박", nick: "박씨" },
// ];

// function ClientList(props) {
//   return <ul>{props.clientList}</ul>;
// }
// const array2 = [];
// for (let i = 0; i < array.length; i++) {
//   array2.push(
//     <li>{`${array[i].id}번의 이름은 ${array[i].name}이고 닉네임은 ${array[i].nick}입니다`}</li>
//   );
// }

// root.render(<ClientList clientList={array2} />);

for (초기값; 어디까지; 증가, 감소) {
    횟수로만 돌기(반복만 한다) 때문에 별도에 변수나 배열 객체에 직접 접근을 해야합니다.
    array[i] <- 값 가지고 오기 위해서
  }
  
  const array = [1,2,3,4,5]
  Array(배열).forEach((value/*값*/, index/*인덱스*/, array/*원본*/ ) => {
    value = value * 2
  })
  
  const arrat2 = Array(배열).map((value/*값*/, index/*인덱스*/, array/*원본*/ ) => {
    // forEach랑 다른점은 map에서 return한 값이 모여서 특정 변수에 선언할 수 있다!
    return value * 2
  })