document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLocaleLowerCase())
})

function playSound(key) {
  let audioEl = document.getElementById(`s_${key}`);
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
