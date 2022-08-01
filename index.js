let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));
console.log(buttons);

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = " ";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
