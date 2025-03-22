let num1 = prompt("Birinci ədədi daxil edin:");
let num2 = prompt("İkinci ədədi daxil edin:");
let operator = prompt("Əməliyyati daxil edin (+, -, *, /):");

switch (operator) {
    case "+":
        console.log("Nəticə: " + (num1 + num2));
        break;
    case "-":
        console.log("Nəticə: " + (num1 - num2));
        break;
    case "*":
        console.log("Nəticə: " + (num1 * num2));
        break;
    case "/":
        if (num2 === 0) {
            console.log("Sifira bölmək mümkün deyil!");
        } else {
            console.log("Nəticə: " + (num1 / num2));
        }
        break;
    default:
        console.log("Daxil etdiyiniz operator yanlişdir.");
}