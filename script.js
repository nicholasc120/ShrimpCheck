let originalTitle = document.title;
let intervalId;

document.getElementById('startButton').addEventListener('click', function () {
    playSoundRandomly(parseInt(document.getElementById('intervalSelect').value))
    document.getElementById('startButton').disabled = true;
});

function playSoundRandomly(interval) {
    playAudio();

    // Play sound at random time within the interval
    const randomTime = getRandomTime(interval);
    console.log(randomTime)
    // Clear any existing intervals
    clearInterval(intervalId);

    // Play sound at random time within the interval
    intervalId = setTimeout(() => {
        playSoundRandomly(interval)
        document.title = 'CHECK YOUR POSTURE!!!';
    }, randomTime);
}


// Restore original title when tab is in focus
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        document.title = originalTitle;
    }
});

function playAudio() {
    const audio = document.getElementById('audio');
    audio.currentTime = 0;
    audio.play();
}

function getRandomTime(interval) {
    return Math.floor(Math.random() * interval);
}