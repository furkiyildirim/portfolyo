// const text = [`Connecting to remote server...\n`,`Authorization successful.\n\n`, `Welcome to the Terminal.\n\n`,`Type "help" to get started.\n\n`];
const output = document.getElementById('outputs')
const text = ["I'm still working on this project\n",]
function connectingTerminal() {
  function typeLine(lineIndex) {
    const spn = document.createElement('span');
    spn.setAttribute('class', 'output-element');
    output.appendChild(spn);
    
    let charIndex = 0;
    function typeChar() {
      if (charIndex < text[lineIndex].length) {
        spn.innerHTML += text[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeChar, 50); // Adjust the delay as needed (e.g., 50 milliseconds)
      } else {
        // Move to the next line if there are more lines
        if (lineIndex < text.length - 1) {
          setTimeout(() => typeLine(lineIndex + 1), 1000); // Delay between lines (e.g., 1000 milliseconds)
        }
      }
    }

    typeChar();
  }
  // Clear existing content before typing
  output.innerHTML = '';

  // Add the entire text to the output element
  // for (let i = 0; i < text.length; i++) {
  //   const spn = document.createElement('span');
  //   spn.setAttribute('class', 'output-element');
  //   spn.innerHTML = text[i];
  //   output.appendChild(spn);
  // }

  // Start typing from the first line
  typeLine(0);
}
connectingTerminal()

// connectingTerminal()
function userIp(){
  const e = document.getElementById('label-input')
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => e.innerHTML = `${data.ip}` + "@guest>")
  .then(return data.ip);
}
userIp()

function sendCommand(e){
  const outputs = document.getElementById('outputs')
  e = e || window.event;
  if (e.keyCode === 13){
    var spanElement = document.createElement("span");
    const input = document.getElementById('inner-input')
    spanElement.className = "output-element";
    spanElement.textContent = userIp()+'@guest'+input.value;
    outputs.appendChild(spanElement, outputs.firstChild);
    if (input.value === "cls"){
      commands['cls']()
    }
    input.value = ""
  }
}

const commands = {
  "cls": () => {
    const list = document.getElementById("outputs");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }
}
