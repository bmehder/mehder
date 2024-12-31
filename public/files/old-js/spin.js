const Spin = {
  // The audio element
  audio: document.getElementById('audio'),

  // The element that will spin
  spinner: document.getElementById('spinner'),

  // The element that controls the spin play/pause
  controller: document.getElementById('controller'),

  // Toggle the CSS spin class on the spinner element
  spinIt: () => spinner.classList.toggle('spin'),

  // Toggle the play/pause Audio API methods on the audio element
  playPauseAudio: () => (audio.paused ? audio.play() : audio.pause())
};

// Click event listener for the trigger
Spin.controller.addEventListener('click', () => {
  Spin.spinIt();
  Spin.playPauseAudio();
});
