// const themeToggle = document.getElementById('theme-toggle');

// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('light');
//   document.body.classList.toggle('dark');
// });

let modal = document.getElementById("myModal");
  let modal2 = document.getElementById("modal2");
  let openModalBtn = document.getElementById("openModalBtn");
  let closeBtns = document.querySelectorAll(".close");
  let submitBtn = document.getElementById("submitName");


const loginUserName = document.querySelector("#userNameHeader");


  openModalBtn.onclick = function() {
    modal.style.display = "block";
  }

  closeBtns.forEach(function(btn) {
    btn.onclick = function() {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
  });

  submitBtn.onclick = function() {
    let userName = document.getElementById("userNameInput").value;
    if (userName.trim() !== "") {
      modal.style.display = "none";
      modal2.style.display = "block";
      console.log(userName);
      loginUserName.textContent = userName;
    } else {
      alert("Будь ласка, введіть ваше ім'я.");
    }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
}
  





// калькулятор


const inp = document.querySelector(".inp1");
const buttonPlus = document.querySelector(".button1");
const buttonMinus = document.querySelector(".button2");
const buttonMno = document.querySelector(".button3");
const buttonDil = document.querySelector(".button4");
const buttonDor = document.querySelector(".butonn");
const inp2 = document.querySelector(".inp2");
const inp3 = document.querySelector(".inp3");
const form = document.querySelector(".form1");

form.addEventListener("submit", submitCheck);
form.addEventListener("click", onclick);

function submitCheck(event) {
  event.preventDefault();
  const valueinp1 = parseFloat(form.elements.inp11.value);
  const valueinp2 = parseFloat(form.elements.inp22.value);
  let result;
  if (event.submitter === buttonPlus) {
    result = valueinp1 + valueinp2;
  } else if (event.submitter === buttonMinus) {
    result = valueinp1 - valueinp2;
  } else if (event.submitter === buttonMno) {
    result = valueinp1 * valueinp2;
  } else if (event.submitter === buttonDil) {
    result = valueinp1 / valueinp2;
  }
  inp3.value = result;
}

function onclick(event) {
  console.log(event.target.nodeName === "BUTTON");
}







///-------------------------------------------------------------------------------------year------------------------------------------------------------------------------------------



const yearInput = document.getElementById('year-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const year = parseInt(yearInput.value);

  if (year.toString().length !== 4) {
    result.textContent = '';
    return;
  }

  const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

  if (isLeapYear) {
    result.textContent = `Ви народилися у високосний рік! `;
  } else {
    result.textContent = `Ви народилися не у високосний рік!`;
  }
});


// вгадай число


const inputNumber = document.querySelector(".number-input");
const submitButton = document.querySelector(".submit-button");
const numberResult = document.querySelector(".number-result");

submitButton.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = parseInt(inputNumber.value);
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (userGuess === randomNumber) {
    numberResult.textContent = "Вітаю, ви вгадали число!";
  } else {
    numberResult.textContent = `Ви програли. Комп'ютер загадав число ${randomNumber}.`;
  }
  
  // Очистимо поле вводу після кожної спроби
  inputNumber.value = "";
}






// камінь ножиці папір


const cut = document.querySelector("#cut");

const stone = document.querySelector("#stone");

const papar = document.querySelector("#papar");


const computerOutput = document.querySelector(".p-computer span");


const yourOutput = document.querySelector(".p-You span");


const winerOutput = document.querySelector(".p-winer");


const scoreText = document.querySelector(".p-rahunok");



let computerScore = 0;
let yourScore = 0;

cut.addEventListener("click", function() {
    playGame("Ножиці");
});

stone.addEventListener("click", function () {
    playGame("Камінь");
});

papar.addEventListener("click", function() {
    playGame("Папір");
});

function playGame(userChoice) {
    const options = ["Ножиці", "Камінь", "Папір"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    
    computerOutput.textContent = computerChoice;
    yourOutput.textContent = userChoice;


    
    if (userChoice === computerChoice) {
        winerOutput.textContent = "Нічия!";
    } else if (
        (userChoice === "Ножиці" && computerChoice === "Папір") ||
        (userChoice === "Камінь" && computerChoice === "Ножиці") ||
        (userChoice === "Папір" && computerChoice === "Камінь")
    ) {
        winerOutput.textContent = "Ви виграли!";
        yourScore++;
    } else {
        winerOutput.textContent = "Ви програли!";
        computerScore++;
    }

}

// калькулятор часу


const time_calc_input = document.getElementById("time_calc_input_id")

const time_calc_button = document.getElementById("time_calc_button_id")

time_calc_button.addEventListener("click", timeCalcOnClic)

const answear_input = document.getElementById("final_time")

function timeCalcOnClic() {
  const input_value = Number(time_calc_input.value)
  const final_functional_result = getIntoHours(input_value)
  answear_input.textContent = final_functional_result
}


function getIntoHours(min) {
  const result = Math.floor(min / 60)
  const final_result = min - (60 * result)
  return `${result}h and ${final_result}min`




}



// футбол


const football_field = document.getElementById("football_field");
const football = document.getElementById("football");

football_field.addEventListener("click", moveBall);

function moveBall(event) {
  const field_rect = football_field.getBoundingClientRect();

  const field_width = field_rect.width;
  const field_height = field_rect.height;

  const ball_radius = football.clientWidth / 2;

  const field_offset_left = field_rect.left;
  const field_offset_top = field_rect.top;

  const mouse_x = event.clientX - field_offset_left;
  const mouse_y = event.clientY - field_offset_top;

  const new_x = Math.max(ball_radius, Math.min(mouse_x - ball_radius, field_width - ball_radius));
  const new_y = Math.max(ball_radius, Math.min(mouse_y - ball_radius, field_height - ball_radius));

  football.style.transform = `translate(${new_x}px, ${new_y}px)`;
}

