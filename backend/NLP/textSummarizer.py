import json
import requests
api_key = '076e1941-c35c-419e-ad18-475f838237a0'
url = "https://api.oneai.com/api/v0/pipeline"
f = open('test.txtoutput-19-to-20.json', 'r')
file = json.load(f)
text =""
for sub_text in file["responses"]:
    text += sub_text["fullTextAnnotation"]["text"]
# print(file["responses"][ : ]['fullTextAnnotation']['text'])
print(text)
headers = {"api-key": api_key, "content-type": "application/json"}
payload = {"text": text, "input_type":"article","steps":[{"skill":"article-topics"},{"skill":"summarize","params":{"find_origins":True}}]}

r = requests.post(url, json=payload, headers=headers)
data = r.json()
theKeys = data['output'][1]['text'] 
print(theKeys)


