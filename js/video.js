const video = document.querySelector('.video');
const controls = document.querySelector('.controls');
const playControlBtn = document.querySelector('.play__button');
const videoBtn = document.querySelector('.video-player__button');
const volumeBtn = document.querySelector('.volume__button');
const playProgressBar = document.querySelector('.play__progress');
const volumeProgressBar = document.querySelector('.volume__progress');
const playSvg = document.querySelector('.play-svg');
const volumeSvg = document.querySelector('.volume-svg');

function togglePlay() {
    volumeProgressBar.style.background = `linear-gradient(to right, #bdae82 ${volumeProgressBar.value}%, #dad3ce ${volumeProgressBar.value}%)`;
    if (video.paused) {
        video.play();
        playSvg['href'].baseVal = "./assets/svg/sprite.svg#pause";
        video.classList.add('border');
        videoBtn.style.display = 'none';
        controls.style.display = 'flex';
    } else {
        video.pause();
        playSvg['href'].baseVal = "./assets/svg/sprite.svg#play";
        videoBtn.style.display = 'flex';
    }
}

playControlBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

function playVideo() {
    video.play();
    playSvg['href'].baseVal = "./assets/svg/sprite.svg#pause";
    video.classList.add('border');
    controls.style.display = 'flex';
    videoBtn.style.display = 'none';
    volumeProgressBar.style.background = `linear-gradient(to right, #bdae82 ${volumeProgressBar.value}%, #dad3ce ${volumeProgressBar.value}%)`;
}

videoBtn.addEventListener('click', playVideo);

playProgressBar.value = video.currentTime;

function updateProgress() {
    playProgressBar.value = (video.currentTime / video.duration) * 100;
    playProgressBar.style.background = `linear-gradient(to right, #bdae82 ${playProgressBar.value}%, #dad3ce ${playProgressBar.value}%)`;
    if (video.currentTime === 58.932245) {
        videoBtn.style.display = 'flex';
        playSvg['href'].baseVal = "./assets/svg/sprite.svg#play";
    }
}

video.addEventListener('timeupdate', updateProgress);

function setPlayProgress() {
    video.currentTime = (playProgressBar.value * video.duration) / 100;
}

playProgressBar.addEventListener('input', setPlayProgress);

let currentVolume;

function toggleVolume() {
    if (video.volume !== 0) {
        video.volume = 0;
        volumeProgressBar.value = 0;
        volumeSvg['href'].baseVal = "./assets/svg/sprite.svg#mute";
        volumeProgressBar.style.background = `linear-gradient(to right, #bdae82 ${volumeProgressBar.value}%, #dad3ce ${volumeProgressBar.value}%)`;
    } else {
        volumeProgressBar.value = currentVolume;
        video.volume = volumeProgressBar.value / 100;
        volumeSvg['href'].baseVal = "./assets/svg/sprite.svg#volume";
        volumeProgressBar.style.background = `linear-gradient(to right, #bdae82 ${volumeProgressBar.value}%, #dad3ce ${volumeProgressBar.value}%)`;
    }
}

volumeBtn.addEventListener('click', toggleVolume);

function setVolumeProgress() {
    video.volume = volumeProgressBar.value / 100;
    currentVolume = volumeProgressBar.value;
    volumeProgressBar.style.background = `linear-gradient(to right, #bdae82 ${volumeProgressBar.value}%, #dad3ce ${volumeProgressBar.value}%)`;
    if (video.volume === 0) {
        volumeSvg['href'].baseVal = "./assets/svg/sprite.svg#mute";
    } else {
        volumeSvg['href'].baseVal = "./assets/svg/sprite.svg#volume";
    }
}

volumeProgressBar.addEventListener('input', setVolumeProgress);

export default video;