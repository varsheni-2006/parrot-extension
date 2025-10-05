// content.js

// Function to send visible text to server
function sendTextToServer(text) {
    fetch('http://127.0.0.1:5000/process_text', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        // Parse quizOptions from string to JSON
        const quizOptions = JSON.parse(data.quizOptions);

        // Show the quiz popup
        showQuizPopup(data.chosenWord, quizOptions);
    })
    .catch(err => console.error(err));
}

// Function to get visible text (simplified)
function getVisibleText() {
    let text = document.body.innerText || "";
    return text.split(/\s+/).filter(w => w.length >= 3).slice(0, 200).join(" ");
}

// Highlight chosen word
function highlightChosenWord(word) {
    const re = new RegExp("\\b" + word + "\\b", "gi");
    document.body.innerHTML = document.body.innerHTML.replace(re, `<span class="highlighted">${word}</span>`);

    const style = document.createElement('style');
    style.innerHTML = ".highlighted { background: yellow; color: black; }";
    document.head.appendChild(style);
}

// Show popup
function showQuizPopup(word, options) {
    highlightChosenWord(word);

    const popup = document.createElement('div');
    popup.id = "quiz-popup";
    popup.style = "position: fixed; bottom: 10px; right: 10px; width: 250px; background: #f9f9f9; border: 2px solid #3498db; border-radius: 10px; padding: 15px; z-index: 10000;";
    
    let html = `<h4 style="text-align:center;color:#3498db;">Learn a word!</h4>`;
    html += `<p>What is "${word}" in Spanish?</p>`;
    html += `<ul style="list-style:none;padding:0;">`;
    html += `<li class="quiz-option">A. ${options.option1}</li>`;
    html += `<li class="quiz-option">B. ${options.option2}</li>`;
    html += `<li class="quiz-option">C. ${options.option3}</li>`;
    html += `<li class="quiz-option">D. ${options.option4}</li>`;
    html += `</ul>`;
    popup.innerHTML = html;
    document.body.appendChild(popup);

    document.querySelectorAll('.quiz-option').forEach(el => {
        el.addEventListener('click', e => {
            if (el.innerText.includes(options.correct)) {
                el.style.background = "green"; el.style.color = "white";
            } else {
                el.style.background = "red"; el.style.color = "white";
            }
            setTimeout(() => popup.remove(), 2000);
        });
    });
}

// Main execution
const visibleText = getVisibleText();
sendTextToServer(visibleText);
