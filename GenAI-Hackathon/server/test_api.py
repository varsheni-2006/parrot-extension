import requests
import json

url = "http://127.0.0.1:5000/process_text"
data = {"text": "Learning Spanish is fun."}

response = requests.post(url, json=data)
print("Response from server:")
print(json.dumps(response.json(), indent=4))
