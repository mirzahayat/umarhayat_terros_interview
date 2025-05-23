// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(greet("terror"));

// for (var i = 0; i < 3; i++) {
//   ((i) =>
//     setTimeout(() => {
//       console.log(i);
//     }, 0))(i);
// }

// interface DebounceFunction {
//   (func: (...args: any[]) => void, delay: number): (...args: any[]) => void;
// }

// const debounce: DebounceFunction = (func, delay) => {
//   let timer: ReturnType<typeof setTimeout>;
//   return function (...args: any[]) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func(...args), delay);
//   };
// };

import _ from 'lodash';

interface User {
  name: string;
  id: number;
  isAdmin?: boolean;
  address: { city: string };
}
const user: User = {
  name: "Hayes",
  id: 0,
  isAdmin: true,
  address: { city: "Paris" }
};

const user2:any = {...user}

user2['address']['city'] = 'London';

console.log("user1", user);
console.log("user", user2);

const newCopy = JSON.parse(JSON.stringify(user));

newCopy['address']['city'] = 'Paris';

console.log("user1 new ", user);
console.log("user2 new", newCopy);


const newCopy2 = _.cloneDeep(user);

newCopy2['address']['city'] = 'USA';

console.log("user1 new2 ", user);
console.log("user2 new2", newCopy2);


