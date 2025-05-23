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

interface User {
  name: string;
  id: number;
}
const user: User = {
  name: "Hayes",
  id: 0,
};

console.log("user", user);
