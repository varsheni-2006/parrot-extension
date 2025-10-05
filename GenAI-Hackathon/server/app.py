from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Add path to text_processing folder if needed
sys.path.append(os.path.abspath('../text_processing'))

from find_word import get_chosen_word_and_quiz

app = Flask(__name__)
CORS(app)

@app.route('/process_text', methods=['POST'])
def process_text():
    data = request.json
    input_text = data.get('text', "")

    try:
        chosen_word, quiz_options = get_chosen_word_and_quiz(input_text)
        return jsonify({'chosenWord': chosen_word, 'quizOptions': quiz_options})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
