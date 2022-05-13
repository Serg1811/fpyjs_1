document.write("Отгадайте загаданное число.");
while (true) {
let n = Math.floor(Math.random() * 1000);
let enteredNumber = prompt("Введите число от 0 до 999  (для выхода введите 'q'): ");

console.log("Загаданное число: ", n);
console.log("Введённое число", enteredNumber);
if (enteredNumber === "q") {
    alert("Досвидания.");
    break;
}
if (isNaN(enteredNumber)) {
    alert(`Вы ввели не число.`);
} else if (! enteredNumber) {
    alert("Вы не чего не ввели.");    
} else if ((enteredNumber < 0) || (enteredNumber > 999)) {
    alert("Число не входит в диапазон от 0 до 999.");
} else if (n == enteredNumber) {
    alert(`Вы угодали загаданное число: ${n}`);
} else {
        alert(`Вы не угодали загаданное число: ${n}`);
}
}