# text_processing/generate_quiz.py
import openai
import json

def generate_quiz_options(chosen_word, api_key, api_org):
    openai.api_key = api_key
    openai.organization = api_org

    question = (
        f"You will make a multiple choice quiz where the user selects the correct word. "
        f"The quiz question will be 'How do you say this {chosen_word} word in Spanish?' "
        "Generate 4 options in Spanish and a 5th element with the correct answer. "
        "Return ONLY JSON with keys: option1, option2, option3, option4, correct. "
        "No extra text. Capitalize first letters, no accents."
    )

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", 
        messages=[{"role": "user", "content": question}]
    )

    try:
        options_dict = json.loads(response.choices[0].message.content)
        return json.dumps(options_dict)
    except json.JSONDecodeError:
        return json.dumps({"error": "Invalid response format"})
