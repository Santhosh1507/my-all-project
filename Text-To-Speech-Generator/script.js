const synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();

    const voiceSelect = document.getElementById('voice-select');
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;

        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

const speakButton = document.getElementById('speak-button');
speakButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const voiceSelect = document.getElementById('voice-select');
    const selectedVoice = voices[voiceSelect.selectedIndex];

    const utterance = new SpeechSynthesisUtterance(textInput);
    utterance.voice = selectedVoice;
    synth.speak(utterance);
});