const hover = document.querySelector(".yellow")
const hover2 = document.querySelector(".red")
const hover3 = document.querySelector(".blue")
const hover4 = document.querySelector(".green")
  function insertHover() {
    hover.classList.add('btn-js')
    hover2.classList.add('btn-js')
    hover3.classList.add('btn-js')
    hover4.classList.add('btn-js')
    setTimeout(() => {
      hover.classList.remove('btn-js')
      hover2.classList.remove('btn-js')
      hover3.classList.remove('btn-js')
      hover4.classList.remove('btn-js')
    }, 300);
  }

var score = 1;
const jump = () => {
    var scoreNumber = document.getElementById('score');
    const mario = document.querySelector('.mario');
    const audio = document.querySelector('#jump-audio');
    audio.play();
    const soundtrack = document.querySelector('#audio-soundtrack');
    soundtrack.play();
  
    const cloud = document.querySelector('.cloud');
    cloud.classList.add('startCloud');
    const pipe = document.querySelector('.pipe');
    pipe.classList.add('startPipe');
    const sun = document.querySelector('.sun');
    sun.src = './imgs/sun.gif';
    
    mario.classList.add('jump');
    mario.classList.remove('marioStart');
    mario.src = './imgs/mario-jump.png';
    mario.style.width = '60px';
    mario.style.marginLeft = '85px'
  setTimeout(() => {
    mario.style.width = '120px';
    mario.src = './imgs/mario-run.gif'
    mario.classList.remove('jump');
    scoreNumber.innerHTML = score++;
  }, 680);
}

const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const cloud = document.querySelector('.cloud');
    const sun = document.querySelector('.sun');
    const soundtrack = document.querySelector('#audio-soundtrack');

    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = cloud.offsetLeft;

    if (pipePosition <= 130 && pipePosition > 0 && marioPosition < 130){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        sun.src = './imgs/sun-static.png'

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imgs/gameover.webp'
        mario.style.width = '120px'
        mario.style.marginLeft = '35px'
        
        soundtrack.pause();
    }
    }, 10)

    document.addEventListener('keydown', jump);