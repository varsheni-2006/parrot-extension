# find_word.py

import json

# Mock function instead of calling OpenAI
def get_chosen_word_and_quiz(text):
    # For demonstration, we pick a word from the text
    words = text.split()
    chosen_word = words[0].capitalize() if words else "Word"

    # Mock quiz options
    quiz_options = {
        "option1": "Hola",
        "option2": "Adios",
        "option3": "Gracias",
        "option4": "Porfavor",
        "correct": "Hola"
    }

    # Return JSON as string to match your original code
    return chosen_word, json.dumps(quiz_options)
