document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLocaleLowerCase())
});

document.querySelector('.composer button').addEventListener('click',() =>{
  let song = document.querySelector(`#input`).value;
  let songArray = song.split('');
  playComposition(songArray);
});

function playSound(key) {
  let audioEl = document.querySelector(`#s_${key}`);
  let keyEl = document.querySelector(`div[data-key="${key}"]`);

  if(audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();
  }

  if(keyEl) {
    keyEl.classList.add('active');

    setTimeout(()=>{
      keyEl.classList.remove('active');
    }, 300)
  }
}

function playComposition(composition) {
  let wait = 0;

  for (let compositionItem of composition) {
    setTimeout(() => {
      playSound(`key${compositionItem}`);
    }, wait);

    wait += 250;
  }
}
