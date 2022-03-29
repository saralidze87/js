const users = [11, 14, 18, 17, 22, 40, 1, 55];
let counter = 0;
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");
