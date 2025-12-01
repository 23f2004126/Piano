const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector("#show-keys-toggle");

let audio = new Audio("tunes/a.wav"); // default sound file

// Play sound function
function playSound(key) {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`.key[data-key="${key}"]`);
    if (!clickedKey) return;

    clickedKey.classList.add("active");
    setTimeout(() => clickedKey.classList.remove("active"), 150);
}

// Click with mouse
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playSound(key.dataset.key));
});

// Keyboard press
document.addEventListener("keydown", e => {
    if (e.repeat) return; // avoid looping
    const key = e.key.toLowerCase();

    const matchedKey = document.querySelector(`.key[data-key="${key}"]`);
    if (matchedKey) playSound(key);
});

// Volume control
volumeSlider.addEventListener("input", e => {
    audio.volume = e.target.value;
});

// ⭐ Show/Hide Key Labels
keysCheckbox.addEventListener("change", () => {
    pianoKeys.forEach(key => {
        if (keysCheckbox.checked) {
            key.classList.add("show");
        } else {
            key.classList.remove("show");
        }
    });
});
