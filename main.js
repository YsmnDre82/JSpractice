var browser = prompt("please enter your computer browser:");

switch (browser) {
    case "edge":
        alert("you've got the Edge!");
        break;
    case "Chrom":    // if (browser == "Chrome" // browser == "FireFox"){}
    case "FireFox":
    case "Safari":
    case "Opera":
        alert("Okay we support these browsers too");
    default:
        alert("we hope tjat this page looks OK!")
        break;
}