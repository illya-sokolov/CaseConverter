const upperButton = document.getElementById('upper-case');
const lowerButton = document.getElementById('lower-case');
const properButton = document.getElementById('proper-case');
const sentenceButton = document.getElementById('sentence-case');
const textArea = document.querySelector('textarea');
const saveButton = document.getElementById('save-text-file');

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

saveButton.addEventListener('click', () => {
    download("hello.txt","This is the content of my file :)");
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

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
download("hello.txt","This is the content of my file :)");