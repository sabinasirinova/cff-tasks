let num1 = Number(prompt("Birinci ədədin dəyərini daxil edin:"));
let num2 = Number(prompt("İkinci ədədin dəyərini daxil edin:"));
let num3 = Number(prompt("Üçüncü ədədin dəyərini daxil edin:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Ən böyük ədəd: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Ən böyük ədəd: " + num2);
} else {
    console.log("Ən böyük ədəd: " + num3);
}
let maxNum = Math.max(num1, num2, num3);
console.log("Ən böyük ədəd: " + maxNum);