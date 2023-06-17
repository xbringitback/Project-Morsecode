const morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: " " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
  { letter: ".", morseCode: ".-.-.-"},
  { letter: "(", morseCode: "-.--."},
  { letter: ":", morseCode: "---..."},
  { letter: "+", morseCode: ".-.-."},
  { letter: '"', morseCode: ".-..-."},
  { letter: ",", morseCode: "--..--"},
  { letter: "!", morseCode: "-.-.--"},
  { letter: ")", morseCode: "-.--.-"},
  { letter: ";", morseCode: "-.-.-."},
  { letter: "-", morseCode: "-....-"},
  { letter: "$", morseCode: "...-..-"},
  { letter: "?", morseCode: "..--.."},
  { letter: "/", morseCode: "-..-."},
  { letter: "&", morseCode: ".-..."},
  { letter: "=", morseCode: "-...-"},
  { letter: "_", morseCode: "..--.-"},
  { letter: "@", morseCode: ".--.-."},
  { letter: "'", morseCode: ".----."}
  
];

console.log(morseAlphabet);

const btn = document.querySelector(".btn");
const output = document.querySelector(".outputCode");
const outputExp = document.querySelector(".outputExplanation");
const inputField = document.querySelector("#input");

const deleteBtn = document.querySelector(".deleteBtn");

btn.addEventListener("click", () => {
  convertInputToMorse();
});

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertInputToMorse();
  }
});

deleteBtn.addEventListener("click", () => {
  inputField.value = "";
  output.innerHTML = "";
  outputExp.innerHTML = "";
})

function convertInputToMorse() {
  const inputText = inputField.value.toUpperCase();
  let outputText = "";
  let outputExpText = "";

  for (let i = 0; i < inputText.length; i++) {
    let letter = inputText[i];
    console.log(letter);

    const morseLetter = morseAlphabet.find((item) => item.letter === letter);

    if (morseLetter) {
      outputText += morseLetter.morseCode + " ";
      outputExpText += `${morseLetter.letter}`;
      if (letter !== " ") {
        outputExpText += ` = ${morseLetter.morseCode}`;
      }
      outputExpText += ` / `;
    }
    if (letter === " ") {
      outputText += "/";
    }
  }
  output.innerHTML = outputText;
  outputExp.innerHTML = ` ${outputExpText.toLowerCase()}`;
}