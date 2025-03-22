let userInput = prompt("Zəhmət olmasa bir söz daxil edin:").toLowerCase();

switch (userInput) {
    case "user":
        console.log("Xoş gəldin, istifadəçi!");
        break;
    case "admin":
        console.log("Xoş gəldin, admin!");
        break;
    case "guest":
        console.log("Xoş gəldin, qonaq!");
        break;
    default:
        console.log("Naməlum istifadəçi!");
}