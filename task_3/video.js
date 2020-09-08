'use strict';
const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

let wasVideoPlaying = false;
let progressIdentifier = null;

window.addEventListener('load', function () {
    timing.min = 0;
    timing.max = video.duration;
});

pauseBtn.addEventListener('click', function () {
    if (!video.paused) {
        // console.log('pause btn');
        video.pause();
        clearInterval(progressIdentifier);
    }
});

playBtn.addEventListener('click', function () {
    // console.log('play btn');
    if (video.paused) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

timing.addEventListener('change', function () {
    // console.log('timing change');
    video.currentTime = timing.value;
    if (wasVideoPlaying) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    } else {
        changeProgress();
    }
});

timing.addEventListener('mousedown', function () {
    // console.log('timing mousedown');
    
    wasVideoPlaying = !video.paused;
    if (wasVideoPlaying) {
        video.pause();
        clearInterval(progressIdentifier);
    }
});

function changeProgress() {
    timing.value = video.currentTime;
    currentTimeEl.innerText = video.currentTime;
}

video.addEventListener('ended', function() {
    clearInterval(progressIdentifier);
});


volume.addEventListener('change', function () {
    video.volume = volume.value;
});

function changeValue() {
    video.volume = volume.value;
}


document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            video.currentTime -= 2;
            break;
 
        case 'ArrowRight':
            video.currentTime += 2;
            break;
    }
    if (video.paused) {
        video.pause();
    } else {
        video.play();
    }
    changeProgress();

    switch(event.key) {
        case 'ArrowUp':
            volume.value = (+volume.value + 0.1).toString();
            break;
        case 'ArrowDown':
            volume.value = (+volume.value - 0.1).toString();
            break;  
    }
    changeValue();

    if (event.key ==' ' && !video.paused) {
        video.pause();
    } else {
        video.play();
    }
    
})
