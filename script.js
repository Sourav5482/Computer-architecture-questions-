const quizData = [
  { question: "The binary equivalent of the decimal number 25 is:", options: ["11011", "11001", "10101", "10011"], answer: "11001" },
  { question: "The hexadecimal equivalent of the binary number 101101 is:", options: ["2D", "1B", "3C", "4F"], answer: "2D" },
  { question: "Which of the following is not a valid binary number?", options: ["10101", "11010", "10211", "01101"], answer: "10211" },
  { question: "The output of an AND gate is 1 only when:", options: ["All inputs are 1", "Any one input is 1", "Any one input is 0", "All inputs are 0"], answer: "All inputs are 1" },
  { question: "Which logic gate gives an output of 1 when any one of its inputs is 1?", options: ["AND", "NOR", "OR", "NAND"], answer: "OR" },
  { question: "The universal gates in digital logic are:", options: ["AND and OR", "NOR and NAND", "XOR and XNOR", "NOT and AND"], answer: "NOR and NAND" },
  { question: "A half adder consists of:", options: ["AND and OR gates", "XOR and AND gates", "NOR and XOR gates", "NAND and OR gates"], answer: "XOR and AND gates" },
  { question: "The number of select lines required for an 8:1 multiplexer is:", options: ["2", "3", "4", "8"], answer: "3" },
  { question: "A demultiplexer takes:", options: ["Multiple inputs and produces a single output", "A single input and produces multiple outputs", "Multiple inputs and produces multiple outputs", "A single input and produces a single output"], answer: "A single input and produces multiple outputs" },
  { question: "The main difference between a latch and a flip-flop is:", options: ["Latch is faster than flip-flop", "Flip-flop is level-triggered, latch is edge-triggered", "Flip-flop is edge-triggered, latch is level-triggered", "Both work the same way"], answer: "Flip-flop is edge-triggered, latch is level-triggered" },
  { question: "A JK Flip-Flop avoids the problem of:", options: ["Race condition in SR Flip-Flop", "Propagation delay", "Clock synchronization", "Hold time violation"], answer: "Race condition in SR Flip-Flop" },
  { question: "A T Flip-Flop toggles its state when:", options: ["Input is 0", "Input is 1", "Clock is low", "Input is X (don’t care)"], answer: "Input is 1" },
  { question: "How many flip-flops are needed for a 4-bit binary counter?", options: ["1", "2", "3", "4"], answer: "4" },
  { question: "ROM is:", options: ["Read-Only Memory", "Random-Only Memory", "Read-On Mode", "Randomized Output Memory"], answer: "Read-Only Memory" },
  { question: "The full form of RAM is:", options: ["Read-Accessible Memory", "Random-Access Memory", "Rapid-Application Memory", "Read-Available Memory"], answer: "Random-Access Memory" },
  { question: "Cache memory is used to:", options: ["Store permanent data", "Provide high-speed data access", "Store input/output data", "Reduce ROM usage"], answer: "Provide high-speed data access" },
  { question: "In volatile memory, data is:", options: ["Retained permanently", "Lost when power is off", "Stored for a limited time", "Stored in secondary storage"], answer: "Lost when power is off" },
  { question: "The binary equivalent of the decimal number 58 is:", options: ["111011", "111010", "110111", "101111"], answer: "111010" },
  { question: "The hexadecimal equivalent of the binary number 11111010 is:", options: ["FA", "F9", "FB", "F8"], answer: "FA" },
  { question: "The minimum number of NAND gates required to implement an AND gate is:", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "A truth table for a NOT gate has how many rows?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "The output of a NAND gate is 1 when:", options: ["Any input is 1", "Both inputs are 1", "Both inputs are 0", "All inputs are 0"], answer: "Both inputs are 0" },
  { question: "A full adder adds:", options: ["Two bits and carry-in", "One bit and carry-in", "Two bits", "One bit"], answer: "Two bits and carry-in" },
  { question: "The main purpose of a multiplexer is to:", options: ["Select one of many inputs", "Combine multiple inputs into one output", "Increase the number of inputs", "Store data"], answer: "Select one of many inputs" },
  { question: "A D Flip-Flop is used to store:", options: ["A single bit of data", "Multiple bits of data", "Clock pulse", "Address"], answer: "A single bit of data" },
  { question: "The function of an OR gate is to:", options: ["Give 1 when both inputs are 0", "Give 1 when at least one input is 1", "Give 0 when both inputs are 0", "Give 1 when both inputs are 1"], answer: "Give 1 when at least one input is 1" },
  { question: "The number of outputs for a 4-to-1 multiplexer is:", options: ["1", "2", "3", "4"], answer: "1" },
  { question: "In an SR latch, when both inputs are 1:", options: ["The latch is set", "The latch is reset", "The output is undefined", "The latch holds its state"], answer: "The output is undefined" },
  { question: "In a 3-to-8 decoder, how many outputs are active at a time?", options: ["1", "2", "3", "8"], answer: "1" },
  { question: "A shift register is used to:", options: ["Store data", "Shift data", "Add data", "Multiply data"], answer: "Shift data" },
  { question: "The full form of ALU is:", options: ["Arithmetic Logic Unit", "Arithmetic Logical Unit", "Array Logic Unit", "All Logic Unit"], answer: "Arithmetic Logic Unit" },
  { question: "The logic gate that produces an output of 0 only when both inputs are 0 is:", options: ["OR", "NOR", "NAND", "AND"], answer: "NOR" },
  { question: "The purpose of a buffer in digital electronics is to:", options: ["Increase the voltage", "Invert the input", "Store data", "Isolate components"], answer: "Isolate components" },
  { question: "The binary equivalent of the decimal number 12 is:", options: ["1010", "1100", "1110", "1001"], answer: "1100" },
  { question: "Which of the following is a combinational circuit?", options: ["Flip-Flop", "Adder", "Latch", "Counter"], answer: "Adder" },
  { question: "The output of an XOR gate is 1 when:", options: ["Both inputs are 1", "Both inputs are 0", "One input is 0 and the other is 1", "Both inputs are 0 or both are 1"], answer: "One input is 0 and the other is 1" },
  { question: "A half subtractor can perform:", options: ["Subtraction of two bits", "Addition of two bits", "Multiplication of two bits", "Division of two bits"], answer: "Subtraction of two bits" },
  { question: "The number of address lines required for a 16x1 RAM is:", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "The output of an XOR gate is 0 when:", options: ["Both inputs are 1", "Both inputs are 0", "One input is 0 and the other is 1", "Both inputs are different"], answer: "Both inputs are 0" },
  { question: "How many flip-flops are needed for a 3-bit binary counter?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "The purpose of a decoder is to:", options: ["Encode inputs", "Store inputs", "Decode binary information", "Add inputs"], answer: "Decode binary information" },
  { question: "Which gate is used for a NOT operation?", options: ["AND", "OR", "NOT", "XOR"], answer: "NOT" },
  { question: "The output of an AND gate is 1 when:", options: ["Any input is 0", "Both inputs are 0", "Both inputs are 1", "Any input is 1"], answer: "Both inputs are 1" },
  { question: "A 16-bit register can store:", options: ["1 bit", "8 bits", "16 bits", "32 bits"], answer: "16 bits" },
  { question: "The number of input lines required for a 16:1 multiplexer is:", options: ["8", "10", "12", "16"], answer: "16" },
  { question: "The output of a NAND gate is 0 when:", options: ["Both inputs are 0", "Both inputs are 1", "Any input is 1", "Any input is 0"], answer: "Both inputs are 1" },
  { question: "The full form of VHDL is:", options: ["Very High Data Language", "Very High Definition Language", "Very High Design Language", "Very High Description Language"], answer: "Very High Description Language" },
  { question: "Which type of memory is used in cache?", options: ["ROM", "RAM", "EPROM", "FLASH"], answer: "RAM" },
  { question: "A multiplexer with 4 inputs requires how many select lines?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "Which logic gate gives an output of 1 only when both inputs are 1?", options: ["AND", "OR", "XOR", "NAND"], answer: "AND" },
  { question: "The number of output lines for a 1-to-4 demultiplexer is:", options: ["1", "2", "3", "4"], answer: "4" },
  { question: "The main use of a flip-flop is to:", options: ["Store a bit", "Perform arithmetic operations", "Perform logical operations", "Count events"], answer: "Store a bit" },
  { question: "The output of a NOR gate is:", options: ["1 when both inputs are 1", "1 when at least one input is 0", "0 when both inputs are 0", "0 when both inputs are 1"], answer: "0 when both inputs are 0" },
];
// Function to load questions dynamically
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
  let output = "";
  quizData.forEach((q, index) => {
    output += `
            <div class="question">${index + 1}. ${q.question}</div>
            <div class="options">
                ${q.options.map(opt => `
                    <label>
                        <input type="radio" name="q${index}" value="${opt}"> ${opt}
                    </label>
                `).join('')}
            </div>
        `;
  });
  quizContainer.innerHTML = output;
}

// Function to check answers, highlight correct/incorrect ones, and show score
function checkAnswers() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    const options = document.getElementsByName(`q${index}`);

    if (selectedOption && selectedOption.value === q.answer) {
      score++;
      selectedOption.parentElement.classList.add('correct');
    } else {
      for (let option of options) {
        if (option.value === q.answer) {
          option.parentElement.classList.add('correct');
        }
      }
      if (selectedOption) {
        selectedOption.parentElement.classList.add('incorrect');
      }
    }
  });
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

submitButton.addEventListener("click", checkAnswers);

loadQuiz();
