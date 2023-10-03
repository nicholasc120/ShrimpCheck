let originalTitle = document.title;

document.getElementById('startButton').addEventListener('click', function () {
    let interval = parseInt(document.getElementById('intervalSelect').value);
    playSoundRandomly(interval)
    setInterval(() => { playSoundRandomly(interval) }, interval)
    document.getElementById('startButton').disabled = true;
});

// Wait a random amount of time before playing the sound
function playSoundRandomly(interval) {
    const randomTime = Math.floor(Math.random() * interval);
    console.log(randomTime);
    setTimeout(playAudio, randomTime);
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

    document.title = 'CHECK YOUR POSTURE!!!';
}
