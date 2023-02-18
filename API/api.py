import requests

API_URL = "https://api-inference.huggingface.co/models/Hello-SimpleAI/chatgpt-detector-roberta"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()



output = query({
	"inputs": "I like you. I love you",
})

print(output)
