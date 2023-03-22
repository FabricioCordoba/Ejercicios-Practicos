const str = '2024-07-21';

const date = new Date(str);
console.log(date); // 👉️ 2024-07-21T00:00:00.000Z

console.log(date.toDateString()); // 👉️ Sun Jul 21 2024
