import io

import json
from google.cloud import vision

client = vision.ImageAnnotatorClient()
string ="" 
#doing google search and a report generation based on the image 
def annotate(path):
    """Returns web annotations given the path to an image."""
    if path.startswith('http') or path.startswith('gs:'):
        image = vision.Image()
        image.source.image_uri = path

    else:
        with io.open(path, 'rb') as image_file:
            content = image_file.read()

        image = vision.Image(content=content)

    web_detection = client.web_detection(image=image).web_detection
    print("THE TYPE IS ", type(web_detection))
    return web_detection


def report(annotations):
    """Prints detected features in the provided web annotations."""
    if annotations.pages_with_matching_images:
        print('\n{} Pages with matching images retrieved'.format(
            len(annotations.pages_with_matching_images)))

        for page in annotations.pages_with_matching_images:
            print('Url   : {}'.format(page.url))

    if annotations.full_matching_images:
        print('\n{} Full Matches found: '.format(
              len(annotations.full_matching_images)))

        for image in annotations.full_matching_images:
            print('Url  : {}'.format(image.url))

    if annotations.partial_matching_images:
        print('\n{} Partial Matches found: '.format(
              len(annotations.partial_matching_images)))

        for image in annotations.partial_matching_images:
            print('Url  : {}'.format(image.url))

    if annotations.web_entities:
        print('\n{} Web entities found: '.format(
              len(annotations.web_entities)))

        for entity in annotations.web_entities:
            print('Score      : {}'.format(entity.score))
            print('Description: {}'.format(entity.description))

def generateJson(annotations):
    jsonOutput = {"page_with_matching_images":[],"full_matching_images":[],"partial_matching_images":[],"web_entities":[]}
    if annotations.pages_with_matching_images:
        temp = annotations.pages_with_matching_images[0]
        jsonOutput["page_with_matching_images"].append({"url":temp.url})
    if annotations.full_matching_images:
        temp = annotations.full_matching_images[0]
        jsonOutput["full_matching_images"].append({"url":temp.url})
    if annotations.partial_matching_images:
        temp=annotations.partial_matching_images[0]
        jsonOutput["partial_matching_images"].append({"url":temp.url})
    if annotations.web_entities:
        temp=annotations.web_entities[0]
        jsonOutput["web_entities"].append({"description":temp.description,"score":temp.score})
    return jsonOutput
#getting Text from Image
def detect_text(path):
    """Detects text in the file."""

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.text_detection(image=image)
    #getting document
    document = response.full_text_annotation
    texts = response.text_annotations
    print('Texts:')
    first = False
    for text in texts:
        if(not first):
            string = str(text.description)
            first = True
        print('\n"{}"'.format(text.description))

        vertices = (['({},{})'.format(vertex.x, vertex.y)
                    for vertex in text.bounding_poly.vertices])

        print('bounds: {}'.format(','.join(vertices)))\
    

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))
    return document,image,response
# #App Interface
# from kivy.app import App
# from kivy.uix.label import Label

# class MainApp(App):
#     def build(self):
#         label = Label(text="This is some bullshit",
#                       size_hint=(.5, .5),
#                       pos_hint={'center_x': .5, 'center_y': .5})

#         return label

import pyrebase

config = { "apiKey": "AIzaSyBuG3ba837x2P3KPvcy_hsu8ZKLaG-AXn4",
  "authDomain": "sustoken.firebaseapp.com",
  "projectId": "sustoken",
  "storageBucket": "sustoken.appspot.com",
  "serviceAccount": "sustoken-firebase-adminsdk-d5cfw-916fa5f928.json",
   "databaseURL": "https://sustoken-default-rtdb.firebaseio.com",
  "messagingSenderId": "856929242603",
  "appId": "1:856929242603:web:718c7389cf78996e2c9dae",
  "measurementId": "G-08DSZ7FLE3"}

def getImage():
    value = storage.child("some-child.jpg")
    value.download("Test.jpg")

if __name__ == '__main__':
    firebase_storage =  pyrebase.initialize_app(config)
    storage = firebase_storage.storage()
    getImage()
    # document,image,response = detect_text("Test.jpg")
    analysis = annotate("Test.jpg")
    report(analysis)
    file = open('output.json', 'w') 
    file2 = open('output.txt','w')
    output =json.dump(generateJson(analysis),file)
    file.close()
    storage.child("output.json").put("output.json")
    file2.write(output) 
    file2.close()
    storage.child("output.txt").put("outputput.txt")
    # print("My string is ", string)
    # app = MainApp()
    # app.run()
    