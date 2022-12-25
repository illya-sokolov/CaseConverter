const upperButton = document.getElementById('upper-case');
const lowerButton = document.getElementById('lower-case');
const properButton = document.getElementById('proper-case');
const sentenceButton = document.getElementById('sentence-case');
const textArea = document.querySelector('textarea');

upperButton.addEventListener('click', () => {
    textArea.value =
    textArea.value.toUpperCase();
});

lowerButton.addEventListener('click', () => {
    textArea.value =
        textArea.value.toLowerCase();
});

properButton.addEventListener('click', () => {
    let sentence = textArea.value.split(' ');
    let result =
        sentence.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    textArea.value =
        result.join(' ');
});

sentenceButton.addEventListener('click', () => {
    let text = textArea.value;
    textArea.value = getSentenceCase(text);
});

function getSentenceCase(str) {
    str = str.toLowerCase();
    return str.replace(
        /(^\s*\w|[\.\!\?]\s*\w)/g,
        function (str) {
            return str.toUpperCase();
        }
    );
}