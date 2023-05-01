const playPauseBtn = document.querySelector('.header__button');
const wrapper = document.querySelector('.header__music');
const audio = document.getElementById('audio');

function soundPlay() {
    playPauseBtn.classList.add("played");
    audio.play();
};
function soundPause() {
    playPauseBtn.classList.remove("played");
    audio.pause();
};

playPauseBtn.addEventListener('click', () =>{
    const isMusicPlay = playPauseBtn.classList.contains("played");
    isMusicPlay ? soundPause() : soundPlay();
});