let num = parseInt(prompt("Bir ədəd daxil edin:"));
let hasil = 1; 

for (let i = 1; i <= num; i++) {
    hasil *= i;
}

console.log(`1-dən ${num}-ə qədər olan ədədlərin hasili: ${hasil}`);
