// geeting animals names and picture

const text = `camel bear cat chicken cow dog donkey elephant goat hedgehog penguin peacock turtle lion mouse`;
const splittedText = text.split(' ');
const src1 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e5943026be3aa3e9f19c99e_kids_english_animals_camel.png"
const src2 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e5942cd76f70e19fe5a10c9_kids_english_animals_bear.png"
const src3 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e59430ae125b7f4bf8a956a_kids_english_animals_cat.png"
const src4 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e59431fe4d3036eb1a0458b_kids_english_animals_chicken.png"
const src5 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e59432c647657ad14b56ab5_kids_english_animals_cow-p-500.png"
const src6 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e594353d3a720270ac2e9cd_kids_english_animals_dog.png"
const src7 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e594369462ea4b2fcda682f_kids_english_animals_donkey.png"
const src8 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e59439d3b4d5969bb9b6ff8_kids_english_animals_elephant.png"
const src9 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e5944f46041490a075de3c1_kids_english_animals_goat.png"
const src10 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e59450a6061f5eb5c6e4f50_kids_english_animals_hedgehog.png"
const src11 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e5945c376f70e035b5b032e_kids_english_animals_penguin.png"
const src12 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5efafb759a61b310040eff12_peacock-p-500.png"
const src13 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e5948433f44fd4044f9a30b_kids_english_animals_turtle-p-500.png"
const src14 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e59454de363054378bb7165_kids_english_animals_lion.png"
const src15 = "https://assets-global.website-files.com/5e4e48af45b75d848013007e/5e594570fbffd75726b6eed1_kids_english_animals_mouse.png"

//declaring  the variables targetting different html elements 
const resultImage = 'https://i.ibb.co/SXZpy4P/KIDS.jpg';
const imagesSources = [src1, src2, src3,src4,src5,src6,src7,src8, src9, src10, src11,src12,src13,src14,src15]
const svg = document.querySelector('.svig');
let images = document.querySelector('img');
const clockdown = document.querySelector('.countdown');
const game = document.querySelector('.game');
const startGame_btn = document.querySelector('.btn');
const text_element = document.querySelector('.text');
const input_element = document.querySelector('.input');
const word_element = document.querySelector('.word');

const score_element = document.querySelector('.score');
const time_left_element = document.querySelector('.time-left');
const wpm_element = document.querySelector('.wpm');


const game_ended_element = document.querySelector('.game-ended');
const game_ended_btn = document.querySelector('.game-ended-btn');
//declaring  variables that will store the score , the input value of the time left ,and the currentimgIndex
let imgcurrent = 1;
let current = 0;
let score = 0;
let time_left = 30;

let time_length = 30;

let interval;

startGame_btn.addEventListener('click', start_game);


//game start function (butoon )
function start_game() {
  images.src = src1;
  document.querySelector('.text').classList.add('hidden');
  document.querySelector('.inputs_form').classList.add('hidden');
  startGame_btn.classList.add('hidden');
  wpm_element.classList.add('hidden');
  score_element.classList.add('hidden');
  document.querySelector('#wpm').classList.add('hidden');
  document.querySelector('#timeleft').classList.add('hidden');
  document.querySelector('#score').classList.add('hidden');
//div element shown +input  getting focus 
  game.classList.remove('hidden');
  input_element.focus();
  //function that grab the next word and show it to u in screen
  word_element.innerText = getNextWord();
//function responsible for the countdown
  set_time();
}
//logic behind the input element and how it functions
input_element.addEventListener('keyup', (e) => {
  if (e.code == 'Enter') {
    if (input_element.value == word_element.innerText) {
      createSpanElement(input_element.value, 'correct');
      score++;
      score_element.innerText = score;
    } else {
      createSpanElement(input_element.value, 'incorrect');
    }
    input_element.value = '';

    word_element.innerText = getNextWord();
    images.src = getNextImage();
  }
});

function getNextWord() {
  current++;
  return splittedText[current - 1];
}
function getNextImage() {
  imgcurrent++;
  return imagesSources[imgcurrent - 1];
}
//function that create a span and stores in it the value of typed input wether its correct or false and 
//add  a class background that store the name assosiated of a class correct or incorrect +append the element on the page
function createSpanElement(typed_text, backround) {
  const span = document.createElement('span');
  span.innerText = typed_text;
  span.classList.add(backround);
  text_element.appendChild(span);
}
//countdown function 
function set_time() {
  interval = setInterval(start_interval, 1000);
}

function start_interval() {
  time_left--;
  time_left_element.innerText = time_left;

  let passed_time = time_length - time_left;
  wpm_element.innerText = (score / (passed_time / 60)).toFixed(2);

  if (time_left == 0) {
    game_ended();
    images.src = resultImage;
    keyboard_game.players.score = score_element.innerText;
  }
}
//logic that occur when the time is over and time left at 0 
function game_ended() {
 
  document.querySelector('.input-section').classList.add('hidden');
  document.querySelector('.text').classList.remove('hidden');
  game_ended_element.classList.remove('hidden');
  document.querySelector('#wpm').classList.remove('hidden');
  document.querySelector('#score').classList.remove('hidden');
  document.querySelector('.circle-wrap').classList.add('hidden');
  wpm_element.classList.remove('hidden');
  score_element.classList.remove('hidden');
  clearInterval(interval);
}
//reload button

game_ended_btn.addEventListener('click', () => window.location.reload());

