
let num = Number(prompt("Bir ədəd daxil edin:"));
let sum = 0; 

for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log(`1-dən ${num}-ə qədər olan ədədlərin cəmi: ${sum}`);
