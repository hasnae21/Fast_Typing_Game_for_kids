// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

const text = `buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tidewater dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they furry coats to protect them from the frost.`;
const splittedText = text.split(' ');
const src1 =
  'https://coloriage.info/images/ccovers/1604513863adorable-petit-chaton.jpg';
const src2 =
  'https://coloriage.info/images/ccovers/1596725585Poil-court-et-lustre-le-chat-american-shorthair-est-originaire-des-Etats-Unis.jpg';
const src3 =
  'https://coloriage.info/images/ccovers/1450829659lapin-et-chat.jpg';
const imagesSources = [src1, src2, src3];
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
let imgcurrent = 1;
let current = 0;
let score = 0;
let time_left = 30;

let time_length = 30;

let interval;

startGame_btn.addEventListener('click', start_game);

function start_game() {
  startGame_btn.classList.add('hidden');
  game.classList.remove('hidden');
  input_element.focus();
  word_element.innerText = getNextWord();

  set_time();
}

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
function createSpanElement(typed_text, backround) {
  const span = document.createElement('span');
  span.innerText = typed_text;
  span.classList.add(backround);
  text_element.appendChild(span);
}

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
  }
}

function game_ended() {
  document.querySelector('.input-section').classList.add('hidden');
  game_ended_element.classList.remove('hidden');
  clearInterval(interval);
  img.src = src1;
}

game_ended_btn.addEventListener('click', () => window.location.reload());

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh
