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



// динозавр





const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");



document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});

const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 700);
};

console.log(parseInt(window.getComputedStyle(dino).getPropertyValue("top")));
// console.log(dino.style.top);

// jump();

const dinoGame = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
console.log("Game over!");
  }
}, 100);


// 3 числа


const frst = document.getElementById("1_of_3");
const scnd = document.getElementById("2_of_3");
const thrd = document.getElementById("3_of_3");
const answ = document.getElementById("par")

frst.addEventListener("input", findMaxNumber)
scnd.addEventListener("input", findMaxNumber);
thrd.addEventListener("input", findMaxNumber);



function findMaxNumber() {
  const num1 = Number(frst.value);
  const num2 = Number(scnd.value);
  const num3 = Number(thrd.value);


  let maxNumber = num1;
  if (num2 > maxNumber) {
    maxNumber = num2;
  }
  if (num3 > maxNumber) {
    maxNumber = num3;
  }

  answ.textContent = "Найбільше, число, яке Ви написали - " + maxNumber;
}




// слайдер

let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlidePosition() {
  const slideWidth = document.querySelector('.slide').clientWidth;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}




document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    prevSlide();
  } else if (event.key === 'ArrowRight') {
    nextSlide();
  }
});


// вчені



const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const btn1 = document.getElementById("button1")
btn1.addEventListener("click", nineteenth)

const div = document.querySelector(".photos_gallery");


function nineteenth() {
  const res = scientists.filter((item) => item.born > 1800 && item.born < 1901)
  const render = renderHTML(res)
  div.insertAdjacentHTML('beforeend', render)
}

function renderHTML(arr) {
  div.innerHTML = '';
  return arr.map((item) => `<div class="sc_img"><p>${item.name} ${item.surname}</p><p>${item.born}-${item.dead}</p></div>`).join(" ")
}

const btn2 = document.getElementById("button2")
btn2.addEventListener("click", alphabet)


function alphabet() {
  const res = scientists.map((item) => item).sort((a, b) => a.name.localeCompare(b.name))
  const render = renderHTML(res)
  div.insertAdjacentHTML('beforeend', render)
}

const btn3 = document.getElementById("button3")
btn3.addEventListener("click", byYears)

function byYears(){
  const res = scientists.map((item) => item).sort((a, b) => (b.dead - b.born)-(a.dead-a.born))
  const render = renderHTML(res)
  div.insertAdjacentHTML('beforeend', render)}



const btn8 = document.getElementById("button8")
btn8.addEventListener("click", lessMore)

function lessMore() {
  let array = [];
  const res = scientists.map((item) => item).sort((a, b) => (b.dead - b.born) - (a.dead - a.born))
  array.push(res[res.length - 1], res[0])
  const render = renderHTML(array)
  div.insertAdjacentHTML('beforeend', render)
}


const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", lastbornPerson);

function lastbornPerson() {
  const LastBorn = scientists.sort((a, b) => b.born - a.born)
  const sintens = LastBorn[
    0
  ];

  const render = renderHTML([sintens]);
    div.insertAdjacentHTML('beforeend', render)
}
