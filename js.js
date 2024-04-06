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


// const inp = document.querySelector(".inp1");
// const buttonPlus = document.querySelector(".button1");
// const buttonMinus = document.querySelector(".button2");
// const buttonMno = document.querySelector(".button3");
// const buttonDil = document.querySelector(".button4");
// const buttonDor = document.querySelector(".butonn4");
// const inp2 = document.querySelector(".inp2");
// const inp3 = document.querySelector(".inp3");
// const form = document.querySelector(".form1");

// form.addEventListener("submit", submitCheck)
// form.addEventListener("click", onclick )

// function submitCheck(ivent) {
//   ivent.preventDefault()
//   const valueinp1 = form.elements.inp11.value;
//   const valueinp2 = form.elements.inp22.value;
//   console.log(Number(valueinp1) + Number(valueinp2));
// }

// function onclick(ivent) {
//   console.log(ivent.target.nodeName === "BUTTON");
// }



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


cut.addEventListener("click", function() {
console.log("ножиці");
});


console.log(cut);


stone.addEventListener("click", function () {
console.log("камінь");
});



console.log(stone);


papar.addEventListener("click",function() {
console.log("папір");
});

console.log(papar);


function computerrr() {
  console.log(Math.random() * 3); 
  Math.floor(Math.random() * 3);
  return Math.floor(Math.random() * 3);
}


console.log(computerrr());












